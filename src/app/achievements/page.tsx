"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Award, Users, Handshake } from "lucide-react";
import { useState, useEffect } from "react";

/* ──────────────────────────────────────────────────────
   Achievements data
   ────────────────────────────────────────────────────── */
const achievements = [
  {
    title: "2nd Place - Tech-Xcelerate Hackathon, IIT Hyderabad",
    description:
      "Awarded second place in the Tech-Xcelerate hackathon conducted at IIT Hyderabad, competing against top engineering teams across the country.",
    image: "/achievements/iit-hyderabad.png",
  },
  {
    title: "3rd Place - TechXcelerate Hackathon, BITS Goa",
    description:
      "Awarded third place in the TechXcelerate hackathon conducted at BITS Pilani Goa campus, showcasing strong problem-solving and rapid prototyping skills.",
    image: "/achievements/bits-goa.png",
  },
  {
    title: "AIR 14,381 - NCAT 2025",
    description:
      "Secured All India Rank 14,381 in the National Common Admission Test (NCAT) 2025, placing in the top percentile among 1,00,000+ engineering graduates nationwide.",
    image: "/achievements/ncat-2025.png",
  },
];

/* ──────────────────────────────────────────────────────
   Leadership data
   ────────────────────────────────────────────────────── */
const leadership = [
  {
    role: "Vice President",
    org: "Street Cause GRIET",
    icon: Users,
    bullets: [
      "Demonstrated leadership by managing & mentoring a team of 40 coordinators, guiding them in executing impactful societal initiatives.",
      "Led fundraising efforts, raising ₹73,000 in donations, which funded the construction of school bathrooms and a compound wall in Gadwal.",
      "Demonstrated strong marketing skills in flagship events such as Dandiya Nights and RFC – Hyderabad's biggest marathon – by developing pass sales strategies and successfully driving high ticket sales through persuasive communication and student engagement tactics.",
    ],
  },
  {
    role: "Sponsorship Lead",
    org: "TEDxGRIET",
    icon: Handshake,
    bullets: [
      "Demonstrated strategic coordination and negotiation skills by leading sponsorship outreach and partnerships for TEDxGRIET, securing multiple brand collaborations and financial sponsorships to support event execution and logistics.",
      "Coordinated with cross-functional teams (operations, marketing, and design) to ensure timely execution of sponsor deliverables, branding requirements, and event milestones.",
    ],
  },
];

/* ──────────────────────────────────────────────────────
   Page
   ────────────────────────────────────────────────────── */
