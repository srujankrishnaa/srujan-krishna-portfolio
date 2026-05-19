"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";

/* ──────────────────────────────────────────────────────
   Certificate data — extracted from actual PDFs
   ────────────────────────────────────────────────────── */
const certificates = [
  {
    id: "oracle-ai",
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    issuerLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg",
    date: "September 2025",
    credentialId: "322346438OCI25AICFA",
    verifyUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=322346438OCI25AICFA",
    description:
      "Earned the Oracle Cloud Infrastructure AI Foundations Associate certification, validating expertise in foundational AI and ML concepts on Oracle Cloud, including machine learning workflows, generative AI, natural language processing, and OCI AI services architecture.",
    tags: ["Oracle Cloud", "AI/ML", "Generative AI", "OCI", "NLP"],
    pdfPath: "/certificates/oracle ai foundations.pdf",
    accent: "#c74634",
  },
  {
    id: "google-cloud",
    title: "Google Cloud Computing Foundations Certificate",
    issuer: "Google Cloud",
    issuerLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
    date: "May 13, 2025",
    credentialId: "Credly Badge",
    verifyUrl: "https://www.credly.com",
    description:
      "Completed the Google Cloud Computing Foundations certification, demonstrating knowledge of core cloud infrastructure concepts including compute, storage, networking, security fundamentals, and key Google Cloud platform services.",
    tags: ["Google Cloud", "Cloud Computing", "GCP", "Infrastructure", "Networking"],
    pdfPath: "/certificates/google cloud foundations.pdf",
    accent: "#4285F4",
  },
  {
    id: "digital-marketing",
    title: "Foundations of Digital Marketing and E-commerce",
    issuer: "Google (via Coursera)",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    date: "November 9, 2024",
    credentialId: "2AIABQTEA4XD",
    verifyUrl: "https://coursera.org/verify/2AIABQTEA4XD",
    description:
      "Completed Google's Foundations of Digital Marketing and E-commerce course, gaining skills in SEO, SEM, social media marketing, email campaigns, analytics, and building customer-centric digital marketing strategies for e-commerce platforms.",
    tags: ["Digital Marketing", "SEO", "E-commerce", "Analytics", "Google"],
    pdfPath: "/certificates/digital marketing certificate.pdf",
    accent: "#34A853",
  },
  {
    id: "android-dev",
    title: "Android Developer Virtual Internship",
    issuer: "AICTE / EduSkills / Google for Developers",
    issuerLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-plain.svg",
    date: "April – June 2024",
    credentialId: "479fb57e5575cdcf2e386a51e039f4f0",
    verifyUrl: null,
    description:
      "Completed a 10-week Android Developer Virtual Internship under AICTE's NEAT initiative in collaboration with EduSkills and the India Edu Program by Google for Developers, covering Android application development fundamentals, UI/UX design for mobile, and practical project implementation.",
    tags: ["Android", "Mobile Dev", "AICTE", "Google", "Kotlin"],
    pdfPath: "/certificates/android developer certificate.pdf",
    accent: "#3DDC84",
  },
];

/* ──────────────────────────────────────────────────────
   Page
   ────────────────────────────────────────────────────── */
export default function CertificatesPage() {
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
            Certifications
          </p>
          <h1
            className="mt-4 text-4xl font-black leading-tight md:text-6xl"
            style={{ color: isDark ? "#d8bd10" : "#000" }}
          >
            Certified Credentials
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7" style={{ color: textMuted }}>
            Industry certifications from Google, Oracle, and AICTE, spanning cloud, AI, marketing, and mobile development.
          </p>
        </motion.div>

        {/* ── Certificate cards ── */}
        <div className="mt-16 space-y-8">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
              className="border-4 p-6 md:p-8"
              style={{
                borderColor,
                backgroundColor: cardBg,
                boxShadow: `8px 8px 0 ${borderColor}`,
              }}
            >
              {/* Header row */}
              <div className="flex items-start gap-4">
                {/* Accent stripe */}
                <div
                  className="mt-1 hidden h-12 w-1.5 shrink-0 md:block"
                  style={{ backgroundColor: cert.accent }}
                />
                <div>
                  {/* Issuer badge */}
                  <div className="mb-2 flex items-center gap-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={cert.issuerLogo}
                      alt={cert.issuer}
                      className="h-5 w-5 object-contain"
                    />
                    <span
                      className="text-xs font-black uppercase tracking-widest"
                      style={{ color: cert.accent }}
                    >
                      {cert.issuer}
                    </span>
                  </div>

                  <h3
                    className="text-xl font-black leading-snug md:text-2xl"
                    style={{ color: text }}
                  >
                    {cert.title}
                  </h3>

                  <p
                    className="mt-1 text-sm font-medium"
                    style={{ color: textMuted }}
                  >
                    Issued: {cert.date}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p
                className="mt-5 text-sm leading-7 md:text-base"
                style={{ color: textMuted }}
              >
                {cert.description}
              </p>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {cert.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border px-2.5 py-1 text-xs font-bold uppercase tracking-wide"
                    style={{
                      borderColor: isDark ? "rgba(226,232,240,0.15)" : "rgba(0,0,0,0.2)",
                      color: textMuted,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="mt-6 border-t pt-5" style={{ borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)" }}>
                <a
                  href={cert.pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 px-4 py-2 text-xs font-black uppercase transition"
                  style={{
                    borderColor,
                    backgroundColor: isDark ? "#1a1a2e" : "#000",
                    color: "#fff",
                    boxShadow: `3px 3px 0 ${borderColor}`,
                  }}
                >
                  View Certificate
                </a>
              </div>
            </motion.div>
          ))}
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
