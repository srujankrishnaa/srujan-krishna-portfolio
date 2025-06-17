'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin, Calendar } from 'lucide-react'

export const Intro = () => {
  return (
    <section className="text-zinc-600 dark:text-zinc-400">
      {/* Top section: Name, Title, and Profile Picture */}
      <div className="mx-auto flex w-full max-w-6xl items-start justify-between px-4">
        <motion.div
          className="flex max-w-2xl flex-col justify-start text-left"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-600 bg-clip-text text-4xl font-bold leading-tight text-transparent dark:from-zinc-100 dark:via-zinc-300 dark:to-zinc-400 md:text-5xl lg:text-6xl">
            G. Srujan Krishna
          </h1>
          <div className="mt-3 flex items-center gap-2">
            <div className="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
            <p className="font-neu text-xl text-gray-400 md:text-2xl">
              Full Stack Engineer
            </p>
          </div>
          <div className="mt-4 flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
            <div className="flex items-center gap-1">
              <MapPin size={14} />
              <span>Telangana, India</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>Available for opportunities</span>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="group relative flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 opacity-25 blur transition duration-1000 group-hover:opacity-75 group-hover:duration-200"></div>
          <Image
            src="/images/profile.png"
            alt="G. Srujan Krishna profile picture"
            width={120}
            height={120}
            className="relative rounded-lg ring-2 ring-white/10 transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </motion.div>
      </div>

      {/* Bio section with enhanced typography */}
      <motion.div
        className="mx-auto mt-8 w-full max-w-6xl px-4 text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="space-y-6">
          <p className="text-xl leading-relaxed">
            Hi, I\'m{' '}
            <span className="font-semibold text-zinc-800 dark:text-zinc-200">
              G.Srujan Krishna
            </span>
            , a Full-Stack App Developer passionate about merging technology
            with business.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <p className="leading-relaxed">
                I believe that great software is built not just with clean code,
                but with a sharp eye for design and a strong understanding of
                business value.
              </p>
              <p className="leading-relaxed">
                I specialize in building scalable full-stack applications with
                seamless user experiences, where business logic and design go
                hand in hand.
              </p>
            </div>
            <div className="space-y-4">
              <p className="leading-relaxed">
                From backend systems to frontend polish, I enjoy creating
                products that solve real-world problems and drive measurable
                impact.
              </p>
              <p className="leading-relaxed">
                Currently, I\'m diving deeper into product thinking, backend
                architecture, and UI innovation to build the next generation of
                apps.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Enhanced Social links section */}
      <motion.div
        className="mx-auto mt-8 flex w-full max-w-6xl justify-start gap-3 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <a
          href="https://github.com/srujankrishnaa"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-2 transition-all duration-300 hover:scale-105 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700"
        >
          <Github
            size={16}
            className="transition-transform duration-300 group-hover:rotate-12"
          />
          <span className="text-sm font-medium">GitHub</span>
        </a>
        <a
          href="https://linkedin.com/in/srujankrishnaa"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-2 transition-all duration-300 hover:scale-105 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700"
        >
          <Linkedin
            size={16}
            className="transition-transform duration-300 group-hover:rotate-12"
          />
          <span className="text-sm font-medium">LinkedIn</span>
        </a>
        <a
          href="mailto:srujankrishnaa@gmail.com"
          className="group flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-2 transition-all duration-300 hover:scale-105 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700"
        >
          <Mail
            size={16}
            className="transition-transform duration-300 group-hover:rotate-12"
          />
          <span className="text-sm font-medium">Email</span>
        </a>
      </motion.div>
    </section>
  )
}
