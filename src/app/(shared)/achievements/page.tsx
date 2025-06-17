'use client'

import Image from 'next/image'
import CdBack from '@/components/shared/CdBack'
import BlurFade from '@/components/ui/BlurFade'
import dynamic from 'next/dynamic'

const MotionDiv = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.div),
  { ssr: false }
)

// Remove the metadata export since it's not allowed in client components
// If you need metadata, you should create a separate layout.tsx file

const AchievementsPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className="pb-3 pt-8 md:mt-8 md:pb-16 lg:mt-10">
      <BlurFade delay={0.1}>
        <div className="relative mb-12">
          <h1 className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-center text-5xl font-bold tracking-tight text-transparent md:text-6xl">
            My Achievements
          </h1>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-purple-600 to-blue-600"></div>
        </div>
      </BlurFade>

      {/* Awards Section */}
      <BlurFade delay={0.2}>
        <div className="mt-16">
          <MotionDiv
            className="group mb-8 flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <h2 className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-3xl font-semibold text-transparent">
                Awards
              </h2>
              <div className="absolute -bottom-1 left-0 h-0.5 w-full scale-x-0 bg-gradient-to-r from-amber-500 to-orange-600 transition-transform duration-300 group-hover:scale-x-100"></div>
            </div>
            <div className="size-8 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 p-0.5">
              <div className="flex size-full items-center justify-center rounded-full bg-white dark:bg-black">
                <span className="text-lg">🏆</span>
              </div>
            </div>
          </MotionDiv>

          <MotionDiv
            className="grid gap-8 md:grid-cols-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* IIT Hyderabad Hackathon */}
            <MotionDiv
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl border border-gray-200/50 bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 dark:border-gray-800/50 dark:bg-black/80 dark:hover:shadow-purple-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative z-10">
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                      Second Place - TechXcelerate Hackathon
                    </h3>
                    <p className="text-lg font-medium text-purple-600 dark:text-purple-400">
                      IIT Hyderabad
                    </p>
                  </div>
                  <div className="rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-3">
                    <span className="text-2xl">🥈</span>
                  </div>
                </div>
                <p className="mb-6 text-gray-600 dark:text-gray-300">
                  Awarded second Place for the EDVISE APP.
                </p>
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src="/images/achievements/iit-hyd-award.png"
                    alt="IIT Hyderabad Award"
                    width={500}
                    height={300}
                    className="h-64 w-full object-cover duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            </MotionDiv>

            {/* BITS Goa Hackathon */}
            <MotionDiv
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl border border-gray-200/50 bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 dark:border-gray-800/50 dark:bg-black/80 dark:hover:shadow-amber-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative z-10">
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                      Third Place - TechXcelerate Hackathon
                    </h3>
                    <p className="text-lg font-medium text-amber-600 dark:text-amber-400">
                      BITS Goa
                    </p>
                  </div>
                  <div className="rounded-full bg-gradient-to-r from-amber-500 to-orange-500 p-3">
                    <span className="text-2xl">🥉</span>
                  </div>
                </div>
                <p className="mb-6 text-gray-600 dark:text-gray-300">
                  Awarded Third Place for the Bonfire APP.
                </p>
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src="/images/achievements/bits-goa-award.png"
                    alt="BITS Goa Award"
                    width={500}
                    height={300}
                    className="h-64 w-full object-cover duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            </MotionDiv>

            {/* NCAT Ranking */}
            <MotionDiv
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl border border-gray-200/50 bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/10 dark:border-gray-800/50 dark:bg-black/80 dark:hover:shadow-green-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative z-10">
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                      AIR 14,381 - NCAT 2025
                    </h3>
                    <p className="text-lg font-medium text-green-600 dark:text-green-400">
                      National Level Achievement
                    </p>
                  </div>
                  <div className="rounded-full bg-gradient-to-r from-green-500 to-emerald-500 p-3">
                    <span className="text-2xl">📊</span>
                  </div>
                </div>
                <p className="mb-6 text-gray-600 dark:text-gray-300">
                  Secured AIR 14,381 among 1,00,000+ engineering graduates.
                </p>
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src="/images/achievements/ncat-ranking.png"
                    alt="NCAT Ranking Certificate"
                    width={500}
                    height={300}
                    className="h-64 w-full object-cover duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            </MotionDiv>
          </MotionDiv>
        </div>
      </BlurFade>

      {/* Leadership Section */}
      <BlurFade delay={0.4}>
        <div className="mt-20">
          <MotionDiv
            className="group mb-8 flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <h2 className="bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-3xl font-semibold text-transparent">
                Leadership Roles
              </h2>
              <div className="absolute -bottom-1 left-0 h-0.5 w-full scale-x-0 bg-gradient-to-r from-blue-500 to-cyan-600 transition-transform duration-300 group-hover:scale-x-100"></div>
            </div>
            <div className="size-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 p-0.5">
              <div className="flex size-full items-center justify-center rounded-full bg-white dark:bg-black">
                <span className="text-lg">👑</span>
              </div>
            </div>
          </MotionDiv>

          <div className="grid gap-4 md:grid-cols-1">
            {[
              {
                role: 'Street Cause, Vice-president GRIET',
                period: '2024 – Present',
                icon: '🌟',
              },
              {
                role: 'Executive Lead, Skill Development Center, Events Team',
                period: '2023 – Present',
                icon: '⚡',
              },
              {
                role: 'Sponsorship team, TEDX GRIET, Events Team',
                period: '2024 - Present',
                icon: '🎯',
              },
            ].map((item, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group flex items-center gap-4 rounded-xl border border-gray-200/50 bg-white/50 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/80 hover:shadow-lg dark:border-gray-800/50 dark:bg-black/50 dark:hover:bg-black/80"
              >
                <div className="flex size-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-600">
                  <span className="text-xl">{item.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {item.role}
                  </h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400">
                    {item.period}
                  </p>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </BlurFade>

      {/* Certifications Section */}
      <BlurFade delay={0.6}>
        <div className="mt-20">
          <MotionDiv
            className="group mb-8 flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative">
              <h2 className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-3xl font-semibold text-transparent">
                Certifications
              </h2>
              <div className="absolute -bottom-1 left-0 h-0.5 w-full scale-x-0 bg-gradient-to-r from-green-500 to-emerald-600 transition-transform duration-300 group-hover:scale-x-100"></div>
            </div>
            <div className="size-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 p-0.5">
              <div className="flex size-full items-center justify-center rounded-full bg-white dark:bg-black">
                <span className="text-lg">🏅</span>
              </div>
            </div>
          </MotionDiv>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                title: 'Eduskills Android Developer Virtual Internship',
                link: '/pdfs/certifications/android-dev.pdf',
                gradient: 'from-green-500 to-emerald-600',
              },
              {
                title:
                  'Google Cloud Career Readiness Certificate - Cloud Computing Foundations',
                link: '/pdfs/certifications/google-cloud.pdf',
                gradient: 'from-blue-500 to-indigo-600',
              },
              {
                title: 'Infosys Springboard - Mastering Flutter Certification',
                link: '/pdfs/certifications/infosys-flutter.pdf',
                gradient: 'from-purple-500 to-pink-600',
              },
              {
                title:
                  'Google Foundations of Digital Marketing and E-commerce Certification',
                link: '/pdfs/certifications/google-digital-marketing.pdf',
                gradient: 'from-orange-500 to-red-600',
              },
            ].map((cert, index) => (
              <MotionDiv
                key={index}
                className="group relative overflow-hidden rounded-xl border border-gray-200/50 bg-white/50 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/80 hover:shadow-lg dark:border-gray-800/50 dark:bg-black/50 dark:hover:bg-black/80"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
                />
                <div className="relative z-10 flex flex-col items-start">
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                    {cert.title}
                  </h3>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    View Certificate
                    <svg
                      className="size-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    ></svg>
                  </a>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </BlurFade>

      <BlurFade delay={0.8}>
        <div className="mt-16">
          <CdBack />
        </div>
      </BlurFade>
    </section>
  )
}

export default AchievementsPage
