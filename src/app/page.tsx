"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Award,
  BookOpenText,
  BriefcaseBusiness,
  Cpu,
  FileBadge,
  FileText,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Trophy,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { ParticleCanvas } from "@/components/ui/particle-canvas";
import { GooeyFilter } from "@/components/ui/gooey-filter";
import { PixelTrail } from "@/components/ui/pixel-trail";
import OrbitingSkills from "@/components/ui/orbiting-skills";
import { BallpitFooter } from "@/components/ui/interactive-hero-backgrounds";
import { CpuArchitecture } from "@/components/ui/cpu-architecture";
import { cn } from "@/lib/utils";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/srujan-krishna-gandamalla-944a03257/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/srujankrishnaa",
    icon: Github,
  },
  {
    label: "Blog",
    href: "https://medium.com/@srujankrishnac1",
    icon: BookOpenText,
  },
];

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Certificates", href: "#certificates" },
];

const phoneApps = [
  {
    label: "Profile",
    href: "#about",
    icon: Sparkles,
    gradient: "from-cyan-300 to-blue-500",
  },
  {
    label: "Resume",
    href: "/srujan-krishna-resume.pdf",
    icon: FileText,
    gradient: "from-rose-300 to-orange-500",
  },
  {
    label: "LinkedIn",
    href: socials[0].href,
    icon: Linkedin,
    gradient: "from-sky-300 to-blue-700",
  },
  {
    label: "GitHub",
    href: socials[1].href,
    icon: Github,
    gradient: "from-neutral-100 to-neutral-500",
  },
  {
    label: "Blog",
    href: socials[2].href,
    icon: BookOpenText,
    gradient: "from-emerald-300 to-lime-500",
  },
  {
    label: "Projects",
    href: "#projects",
    icon: BriefcaseBusiness,
    gradient: "from-violet-300 to-fuchsia-600",
  },
  {
    label: "Skills",
    href: "#skills",
    icon: Cpu,
    gradient: "from-amber-200 to-yellow-500",
  },
  {
    label: "Awards",
    href: "/achievements",
    icon: Trophy,
    gradient: "from-yellow-200 to-orange-500",
  },
  {
    label: "Certs",
    href: "/certificates",
    icon: FileBadge,
    gradient: "from-pink-300 to-purple-600",
  },
];

const skillsPreview = [
  "SQL Analytics",
  "Spark",
  "Kafka",
  "Airflow",
  "dbt",
  "CI/CD",
  "APIs",
  "Full-stack systems",
];

const projectsPreview = [
  {
    slug: "bioscope-ai",
    title: "BioscopeAI",
    github: "https://github.com/srujankrishnaa/BioscopeAI",
    description: "AI-powered urban biomass estimation using satellite imagery, FastAPI backend, and React dashboard.",
    tech: ["Python", "FastAPI", "React", "ML", "Satellite Data"],
  },
  {
    slug: "financial-signals",
    title: "Financial Signals Dashboard",
    github: "https://github.com/srujankrishnaa/Alphavision",
    description: "Real-time financial signal monitoring with AI-driven market analysis and interactive visualizations.",
    tech: ["Python", "AI/ML", "Data Analytics"],
  },
  {
    slug: "ecommerce-analytics",
    title: "Real-Time E-Commerce Analytics Pipeline",
    github: "https://github.com/srujankrishnaa/Ecommerce_Analytics",
    description: "End-to-end streaming analytics pipeline for e-commerce data with Kafka, Spark, and live dashboards.",
    tech: ["Kafka", "Spark", "Python", "Streaming"],
  },
  {
    slug: "weather-etl",
    title: "Automated Weather Data ETL Pipeline",
    github: "https://github.com/srujankrishnaa/weather-data-automated-etl-pipeline",
    description: "Automated ETL pipeline ingesting weather data with orchestration, transformation, and warehouse loading.",
    tech: ["Python", "ETL", "Airflow", "Data Engineering"],
  },
  {
    slug: "cascade-lakehouse",
    title: "Cascade Lakehouse",
    github: "https://github.com/srujankrishnaa/Cascade-Lakehouse",
    description: "Modern data lakehouse with Bronze-Silver-Gold medallion architecture using Iceberg and Spark.",
    tech: ["Spark", "Iceberg", "Data Lakehouse", "Python"],
  },
];

