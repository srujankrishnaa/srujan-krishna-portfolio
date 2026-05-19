"use client";

import React, { useRef, useEffect, useMemo } from "react";
import {
  Clock,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  SRGBColorSpace,
  MathUtils,
  Vector2,
  Vector3,
  MeshPhysicalMaterial,
  Color,
  Object3D,
  InstancedMesh,
  PMREMGenerator,
  SphereGeometry,
  AmbientLight,
  PointLight,
  ACESFilmicToneMapping,
  Raycaster,
  Plane,
} from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import Link from "next/link";
import { cn } from "@/lib/utils";

/* ──────────────────────────────────────────────────────
   Three.js boilerplate: scene / camera / renderer / loop
   ────────────────────────────────────────────────────── */
class ThreeApp {
  #config: any;
  #resizeObserver?: ResizeObserver;
  #intersectionObserver?: IntersectionObserver;
  #resizeTimer?: number;
  #animationFrameId: number = 0;
  #clock: Clock = new Clock();
  #animationState = { elapsed: 0, delta: 0 };
  #isAnimating = false;
  #isVisible = false;
  canvas: HTMLCanvasElement;
  camera: PerspectiveCamera;
  scene: Scene;
  renderer: WebGLRenderer;
  size: any = { width: 0, height: 0, wWidth: 0, wHeight: 0, ratio: 0, pixelRatio: 0 };
  onBeforeRender: (state: { elapsed: number; delta: number }) => void = () => {};
  onAfterResize: (size: any) => void = () => {};

  constructor(config: any) {
    this.#config = config;
    this.canvas = config.canvas;
    this.camera = new PerspectiveCamera(50, 1, 0.1, 100);
    this.scene = new Scene();
    this.renderer = new WebGLRenderer({
      canvas: this.canvas,
      powerPreference: "high-performance",
      alpha: true,
      antialias: true,
    });
    this.renderer.outputColorSpace = SRGBColorSpace;
    this.canvas.style.display = "block";
    this.#initObservers();
    this.resize();
  }

  #initObservers() {
    const parentEl = this.#config.size === "parent" ? (this.canvas.parentNode as Element) : null;
    if (parentEl) {
      this.#resizeObserver = new ResizeObserver(this.#onResize.bind(this));
      this.#resizeObserver.observe(parentEl);
    } else {
      window.addEventListener("resize", this.#onResize.bind(this));
    }
    this.#intersectionObserver = new IntersectionObserver(this.#onIntersection.bind(this), { threshold: 0 });
    this.#intersectionObserver.observe(this.canvas);
    document.addEventListener("visibilitychange", this.#onVisibilityChange.bind(this));
  }

  #onResize() {
    if (this.#resizeTimer) clearTimeout(this.#resizeTimer);
    this.#resizeTimer = window.setTimeout(this.resize.bind(this), 100);
  }

  resize() {
    const parentEl = this.#config.size === "parent" ? (this.canvas.parentNode as HTMLElement) : null;
    const w = parentEl ? parentEl.offsetWidth : window.innerWidth;
    const h = parentEl ? parentEl.offsetHeight : window.innerHeight;
    this.size.width = w; this.size.height = h; this.size.ratio = w / h;
    this.camera.aspect = this.size.ratio; this.camera.updateProjectionMatrix();
    const fovRad = (this.camera.fov * Math.PI) / 180;
    this.size.wHeight = 2 * Math.tan(fovRad / 2) * this.camera.position.z;
    this.size.wWidth = this.size.wHeight * this.camera.aspect;
    this.renderer.setSize(w, h);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.onAfterResize(this.size);
  }

  #onIntersection(e: IntersectionObserverEntry[]) {
    this.#isAnimating = e[0].isIntersecting;
    this.#isAnimating ? this.#startAnimation() : this.#stopAnimation();
  }

  #onVisibilityChange() {
    if (this.#isAnimating) document.hidden ? this.#stopAnimation() : this.#startAnimation();
  }