export default function AchievementsPage() {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const stored = localStorage.getItem("goldMode");
    if (stored === "true") setIsDark(true);
  }, []);

  // Theme tokens
  const bg = isDark ? "#0a0a1a" : "#f7f7f2";
  const text = isDark ? "#e2e8f0" : "#000";
  const textMuted = isDark ? "rgba(226,232,240,0.6)" : "rgba(0,0,0,0.65)";
  const cardBg = isDark ? "#161b22" : "#fff";
  const borderColor = isDark ? "#d8bd10" : "#000";
  const accentBg = isDark ? "#0d4a3f" : "#8ef1d1";
  const accentText = isDark ? "#d8bd10" : "#1d4ed8";
  const gridImage = isDark
    ? "linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px)"
    : "linear-gradient(rgba(0,0,0,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.07) 1px,transparent 1px)";

  return (
    <main
      className="min-h-screen transition-colors duration-500"
      style={{ backgroundColor: bg, color: text }}
    >
      {/* Grid background */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          opacity: isDark ? 0.15 : 0.7,
          backgroundImage: gridImage,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-5 py-16">
        {/* Back button */}
        <Link
          href="/#achievements"
          className="group mb-10 inline-flex items-center gap-2 border-2 px-4 py-2 font-black uppercase transition"
          style={{
            borderColor,
            backgroundColor: accentBg,
            color: "#000",
            boxShadow: `4px 4px 0 ${borderColor}`,
          }}
        >
          <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" />
          Back
        </Link>

        {/* ── Page title ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p
            className="text-sm font-black uppercase tracking-[0.32em]"
            style={{ color: accentText }}
          >
            Achievements & Leadership
          </p>
          <h1
            className="mt-4 text-4xl font-black leading-tight md:text-6xl"
            style={{ color: isDark ? "#d8bd10" : "#000" }}
          >
            Awards & Impact
          </h1>
        </motion.div>

        {/* ── Achievements ── */}
        <div className="mt-16 space-y-8">
          {achievements.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
              className="flex flex-col gap-6 border-4 p-6 md:flex-row md:items-center md:p-8"
              style={{
                borderColor,
                backgroundColor: cardBg,
                boxShadow: `8px 8px 0 ${borderColor}`,
              }}
            >
              {/* Achievement image */}
              <div
                className="relative aspect-video w-full shrink-0 overflow-hidden border-2 md:w-72"
                style={{ borderColor }}
              >
                <Image
                  src={a.image}
                  alt={a.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 288px"
                />
              </div>

              {/* Text */}
              <div className="flex-1">
                <div className="mb-3 flex items-center gap-2">
                  <span
                    className="flex h-7 w-7 items-center justify-center border-2 text-xs font-black"
                    style={{
                      borderColor,
                      backgroundColor: accentBg,
                      color: "#000",
                    }}
                  >
                    {i + 1}
                  </span>
                  <Award className="h-5 w-5" style={{ color: accentText }} />
                </div>
                <h3
                  className="text-xl font-black md:text-2xl"
                  style={{ color: text }}
                >
                  {a.title}
                </h3>
                <p
                  className="mt-2 text-sm leading-7 md:text-base"
                  style={{ color: textMuted }}
                >
                  {a.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>



        {/* ── Leadership Experience ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-20"
        >
          <p
            className="text-sm font-black uppercase tracking-[0.32em]"
            style={{ color: accentText }}
          >
            Leadership
          </p>
          <h2
            className="mt-4 text-3xl font-black leading-tight md:text-5xl"
            style={{ color: text }}
          >
            Leading Teams & Driving Impact
          </h2>
        </motion.div>

        <div className="mt-12 space-y-8">
          {leadership.map((l, i) => {
            const Icon = l.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.15, duration: 0.5 }}
                className="border-4 p-6 md:p-8"
                style={{
                  borderColor,
                  backgroundColor: cardBg,
                  boxShadow: `8px 8px 0 ${borderColor}`,
                }}
              >
                {/* Role header */}
                <div className="flex items-start gap-4">
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center border-2"
                    style={{
                      borderColor,
                      backgroundColor: accentBg,
                    }}
                  >
                    <Icon className="h-6 w-6 text-black" />
                  </span>
                  <div>
                    <h3
                      className="text-xl font-black md:text-2xl"
                      style={{ color: text }}
                    >
                      {l.role}
                    </h3>
                    <p
                      className="mt-1 text-sm font-bold uppercase tracking-wider"
                      style={{ color: accentText }}
                    >
                      {l.org}
                    </p>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="mt-6 space-y-4">
                  {l.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3">
                      <span
                        className="mt-1.5 h-2 w-2 shrink-0 rotate-45"
                        style={{
                          backgroundColor: accentText,
                        }}
                      />
                      <p
                        className="text-sm leading-7 md:text-base"
                        style={{ color: textMuted }}
                      >
                        {b}
                      </p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* ── Footer ── */}
        <div
          className="mt-20 pt-8 text-center"
          style={{
            borderTopWidth: 4,
            borderTopStyle: "solid",
            borderTopColor: borderColor,
          }}
        >
          <Link
            href="/#achievements"
            className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-wider transition"
            style={{
              color: isDark ? "rgba(226,232,240,0.4)" : "rgba(0,0,0,0.5)",
            }}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </Link>
        </div>
      </div>
    </main>
  );
}