function SiteNav({ isDark }: { isDark?: boolean }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 shadow-[0_12px_50px_rgba(0,0,0,.12)] backdrop-blur-xl transition-colors duration-700"
        style={{
          backgroundColor: isDark ? "rgba(10,10,20,0.85)" : "rgba(255,255,255,0.8)",
          borderColor: isDark ? "rgba(216,189,16,0.2)" : "rgba(0,0,0,0.1)",
          color: isDark ? "#e2e8f0" : "#000",
        }}
      >        <Link href="#home" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-black/15 bg-black text-sm font-black text-white">
            SK
          </span>
          <span className="hidden text-sm font-black uppercase tracking-wide sm:inline">
            Srujan Krishna
          </span>
        </Link>

        <div className="hidden items-center gap-1 text-xs font-black uppercase md:flex">
          {navItems.slice(0, 4).map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-full px-4 py-2 transition hover:bg-black hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="grid h-9 w-9 place-items-center rounded-full border bg-white text-black transition hover:-translate-y-0.5 hover:bg-[#78f2d1]"
                style={{
                  borderColor: isDark ? "rgba(216,189,16,0.2)" : "rgba(0,0,0,0.1)",
                  backgroundColor: isDark ? "rgba(20,20,35,0.8)" : "#fff",
                  color: isDark ? "#d8bd10" : "#000",
                }}
              >
                <Icon className="h-4 w-4" />
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}

function RetroHero({ isGoldMode, onToggle }: { isGoldMode: boolean; onToggle: () => void }) {

  return (
    <section
      id="home"
      className="relative h-screen min-h-[700px] overflow-hidden transition-colors duration-700"
      style={{
        backgroundColor: isGoldMode ? "#05060f" : "#f7f7f2",
        color: isGoldMode ? "#d8bd10" : "#000",
      }}
    >
      {/* Grid paper background */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-700 [background-size:48px_48px]"
        style={{
          opacity: isGoldMode ? 0.15 : 0.7,
          backgroundImage: isGoldMode
            ? "linear-gradient(rgba(216,189,16,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(216,189,16,.15) 1px, transparent 1px)"
            : "linear-gradient(rgba(0,0,0,.075) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.075) 1px, transparent 1px)",
        }}
      />

      {/* ── Geometric color blocks ── */}
      <div
        className="absolute bottom-0 left-[2%] h-[48%] w-[26%] transition-colors duration-700"
        style={{ backgroundColor: isGoldMode ? "#0d4a3f" : "#8ef1d1" }}
      />
      <div
        className="absolute bottom-0 left-0 h-[8%] w-[58%] transition-colors duration-700"
        style={{ backgroundColor: isGoldMode ? "#0d4a3f" : "#8ef1d1" }}
      />
      <div
        className="absolute bottom-0 right-0 h-[6%] w-[12%] transition-colors duration-700"
        style={{ backgroundColor: isGoldMode ? "#0d4a3f" : "#8ef1d1" }}
      />
      <div
        className="absolute bottom-[22%] left-[7%] h-[16%] w-[12%] transition-colors duration-700"
        style={{ backgroundColor: isGoldMode ? "#0c1222" : "#f7f7f2" }}
      />
      <div
        className="absolute bottom-[6%] right-[2%] h-[26%] w-[34%] transition-colors duration-700"
        style={{ backgroundColor: isGoldMode ? "#1e293b" : "#d8d8d8" }}
      />
      <div
        className="absolute bottom-[8%] left-[30%] h-[14%] w-[26%] transition-colors duration-700"
        style={{ backgroundColor: isGoldMode ? "#1e293b" : "#d8d8d8" }}
      />

      {/* ── Particle effect overlay ── */}
      <ParticleCanvas
        isGoldMode={isGoldMode}
        onToggle={onToggle}
      />

      {/* ── Text Row 1: "FULL STACK" ── */}
      <motion.div
        initial={{ x: -120, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-0 right-0 top-[16%] z-[5] flex items-center justify-center overflow-hidden"
      >
        <p
          className="select-none whitespace-nowrap text-center text-[clamp(5.5rem,13vw,15rem)] font-black uppercase leading-[0.82] tracking-[-0.04em] transition-all duration-700"
          style={
            isGoldMode
              ? {
                background:
                  "linear-gradient(180deg, #f5e6a3 0%, #d8bd10 40%, #b8960c 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 30px rgba(216,189,16,.3))",
              }
              : { color: "#000" }
          }
        >
          FULL STACK
        </p>
      </motion.div>

      {/* ── Text Row 2: "BUILDER" ── */}
      <motion.div
        initial={{ x: 120, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-0 right-0 top-[40%] z-[5] flex items-center justify-center overflow-hidden"
      >
        <p
          className="select-none whitespace-nowrap text-center text-[clamp(5.5rem,13vw,15rem)] font-black uppercase leading-[0.82] tracking-[-0.04em] transition-all duration-700"
          style={
            isGoldMode
              ? {
                background:
                  "linear-gradient(180deg, #f5e6a3 0%, #d8bd10 40%, #b8960c 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 30px rgba(216,189,16,.3))",
              }
              : { color: "#000" }
          }
        >
          BUILDER
        </p>
      </motion.div>

      {/* ── Character image ── */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-[6%] left-[66%] z-10 h-[78%] w-[min(44vw,640px)] min-w-[340px] -translate-x-1/2"
      >
        <motion.div
          className="relative h-full w-full"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/hero/centerpiece.png"
            alt="Srujan Krishna animated portfolio centerpiece"
            fill
            priority
            sizes="(min-width: 1024px) 640px, 340px"
            className="object-contain object-bottom transition-all duration-700"
            style={{
              filter: isGoldMode
                ? "drop-shadow(0 0 20px rgba(216,189,16,.25)) brightness(0.95)"
                : "none",
            }}
          />
        </motion.div>
      </motion.div>

      {/* ── "Hey!" speech bubble ── */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.7,
          type: "spring",
          stiffness: 400,
          damping: 15,
        }}
        className="absolute left-[88%] top-[44.5%] z-20"
      >
        <div
          className="rounded-lg border-[3px] px-5 py-2.5 font-mono text-xl font-black shadow-[4px_4px_0_#000] transition-colors duration-700"
          style={{
            backgroundColor: isGoldMode ? "#1a1a2e" : "#fff",
            borderColor: isGoldMode ? "#d8bd10" : "#000",
            color: isGoldMode ? "#d8bd10" : "#000",
            boxShadow: isGoldMode
              ? "4px 4px 0 #d8bd10"
              : "4px 4px 0 #000",
          }}
        >
          Hey!
          <div
            className="absolute -bottom-2 left-1/2 h-0 w-0 -translate-x-1/2 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent transition-colors duration-700"
            style={{ borderTopColor: isGoldMode ? "#d8bd10" : "#000" }}
          />
          <div
            className="absolute -bottom-[5px] left-1/2 h-0 w-0 -translate-x-1/2 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent transition-colors duration-700"
            style={{ borderTopColor: isGoldMode ? "#1a1a2e" : "#fff" }}
          />
        </div>
      </motion.div>

      {/* ── Retro "Are you ready??" dialog ── */}
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-[18%] left-[4%] z-20 w-[260px] border-[3px] border-black bg-[#b91c1c] font-mono shadow-[6px_6px_0_#000] transition-shadow duration-700"
        style={{
          boxShadow: isGoldMode
            ? "6px 6px 0 #d8bd10"
            : "6px 6px 0 #000",
          borderColor: isGoldMode ? "#d8bd10" : "#000",
        }}
      >
        <div
          className="flex items-center justify-end border-b-[3px] bg-[#991b1b] px-3 py-1.5 transition-colors duration-700"
          style={{ borderColor: isGoldMode ? "#d8bd10" : "#000" }}
        >
          <span className="flex gap-1.5 text-sm text-white">
            <span className="inline-block">_</span>
            <span className="inline-block">□</span>
            <span className="inline-block">✕</span>
          </span>
        </div>
        <div className="flex flex-col items-center gap-4 px-5 py-4">
          <p className="text-base font-bold text-white">Are you ready??</p>
          <div className="h-5 w-full border-2 border-white bg-[#7f1d1d]">
            <div className="flex h-full w-[65%] items-center">
              {[...Array(7)].map((_, i) => (
                <div
                  key={i}
                  className="mx-[1px] h-[12px] w-[12px] bg-white"
                />
              ))}
            </div>
          </div>
          <button className="border-2 border-black bg-white px-8 py-1.5 text-base font-black text-black shadow-[2px_2px_0_#000] transition hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_#000]">
            Okay!
          </button>
        </div>
      </motion.div>
    </section>
  );
}

function PhoneLauncher() {
  const [contactFlipped, setContactFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto h-[548px] w-[280px] rounded-[46px] border border-white/[0.16] bg-slate-950/80 p-2 shadow-phone backdrop-blur-xl sm:h-[620px] sm:w-[318px]"
    >
      <div className="absolute -inset-8 -z-10 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute inset-2 rounded-[40px] border border-white/10 bg-black" />
      <div className="phone-screen-mask relative z-10 h-full overflow-hidden rounded-[38px] bg-[#060712]">
        <Image
          src="/profile.jpeg"
          alt="Srujan Krishna Gandamalla"
          fill
          sizes="320px"
          className="object-cover opacity-[0.14] saturate-125"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-[#071225]/[0.78] to-black/[0.92]" />
        <div className="bg-scanline absolute inset-0 opacity-30" />
        <div className="relative z-10 flex h-full flex-col px-5 py-5">
          <div className="flex items-center justify-between text-[11px] font-semibold text-white/[0.85]">
            <span>12:39</span>
            <span className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] text-cyan-100">
              NAV HUB
            </span>
          </div>

          <div className="mt-8 grid grid-cols-4 gap-x-4 gap-y-6">
            {phoneApps.map((app, index) => {
              const Icon = app.icon;
              const external =
                app.href.startsWith("http") ||
                app.href.startsWith("mailto") ||
                app.href.endsWith(".pdf");

              return (
                <motion.a
                  key={app.label}
                  href={app.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.04, duration: 0.4 }}
                  whileHover={{ y: -4, scale: 1.04 }}
                  className="group flex flex-col items-center gap-2"
                >
                  <span
                    className={cn(
                      "grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br shadow-[inset_0_1px_0_rgba(255,255,255,.35),0_10px_24px_rgba(0,0,0,.32)]",
                      app.gradient,
                    )}
                  >
                    <Icon className="h-5 w-5 text-white drop-shadow" />
                  </span>
                  <span className="max-w-[58px] text-center text-[10px] font-medium leading-tight text-white/[0.82]">
                    {app.label}
                  </span>
                </motion.a>
              );
            })}
          </div>

          {/* Contact Me flip card */}
          <div className="mt-auto">
            <div
              className="cursor-pointer [perspective:600px]"
              onClick={() => setContactFlipped((f) => !f)}
            >
              <motion.div
                className="relative w-full"
                animate={{ rotateX: contactFlipped ? 180 : 0 }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front face — Contact Me */}
                <div
                  className="rounded-3xl border border-white/10 bg-white/[0.06] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,.08)] backdrop-blur"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="flex items-center gap-2">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600">
                      <Mail className="h-4 w-4 text-white" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        Contact Me
                      </p>
                      <p className="text-[10px] text-cyan-200/60">
                        Tap to reveal email
                      </p>
                    </div>
                  </div>
                </div>

                {/* Back face — Email */}
                <div
                  className="absolute inset-0 rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,.08),0_0_20px_rgba(6,182,212,.15)] backdrop-blur"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateX(180deg)",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600">
                      <Mail className="h-4 w-4 text-white" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] text-cyan-200/60">
                        Email me at
                      </p>
                      <a
                        href="mailto:srujankrishnac1@gmail.com"
                        onClick={(e) => e.stopPropagation()}
                        className="block truncate text-sm font-semibold text-cyan-300 transition hover:text-cyan-100"
                      >
                        srujankrishnac1@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-white/35" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function AboutPhoneSection({ isGoldMode }: { isGoldMode?: boolean }) {
  const isDark = !!isGoldMode;
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center overflow-hidden px-5 py-24 transition-colors duration-700"
      style={{ backgroundColor: isDark ? '#0a0a1a' : '#f7f7f2', color: isDark ? '#e2e8f0' : '#000' }}
    >
      <div className="pointer-events-none absolute inset-0 transition-opacity duration-700" style={{ opacity: isDark ? 0.2 : 0.7, backgroundImage: isDark ? 'linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px)' : 'linear-gradient(rgba(0,0,0,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.07) 1px,transparent 1px)', backgroundSize: '48px 48px' }} />
      <div className="absolute left-0 top-24 h-48 w-1/3 transition-colors duration-700" style={{ backgroundColor: isDark ? '#0d4a3f' : '#8ef1d1' }} />
      <div className="absolute bottom-16 right-0 h-56 w-1/3 transition-colors duration-700" style={{ backgroundColor: isDark ? '#1e293b' : '#d8d8d8' }} />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1fr_420px]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-black uppercase tracking-[0.32em] text-blue-700">
            About me
          </p>
          <h2 className="mt-4 max-w-4xl text-3xl font-black leading-tight md:text-5xl">
            Building AI agents, data-driven systems, and full-stack products with an obsession for great engineering.
          </h2>
          <div className="mt-7 max-w-3xl space-y-5 border-4 border-black bg-white p-7 text-base leading-8 text-black/75 shadow-[8px_8px_0_#000] md:text-lg">
            <p>
              Hi, I&apos;m G. Srujan Krishna, a developer with a strong
              full-stack foundation and a growing focus on Data Engineering.
            </p>
            <p>
              I enjoy building scalable systems that sit at the intersection of
              technology and business impact, from backend services and APIs to
              data flow, infrastructure, analytics, and user experience.
            </p>
            <p>
              I&apos;m actively building skills around SQL-driven analytics,
              Spark, Kafka, Airflow, dbt, and CI/CD practices for data
              pipelines and analytics engineering.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" variant="neon">
              <Link href="/srujan-krishna-resume.pdf" target="_blank">
                View Resume
              </Link>
            </Button>
            <Button asChild size="lg" variant="glass">
              <Link href="#skills">Open Skill Stack</Link>
            </Button>
          </div>
        </motion.div>

        {/* Phone with gooey pixel trail effect */}
        <div className="relative">
          <GooeyFilter id="gooey-phone-trail" strength={5} />
          <PhoneLauncher />
          <div
            className="absolute -inset-8 z-30 pointer-events-none"
            style={{ filter: "url(#gooey-phone-trail)" }}
          >
            <PixelTrail
              pixelSize={28}
              fadeDuration={0}
              delay={500}
              pixelClassName="bg-cyan-400/70"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillsSection({ isGoldMode }: { isGoldMode?: boolean }) {
  const isDark = !!isGoldMode;
  return (
    <section
      id="skills"
      className="relative flex min-h-screen items-center overflow-hidden px-5 py-24 transition-colors duration-700"
      style={{ backgroundColor: isDark ? '#060712' : '#f7f7f2', color: isDark ? '#fff' : '#000' }}
    >
      <div className="pointer-events-none absolute inset-0 transition-opacity duration-700" style={{ opacity: isDark ? 0.2 : 0.7, backgroundImage: isDark ? 'linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px)' : 'linear-gradient(rgba(0,0,0,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.07) 1px,transparent 1px)', backgroundSize: '48px 48px' }} />
      {!isDark && <div className="absolute inset-x-0 top-1/2 h-28 -translate-y-1/2 bg-[#8ef1d1]" />}
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-black uppercase tracking-[0.32em]" style={{ color: isDark ? '#22d3ee' : '#1d4ed8' }}>
              Skills
            </p>
            <h2 className="mt-4 max-w-lg text-xl font-black leading-snug md:text-3xl" style={{ color: isDark ? '#fff' : '#000' }}>
              Curiosity-driven and always exploring new tech from crafting frontend experiences to building scalable data and AI infrastructure.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <OrbitingSkills isDark={isDark} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FolderIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 100" className={className} fill="none">
      {/* Back flap */}
      <path d="M8 20h104a6 6 0 016 6v64a6 6 0 01-6 6H8a6 6 0 01-6-6V26a6 6 0 016-6z" fill="#1a1a2e" stroke="#000" strokeWidth="3" />
      {/* Tab */}
      <path d="M8 20V14a6 6 0 016-6h28l8 12H8z" fill="#1a1a2e" stroke="#000" strokeWidth="3" />
      {/* Front face */}
      <path d="M4 34h112a4 4 0 014 4v52a6 6 0 01-6 6H6a6 6 0 01-6-6V38a4 4 0 014-4z" fill="#f5d6c3" stroke="#000" strokeWidth="3" />
      {/* Highlight */}
      <path d="M8 38h104a2 2 0 012 2v8H6v-8a2 2 0 012-2z" fill="#fce8d8" opacity="0.7" />
    </svg>
  );
}

function ProjectsSection({ isGoldMode }: { isGoldMode?: boolean }) {
  const isDark = !!isGoldMode;
  return (
    <section
      id="projects"
      className="relative flex min-h-screen items-center overflow-hidden px-5 py-24 transition-colors duration-700"
      style={{ backgroundColor: isDark ? '#0a0a1a' : '#f7f7f2', color: isDark ? '#e2e8f0' : '#000' }}
    >
      <div className="pointer-events-none absolute inset-0 transition-opacity duration-700" style={{ opacity: isDark ? 0.2 : 0.7, backgroundImage: isDark ? 'linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px)' : 'linear-gradient(rgba(0,0,0,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.07) 1px,transparent 1px)', backgroundSize: '48px 48px' }} />
      <div className="absolute -right-8 top-12 h-24 w-48 transition-colors duration-700" style={{ backgroundColor: isDark ? '#0d4a3f' : '#8ef1d1' }} />
      <div className="absolute -left-6 bottom-24 h-36 w-32 transition-colors duration-700" style={{ backgroundColor: isDark ? '#1e293b' : '#d8d8d8' }} />
      <div className="relative z-10 mx-auto w-full max-w-5xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="inline-flex items-center gap-3 text-4xl font-black md:text-5xl">
            My Projects
            <svg viewBox="0 0 24 24" className="h-8 w-8" fill="#ef4444">
              <path d="M12 2L14.09 8.26L20 9.27L15.55 13.97L16.91 20L12 16.9L7.09 20L8.45 13.97L4 9.27L9.91 8.26L12 2Z" />
            </svg>
          </h2>
        </div>

        {/* Top row — 3 folders */}
        <div className="grid grid-cols-2 gap-x-10 gap-y-14 md:grid-cols-3">
          {projectsPreview.slice(0, 3).map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <Link href={`/projects/${project.slug}`} className="group flex flex-col items-center">
                <div className="transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-105">
                  <FolderIcon className="h-28 w-36 md:h-36 md:w-44 drop-shadow-[4px_4px_0_rgba(0,0,0,0.8)]" />
                </div>
                <p className="mt-4 text-center text-sm font-black tracking-wide md:text-base">
                  {project.title}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom row — 2 folders centered */}
        <div className="mt-14 flex justify-center gap-x-10 md:gap-x-20">
          {projectsPreview.slice(3).map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index + 3) * 0.1 }}
              className="flex flex-col items-center"
            >
              <Link href={`/projects/${project.slug}`} className="group flex flex-col items-center">
                <div className="transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-105">
                  <FolderIcon className="h-28 w-36 md:h-36 md:w-44 drop-shadow-[4px_4px_0_rgba(0,0,0,0.8)]" />
                </div>
                <p className="mt-4 text-center text-sm font-black tracking-wide md:text-base">
                  {project.title}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



function UtilityPagesPreview({ isGoldMode }: { isGoldMode?: boolean }) {
  const isDark = !!isGoldMode;
  const cards = [
    { title: "Achievements", icon: Award, href: "/achievements" },
    { title: "Blogs", icon: BookOpenText, href: "https://medium.com/@srujankrishnac1" },
    { title: "Certificates", icon: FileBadge, href: "/certificates" },
  ];

  const [stack, setStack] = useState(
    cards.map((c, i) => ({ ...c, id: i + 1 }))
  );
  const [isAnimating, setIsAnimating] = useState(false);
  const [nextId, setNextId] = useState(cards.length + 1);

  const positionStyles = [
    { scale: 1, y: 12 },
    { scale: 0.96, y: -14 },
    { scale: 0.92, y: -38 },
  ];

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setStack((prev) => {
        const first = prev[0];
        const rest = prev.slice(1);
        return [...rest, { ...first, id: nextId }];
      });
      setNextId((n) => n + 1);
      setIsAnimating(false);
    }, 50);
  };

  return (
    <section
      id="achievements"
      className="relative overflow-hidden px-5 py-20 transition-colors duration-700"
      style={{ backgroundColor: isDark ? '#0a0a1a' : '#f7f7f2', color: isDark ? '#e2e8f0' : '#000' }}
    >
      <div className="pointer-events-none absolute inset-0 transition-opacity duration-700" style={{ opacity: isDark ? 0.2 : 0.7, backgroundImage: isDark ? 'linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px)' : 'linear-gradient(rgba(0,0,0,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.07) 1px,transparent 1px)', backgroundSize: '48px 48px' }} />
      <div className="absolute -left-4 top-6 h-20 w-28 transition-colors duration-700" style={{ backgroundColor: isDark ? '#1e293b' : '#d8d8d8' }} />
      <div className="absolute -right-6 bottom-4 h-16 w-40 transition-colors duration-700" style={{ backgroundColor: isDark ? '#0d4a3f' : '#8ef1d1' }} />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center">
        {/* Card stack */}
        <div className="relative h-[300px] w-full max-w-4xl">
          <AnimatePresence initial={false}>
            {stack.slice(0, 3).map((item, index) => {
              const Icon = item.icon;
              const isExternal = item.href.startsWith("http");
              const { scale, y } = positionStyles[index] ?? positionStyles[2];
              const zIndex = index === 0 && isAnimating ? 10 : 3 - index;

              return (
                <motion.div
                  key={item.id}
                  initial={index === 2 ? { y: -14, scale: 0.92, opacity: 1 } : undefined}
                  animate={{ y, scale, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", duration: 0.6, bounce: 0 }}
                  style={{ zIndex, left: "50%", x: "-50%", bottom: 0 }}
                  className="absolute w-[96%] sm:w-[860px]"
                >
                  <Link
                    href={item.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                    id={item.title === "Certificates" ? "certificates" : undefined}
                    className="group flex items-center justify-between border-4 border-black bg-white px-10 py-12 shadow-[7px_7px_0_#000] transition-all hover:-translate-y-1 hover:shadow-[9px_9px_0_#000]"
                  >
                    <div className="flex items-center gap-5">
                      <Icon className="h-9 w-9 text-blue-700" />
                      <h3 className="text-2xl font-black md:text-3xl">{item.title}</h3>
                    </div>
                    <ArrowRight className="h-6 w-6 text-black/40 transition group-hover:translate-x-1 group-hover:text-black" />
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Animate button */}
        <button
          onClick={handleNext}
          className="relative z-10 mt-10 flex h-10 cursor-pointer select-none items-center justify-center gap-1.5 border-4 border-black bg-white px-6 font-black uppercase tracking-wider shadow-[4px_4px_0_#000] transition-all hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#000] active:translate-y-0 active:shadow-[2px_2px_0_#000]"
        >
          Next
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}

export default function Home() {
  const [isGoldMode, setIsGoldMode] = useState(false);

  // Hydrate from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("goldMode");
    if (stored === "true") setIsGoldMode(true);
  }, []);

  const toggleGoldMode = () => {
    setIsGoldMode((prev) => {
      const next = !prev;
      localStorage.setItem("goldMode", String(next));
      return next;
    });
  };

  return (
    <main
      className="overflow-x-hidden transition-colors duration-700"
      style={{
        backgroundColor: isGoldMode ? "#0a0a1a" : "#fff",
        color: isGoldMode ? "#e2e8f0" : "#000",
      }}
    >
      <SiteNav isDark={isGoldMode} />
      <RetroHero isGoldMode={isGoldMode} onToggle={toggleGoldMode} />

      {/* Wrap remaining sections — dark mode overrides */}
      <div
        className="transition-colors duration-700"
        style={{
          ...(isGoldMode
            ? {
              ['--section-bg' as string]: '#0d1117',
              ['--card-bg' as string]: '#161b22',
              ['--card-border' as string]: '#d8bd10',
              ['--text-primary' as string]: '#e2e8f0',
              ['--text-secondary' as string]: '#94a3b8',
            }
            : {}),
        }}
      >
        <style>{`
          ${isGoldMode ? `
            /* ── Global dark mode overrides ── */
            section { background-color: #0a0a1a !important; color: #e2e8f0 !important; }
            section h2, section h3 { color: #f1f5f9 !important; }
            section p { color: #94a3b8 !important; }

            /* Cards & borders */
            section .border-4.border-black,
            section .border-black { border-color: #d8bd1066 !important; }
            section .bg-white { background-color: #161b22 !important; }
            section .shadow-\\[8px_8px_0_\\#000\\],
            section .shadow-\\[7px_7px_0_\\#000\\] { box-shadow: 7px 7px 0 #d8bd1044 !important; }

            /* Text colors */
            section .text-black { color: #e2e8f0 !important; }
            section .text-black\\/75,
            section .text-black\\/65 { color: #94a3b8 !important; }
            section .text-blue-700 { color: #d8bd10 !important; }

            /* Phone launcher bg */
            .shadow-phone { box-shadow: 0 0 40px 8px rgba(216,189,16,.15) !important; }

            /* Skills tags */
            section .border-2.border-black { border-color: #d8bd1066 !important; }

            /* Accent backgrounds */
            section .bg-\\[\\#eef8f4\\],
            section .bg-\\[\\#F7F7F2\\] { background-color: #0d1117 !important; }
            section .bg-blue-700 { background-color: #d8bd10 !important; color: #0a0a1a !important; }
          ` : ''}
        `}</style>
        <AboutPhoneSection isGoldMode={isGoldMode} />
        <SkillsSection isGoldMode={isGoldMode} />
        <ProjectsSection isGoldMode={isGoldMode} />

        {/* CPU Architecture divider */}
        <section
          className="relative overflow-hidden px-5 py-16 transition-colors duration-700"
          style={{ backgroundColor: isGoldMode ? '#0a0a1a' : '#f7f7f2' }}
        >
          <div className="pointer-events-none absolute inset-0 transition-opacity duration-700" style={{ opacity: isGoldMode ? 0.2 : 0.7, backgroundImage: isGoldMode ? 'linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px)' : 'linear-gradient(rgba(0,0,0,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.07) 1px,transparent 1px)', backgroundSize: '48px 48px' }} />
          <div className="relative z-10 mx-auto max-w-3xl">
            <CpuArchitecture isDark={isGoldMode} text="0x7372756A616E" />
          </div>
        </section>

        <UtilityPagesPreview isGoldMode={isGoldMode} />
      </div>
      <BallpitFooter isDark={isGoldMode} />
    </main>
  );
}
