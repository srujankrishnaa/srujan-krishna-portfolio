"use client"
import React, { useEffect, useState, memo } from 'react';

// --- Types ---
type GlowColor = 'cyan' | 'purple' | 'orange' | 'blue' | 'green' | 'pink';
type DomainKey = 'frontend' | 'backend' | 'data' | 'database' | 'cloud' | 'ai';

interface SkillConfig {
  id: string;
  orbitRadius: number;
  size: number;
  speed: number;
  phaseShift: number;
  glowColor: GlowColor;
  label: string;
  color: string;
  logo: string; // devicon CDN path
}

// --- CDN helper ---
const dIcon = (name: string, variant = 'original') =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${variant}.svg`;

// --- Domain definitions ---
const domains: Record<DomainKey, { label: string; glow: GlowColor; skills: Omit<SkillConfig, 'orbitRadius' | 'size' | 'speed' | 'phaseShift' | 'glowColor'>[] }> = {
  frontend: {
    label: 'Frontend',
    glow: 'cyan',
    skills: [
      { id: 'html', label: 'HTML5', color: '#E34F26', logo: dIcon('html5') },
      { id: 'css', label: 'CSS3', color: '#1572B6', logo: dIcon('css3') },
      { id: 'js', label: 'JavaScript', color: '#F7DF1E', logo: dIcon('javascript') },
      { id: 'react', label: 'React.js', color: '#61DAFB', logo: dIcon('react') },
      { id: 'next', label: 'Next.js', color: '#fff', logo: dIcon('nextjs', 'plain') },
      { id: 'tailwind', label: 'TailwindCSS', color: '#06B6D4', logo: dIcon('tailwindcss', 'original') },
    ],
  },
  backend: {
    label: 'Backend',
    glow: 'green',
    skills: [
      { id: 'python', label: 'Python', color: '#3776AB', logo: dIcon('python') },
      { id: 'node', label: 'Node.js', color: '#339933', logo: dIcon('nodejs') },
      { id: 'express', label: 'Express', color: '#fff', logo: dIcon('express', 'original') },
      { id: 'fastapi', label: 'FastAPI', color: '#009688', logo: dIcon('fastapi', 'original') },
      { id: 'cpp', label: 'C++', color: '#00599C', logo: dIcon('cplusplus') },
    ],
  },
  data: {
    label: 'Data Engineering',
    glow: 'orange',
    skills: [
      { id: 'kafka', label: 'Apache Kafka', color: '#231F20', logo: dIcon('apachekafka', 'original') },
      { id: 'spark', label: 'Apache Spark', color: '#E25A1C', logo: dIcon('apachespark', 'plain-wordmark') },
      { id: 'iceberg', label: 'Apache Iceberg', color: '#4EA0DC', logo: '' },
    ],
  },
  database: {
    label: 'Databases',
    glow: 'blue',
    skills: [
      { id: 'sql', label: 'SQL', color: '#336791', logo: dIcon('azuresqldatabase', 'plain') },
      { id: 'postgres', label: 'PostgreSQL', color: '#336791', logo: dIcon('postgresql') },
      { id: 'snowflake', label: 'Snowflake', color: '#29B5E8', logo: 'https://www.vectorlogo.zone/logos/snowflake/snowflake-icon.svg' },
    ],
  },
  cloud: {
    label: 'Cloud & DevOps',
    glow: 'purple',
    skills: [
      { id: 'git', label: 'Git', color: '#F05032', logo: dIcon('git') },
      { id: 'docker', label: 'Docker', color: '#2496ED', logo: dIcon('docker') },
      { id: 'k8s', label: 'Kubernetes', color: '#326CE5', logo: dIcon('kubernetes') },
      { id: 'aws', label: 'AWS', color: '#FF9900', logo: dIcon('amazonwebservices', 'plain-wordmark') },
      { id: 'vercel', label: 'Vercel', color: '#fff', logo: dIcon('vercel', 'original') },
    ],
  },
  ai: {
    label: 'AI',
    glow: 'pink',
    skills: [
      { id: 'genai', label: 'Generative AI', color: '#8B5CF6', logo: '' },
      { id: 'agentai', label: 'Agentic AI', color: '#EC4899', logo: '' },
    ],
  },
};

// --- Build orbit configs from domain ---
function buildOrbitConfigs(domainKey: DomainKey): SkillConfig[] {
  const domain = domains[domainKey];
  const skills = domain.skills;
  const configs: SkillConfig[] = [];

  // Split into inner/outer orbit if > 4 skills
  if (skills.length <= 4) {
    skills.forEach((s, i) => {
      configs.push({
        ...s,
        orbitRadius: 140,
        size: 46,
        speed: 0.7,
        phaseShift: (2 * Math.PI * i) / skills.length,
        glowColor: domain.glow,
      });
    });
  } else {
    const mid = Math.ceil(skills.length / 2);
    const inner = skills.slice(0, mid);
    const outer = skills.slice(mid);
    inner.forEach((s, i) => {
      configs.push({
        ...s,
        orbitRadius: 110,
        size: 42,
        speed: 0.8,
        phaseShift: (2 * Math.PI * i) / inner.length,
        glowColor: domain.glow,
      });
    });
    outer.forEach((s, i) => {
      configs.push({
        ...s,
        orbitRadius: 185,
        size: 46,
        speed: -0.5,
        phaseShift: (2 * Math.PI * i) / outer.length,
        glowColor: domain.glow,
      });
    });
  }
  return configs;
}

// --- Glow color palette ---
const glowPalette: Record<GlowColor, { primary: string; secondary: string; border: string }> = {
  cyan:   { primary: 'rgba(6,182,212,0.4)',   secondary: 'rgba(6,182,212,0.2)',   border: 'rgba(6,182,212,0.3)' },
  purple: { primary: 'rgba(147,51,234,0.4)',  secondary: 'rgba(147,51,234,0.2)',  border: 'rgba(147,51,234,0.3)' },
  orange: { primary: 'rgba(249,115,22,0.4)',  secondary: 'rgba(249,115,22,0.2)',  border: 'rgba(249,115,22,0.3)' },
  blue:   { primary: 'rgba(59,130,246,0.4)',  secondary: 'rgba(59,130,246,0.2)',  border: 'rgba(59,130,246,0.3)' },
  green:  { primary: 'rgba(34,197,94,0.4)',   secondary: 'rgba(34,197,94,0.2)',   border: 'rgba(34,197,94,0.3)' },
  pink:   { primary: 'rgba(236,72,153,0.4)',  secondary: 'rgba(236,72,153,0.2)',  border: 'rgba(236,72,153,0.3)' },
};

// --- Fallback icons ---
const FallbackIcon = ({ color, label }: { color: string; label: string }) => {
  if (label === 'Apache Iceberg') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full p-1">
        <path d="M12 2L4 8v8l8 6 8-6V8l-8-6zm0 2.5L18 9v6l-6 4.5L6 15V9l6-4.5z" fill={color} />
        <path d="M12 7l-4 3v4l4 3 4-3v-4l-4-3z" fill={color} opacity="0.5" />
      </svg>
    );
  }
  // AI sparkle icon
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full p-1">
      <path d="M12 2L14.09 8.26L20 9.27L15.55 13.97L16.91 20L12 16.9L7.09 20L8.45 13.97L4 9.27L9.91 8.26L12 2Z" fill={color} />
    </svg>
  );
};

// --- Orbiting skill node ---
const OrbitingSkill = memo(({ config, angle, isDark = true }: { config: SkillConfig; angle: number; isDark?: boolean }) => {
  const [hovered, setHovered] = useState(false);
  const x = Math.cos(angle) * config.orbitRadius;
  const y = Math.sin(angle) * config.orbitRadius;

  const needsInvert = ['next','express','vercel','kafka'].includes(config.id);

  return (
    <div
      className="absolute top-1/2 left-1/2 transition-all duration-300"
      style={{
        width: config.size, height: config.size,
        transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
        zIndex: hovered ? 20 : 10,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`relative w-full h-full p-2 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${hovered ? 'scale-125 shadow-2xl' : 'shadow-lg'}`}
        style={{
          backgroundColor: isDark ? 'rgba(31,41,55,0.9)' : 'rgba(255,255,255,0.95)',
          border: isDark ? 'none' : '2px solid #000',
          boxShadow: hovered ? `0 0 30px ${config.color}40, 0 0 60px ${config.color}20` : isDark ? undefined : '4px 4px 0 #000',
        }}
      >
        {config.logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={config.logo} alt={config.label} className="w-full h-full object-contain rounded-full" style={{ filter: needsInvert && isDark ? 'invert(1)' : undefined }} />
        ) : (
          <FallbackIcon color={config.color} label={config.label} />
        )}
        {hovered && (
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 backdrop-blur-sm rounded text-xs whitespace-nowrap pointer-events-none z-30"
            style={{ backgroundColor: isDark ? 'rgba(17,24,39,0.95)' : 'rgba(0,0,0,0.85)', color: '#fff' }}>
            {config.label}
          </div>
        )}
      </div>
    </div>
  );
});
OrbitingSkill.displayName = 'OrbitingSkill';

// --- Orbit ring path ---
const OrbitPath = memo(({ radius, glowColor = 'cyan' as GlowColor, delay = 0, isDark = true }: { radius: number; glowColor?: GlowColor; delay?: number; isDark?: boolean }) => {
  const c = glowPalette[glowColor];
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
      style={{ width: radius * 2, height: radius * 2 }}>
      {isDark ? (
        <>
          <div className="absolute inset-0 rounded-full animate-pulse"
            style={{ background: `radial-gradient(circle, transparent 30%, ${c.secondary} 70%, ${c.primary} 100%)`, boxShadow: `0 0 60px ${c.primary}, inset 0 0 60px ${c.secondary}`, animationDelay: `${delay}s` }} />
          <div className="absolute inset-0 rounded-full" style={{ border: `1px solid ${c.border}`, boxShadow: `inset 0 0 20px ${c.secondary}` }} />
        </>
      ) : (
        <div className="absolute inset-0 rounded-full" style={{ border: '2px dashed rgba(0,0,0,0.15)' }} />
      )}
    </div>
  );
});
OrbitPath.displayName = 'OrbitPath';

// --- Domain filter tab ---
const domainKeys: DomainKey[] = ['frontend', 'backend', 'data', 'database', 'cloud', 'ai'];
const tabColors: Record<DomainKey, string> = {
  frontend: '#06B6D4', backend: '#22C55E', data: '#F97316',
  database: '#3B82F6', cloud: '#9333EA', ai: '#EC4899',
};

// --- Main component ---
export default function OrbitingSkills({ isDark = true }: { isDark?: boolean }) {
  const [time, setTime] = useState(0);
  const [paused, setPaused] = useState(false);
  const [activeDomain, setActiveDomain] = useState<DomainKey>('frontend');

  useEffect(() => {
    if (paused) return;
    let raf: number;
    let last = performance.now();
    const tick = (now: number) => {
      setTime(t => t + (now - last) / 1000);
      last = now;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [paused]);

  const skills = buildOrbitConfigs(activeDomain);
  const radii = [...new Set(skills.map(s => s.orbitRadius))];
  const domain = domains[activeDomain];

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      {/* Domain filter tabs */}
      <div className="flex flex-wrap justify-center gap-2">
        {domainKeys.map(k => (
          <button
            key={k}
            onClick={() => setActiveDomain(k)}
            className="px-4 py-2 text-xs font-black uppercase tracking-wider border-2 transition-all duration-300"
            style={{
              borderColor: activeDomain === k ? tabColors[k] : isDark ? '#333' : '#000',
              backgroundColor: activeDomain === k ? tabColors[k] : 'transparent',
              color: activeDomain === k ? '#000' : isDark ? '#fff' : '#000',
              boxShadow: activeDomain === k
                ? `0 0 20px ${tabColors[k]}40`
                : isDark ? 'none' : '3px 3px 0 #000',
            }}
          >
            {domains[k].label}
          </button>
        ))}
      </div>

      {/* Orbit container */}
      <div
        className="relative w-[340px] h-[340px] md:w-[450px] md:h-[450px] flex items-center justify-center"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Center icon */}
        <div className="w-20 h-20 rounded-full flex items-center justify-center z-10 relative shadow-2xl"
          style={{ background: isDark ? 'linear-gradient(135deg, #374151, #111827)' : 'linear-gradient(135deg, #fff, #e5e7eb)', border: isDark ? 'none' : '3px solid #000' }}>
          <div className="absolute inset-0 rounded-full blur-xl animate-pulse" style={{ backgroundColor: `${tabColors[activeDomain]}30` }} />
          <div className="relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={tabColors[activeDomain]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
            </svg>
          </div>
        </div>

        {/* Orbit paths */}
        {radii.map((r, i) => (
          <OrbitPath key={r} radius={r} glowColor={domain.glow} delay={i * 1.5} isDark={isDark} />
        ))}

        {/* Orbiting skills */}
        {skills.map(cfg => (
          <OrbitingSkill key={cfg.id} config={cfg} angle={time * cfg.speed + cfg.phaseShift} isDark={isDark} />
        ))}
      </div>
    </div>
  );
}