  #startAnimation() {
    if (this.#isVisible) return;
    this.#isVisible = true;
    this.#clock.start();
    const f = () => {
      this.#animationFrameId = requestAnimationFrame(f);
      this.#animationState.delta = this.#clock.getDelta();
      this.#animationState.elapsed += this.#animationState.delta;
      this.onBeforeRender(this.#animationState);
      this.renderer.render(this.scene, this.camera);
    };
    f();
  }

  #stopAnimation() {
    if (this.#isVisible) {
      cancelAnimationFrame(this.#animationFrameId);
      this.#isVisible = false;
      this.#clock.stop();
    }
  }

  dispose() {
    this.#stopAnimation();
    this.#resizeObserver?.disconnect();
    this.#intersectionObserver?.disconnect();
    window.removeEventListener("resize", this.#onResize.bind(this));
    document.removeEventListener("visibilitychange", this.#onVisibilityChange.bind(this));
    this.scene.clear();
    this.renderer.dispose();
  }
}

/* ──────────────────────────────────────────────────────
   Physics engine
   ────────────────────────────────────────────────────── */
class Physics {
  config: any;
  positionData: Float32Array;
  velocityData: Float32Array;
  sizeData: Float32Array;
  center: Vector3 = new Vector3();

  constructor(config: any) {
    this.config = config;
    this.positionData = new Float32Array(3 * config.count);
    this.velocityData = new Float32Array(3 * config.count);
    this.sizeData = new Float32Array(config.count);
    this.#initPositions();
    this.setSizes();
  }

  #initPositions() {
    const { count, maxX, maxY, maxZ } = this.config;
    this.center.toArray(this.positionData, 0);
    for (let i = 1; i < count; i++) {
      const idx = 3 * i;
      this.positionData[idx] = MathUtils.randFloatSpread(2 * maxX);
      this.positionData[idx + 1] = MathUtils.randFloatSpread(2 * maxY);
      this.positionData[idx + 2] = MathUtils.randFloatSpread(2 * maxZ);
    }
  }

  setSizes() {
    const { count, size0, minSize, maxSize } = this.config;
    this.sizeData[0] = size0;
    for (let i = 1; i < count; i++) this.sizeData[i] = MathUtils.randFloat(minSize, maxSize);
  }

  update(deltaInfo: { delta: number }) {
    const { config, center, positionData, sizeData, velocityData } = this;
    const startIdx = config.controlSphere0 ? 1 : 0;
    if (config.controlSphere0) {
      new Vector3().fromArray(positionData, 0).lerp(center, 0.1).toArray(positionData, 0);
      new Vector3(0, 0, 0).toArray(velocityData, 0);
    }
    for (let i = startIdx; i < config.count; i++) {
      const base = 3 * i;
      const pos = new Vector3().fromArray(positionData, base);
      const vel = new Vector3().fromArray(velocityData, base);
      vel.y -= deltaInfo.delta * config.gravity * sizeData[i];
      vel.multiplyScalar(config.friction);
      vel.clampLength(0, config.maxVelocity);
      pos.add(vel);
      for (let j = i + 1; j < config.count; j++) {
        const otherBase = 3 * j;
        const otherPos = new Vector3().fromArray(positionData, otherBase);
        const diff = new Vector3().subVectors(otherPos, pos);
        const dist = diff.length();
        const sumR = sizeData[i] + sizeData[j];
        if (dist < sumR) {
          const overlap = (sumR - dist) * 0.5;
          diff.normalize();
          pos.addScaledVector(diff, -overlap);
          otherPos.addScaledVector(diff, overlap);
          pos.toArray(positionData, base);
          otherPos.toArray(positionData, otherBase);
        }
      }
      if (Math.abs(pos.x) + sizeData[i] > config.maxX) { pos.x = Math.sign(pos.x) * (config.maxX - sizeData[i]); vel.x *= -config.wallBounce; }
      if (pos.y - sizeData[i] < -config.maxY) { pos.y = -config.maxY + sizeData[i]; vel.y *= -config.wallBounce; }
      if (Math.abs(pos.z) + sizeData[i] > config.maxZ) { pos.z = Math.sign(pos.z) * (config.maxZ - sizeData[i]); vel.z *= -config.wallBounce; }
      pos.toArray(positionData, base);
      vel.toArray(velocityData, base);
    }
  }
}

/* ──────────────────────────────────────────────────────
   Instanced spheres mesh
   ────────────────────────────────────────────────────── */
const _dummy = new Object3D();
class Spheres extends InstancedMesh {
  config: any;
  physics: Physics;
  ambientLight: AmbientLight;
  light: PointLight;

  constructor(renderer: WebGLRenderer, params: any) {
    const pmrem = new PMREMGenerator(renderer);
    const envTexture = pmrem.fromScene(new RoomEnvironment()).texture;
    pmrem.dispose();
    const geometry = new SphereGeometry(1, 24, 24);
    const material = new MeshPhysicalMaterial({ envMap: envTexture, ...params.materialParams });
    super(geometry, material, params.count);
    this.config = params;
    this.physics = new Physics(this.config);
    this.ambientLight = new AmbientLight(0xffffff, params.ambientIntensity);
    this.add(this.ambientLight);
    this.light = new PointLight(0xffffff, params.lightIntensity, 100, 1);
    this.add(this.light);
    this.setColors(this.config.colors);
  }

  setColors(colors: (string | Color)[]) {
    if (!Array.isArray(colors) || !colors.length) return;
    const colorObjs = colors.map((c) => (c instanceof Color ? c : new Color(c)));
    for (let i = 0; i < this.count; i++) this.setColorAt(i, colorObjs[i % colorObjs.length]);
    if (this.instanceColor) this.instanceColor.needsUpdate = true;
  }

  update(deltaInfo: { delta: number }) {
    this.physics.update(deltaInfo);
    for (let i = 0; i < this.count; i++) {
      _dummy.position.fromArray(this.physics.positionData, 3 * i);
      _dummy.scale.setScalar(this.physics.sizeData[i]);
      _dummy.updateMatrix();
      this.setMatrixAt(i, _dummy.matrix);
    }
    this.instanceMatrix.needsUpdate = true;
    if (this.config.controlSphere0) this.light.position.fromArray(this.physics.positionData, 0);
  }
}

/* ──────────────────────────────────────────────────────
   Pointer tracking
   ────────────────────────────────────────────────────── */
const pointer = new Vector2();
function onPointerMove(e: PointerEvent) {
  pointer.set((e.clientX / window.innerWidth) * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1);
}

/* ──────────────────────────────────────────────────────
   Color palettes
   ────────────────────────────────────────────────────── */
// Light mode: near-white metallic spheres
const lightColors = ["#E8E8E0", "#D0D0C8", "#B8B8B0", "#F0EFE8"];
// Dark/gold mode: dark metallic with gold tints
const darkColors  = ["#2a2410", "#1a1a0a", "#3a3218", "#0f0f08"];

/* ──────────────────────────────────────────────────────
   Default ballpit config
   ────────────────────────────────────────────────────── */
const defaultConfig = {
  count: 120,
  materialParams: { metalness: 0.85, roughness: 0.15, clearcoat: 1, clearcoatRoughness: 0.1 },
  minSize: 0.25, maxSize: 0.75, size0: 0.8,
  gravity: 0.35, friction: 0.995, wallBounce: 0.25, maxVelocity: 0.1,
  maxX: 10, maxY: 10, maxZ: 10,
  controlSphere0: true, followCursor: true,
  lightIntensity: 4, ambientIntensity: 2,
};

/* ──────────────────────────────────────────────────────
   Portfolio Footer component
   ────────────────────────────────────────────────────── */
interface BallpitFooterProps {
  isDark?: boolean;
  className?: string;
}

export function BallpitFooter({ isDark = false, className }: BallpitFooterProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const year = new Date().getFullYear();

  const config = useMemo(() => ({
    ...defaultConfig,
    colors: isDark ? darkColors : lightColors,
  }), [isDark]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const three = new ThreeApp({ canvas, size: "parent" });
    three.renderer.toneMapping = ACESFilmicToneMapping;
    three.camera.position.set(0, 0, 20);

    const spheres = new Spheres(three.renderer, config);
    three.scene.add(spheres);

    const raycaster = new Raycaster();
    const plane = new Plane(new Vector3(0, 0, 1), 0);
    const intersectionPoint = new Vector3();

    window.addEventListener("pointermove", onPointerMove);

    three.onBeforeRender = (deltaInfo) => {
      raycaster.setFromCamera(pointer, three.camera);
      if (raycaster.ray.intersectPlane(plane, intersectionPoint)) {
        spheres.physics.center.copy(intersectionPoint);
      }
      spheres.update(deltaInfo);
    };

    three.onAfterResize = (size) => {
      spheres.physics.config.maxX = size.wWidth / 2;
      spheres.physics.config.maxY = size.wHeight / 2;
      spheres.physics.config.maxZ = size.wWidth / 4;
    };

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      three.dispose();
    };
  }, [config]);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Achievements", href: "/achievements" },
    { label: "Certificates", href: "/certificates" },
  ];

  const socialLinks = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/srujan-krishna-gandamalla-944a03257/" },
    { label: "GitHub", href: "https://github.com/srujankrishnaa" },
    { label: "Blog", href: "https://medium.com/@srujankrishnac1" },
  ];

  const accent = isDark ? "#d8bd10" : "#8ef1d1";
  const borderTop = isDark ? "#d8bd10" : "#000";
  const textMain = isDark ? "#e2e8f0" : "#fff";
  const textMuted = isDark ? "rgba(216,189,16,0.5)" : "rgba(255,255,255,0.45)";

  return (
    <footer
      className={cn("relative overflow-hidden border-t-4", className)}
      style={{
        borderTopColor: borderTop,
        backgroundColor: isDark ? "#05060f" : "#0a0a0a",
        minHeight: "480px",
      }}
    >
      {/* Three.js physics canvas */}
      <div className="absolute inset-0 z-0">
        <canvas ref={canvasRef} className="h-full w-full" />
      </div>

      {/* Gradient overlay so text is always readable */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: isDark
            ? "linear-gradient(to top, rgba(5,6,15,0.98) 0%, rgba(5,6,15,0.75) 45%, rgba(5,6,15,0.05) 100%)"
            : "linear-gradient(to top, rgba(10,10,10,0.98) 0%, rgba(10,10,10,0.75) 45%, rgba(10,10,10,0.05) 100%)",
        }}
      />

      {/* Footer content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-8">
        {/* Main grid */}
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr]">

          {/* Brand column */}
          <div>
            <p
              className="text-xs font-black uppercase tracking-[0.32em]"
              style={{ color: accent }}
            >
              Portfolio
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-white md:text-4xl">
              Srujan Krishna
            </h2>
            <div className="mt-6 flex flex-col items-start gap-3">
              <a
                href="mailto:srujankrishnac1@gmail.com"
                className="inline-flex items-center border-2 px-4 py-2 text-xs font-black uppercase tracking-wider transition hover:opacity-70"
                style={{ borderColor: accent, color: accent }}
              >
                srujankrishnac1@gmail.com
              </a>
              <a
                href="/srujan-krishna-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border-2 px-4 py-2 text-xs font-black uppercase tracking-wider transition hover:opacity-70"
                style={{ borderColor: accent, color: accent }}
              >
                View Resume ↗
              </a>
            </div>
          </div>

          {/* Navigate column */}
          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-widest" style={{ color: textMuted }}>
              Navigate
            </p>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="group flex items-center gap-2 text-sm font-semibold transition"
                    style={{ color: textMain }}
                  >
                    <span
                      className="h-px w-4 shrink-0 transition-all duration-300 group-hover:w-7"
                      style={{ backgroundColor: accent }}
                    />
                    <span className="opacity-70 transition group-hover:opacity-100">{l.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect column */}
          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-widest" style={{ color: textMuted }}>
              Connect
            </p>
            <ul className="space-y-3">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-sm font-semibold transition"
                    style={{ color: textMain }}
                  >
                    <span
                      className="h-px w-4 shrink-0 transition-all duration-300 group-hover:w-7"
                      style={{ backgroundColor: accent }}
                    />
                    <span className="opacity-70 transition group-hover:opacity-100">{s.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div
          className="mt-14 border-t"
          style={{ borderColor: isDark ? "rgba(216,189,16,0.15)" : "rgba(255,255,255,0.08)" }}
        />

        {/* Copyright bar */}
        <div className="mt-6 flex flex-col items-center justify-between gap-3 md:flex-row">
          <p className="text-xs" style={{ color: textMuted }}>
            © {year} Srujan Krishna Gandamalla. Built with Next.js &amp; passion.
          </p>
          <p
            className="text-xs font-black uppercase tracking-widest"
            style={{ color: isDark ? "rgba(216,189,16,0.2)" : "rgba(255,255,255,0.15)" }}
          >
            Designed &amp; Developed by Srujan Krishna
          </p>
        </div>
      </div>
    </footer>
  );
}
