import CdBack from '@/components/shared/CdBack'
import { ArrowUpRight, ChevronRight } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Work',
  description: 'A Snapshot of my work and contributions.',
}

export default function WorkPage() {
  return (
    <section className="py-5 dark:text-zinc-200 md:mt-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">my work</h1>

        <Link
          href="https://drive.google.com/file/d/1igKiyELHcxlib3qSLlTW1vyW8PSXDPga/view?usp=sharing"
          target="_blank"
          className="flex items-center justify-around gap-3 rounded-xl border-2 border-dashed border-black bg-white px-4 py-2 text-sm font-semibold text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-none hover:shadow-[4px_4px_0px_black] active:translate-x-0 active:translate-y-0 active:rounded-2xl active:shadow-none dark:border-white dark:bg-black dark:text-gray-400 dark:hover:shadow-[4px_4px_0px_white]"
        >
          View Resume
          <ChevronRight className="size-5 stroke-black dark:stroke-gray-400" />
        </Link>
      </div>
      <div className="space-y-5">
        {' '}
        <p>
          Exploring new technologies and creating engaging web experiences,
          while continuously learning and growing as a developer.
        </p>
        <p>Here &apos;s a snapshot of my journey so far.</p>
      </div>

      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

      <div className="space-y-8 text-sm">
        <div className="space-y-2">
          <Link
            href={'https://leadlly.in'}
            target="_blank"
            className="group flex items-center justify-start gap-3 overflow-hidden"
          >
            <h2 className="text-2xl font-semibold">Leadlly .</h2>

            <div className="relative size-5 -translate-x-4 -translate-y-1 overflow-hidden">
              <ArrowUpRight className="size-5 transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:translate-x-full" />
              <ArrowUpRight className="relative size-5 -translate-x-full transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:translate-x-0" />
            </div>
          </Link>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Full Stack Developer | April &apos;24 - December &apos;24
          </p>
        </div>

        <p className="leading-relaxed">
          At Leadlly, an open-source educational platform, I contributed as a
          Full Stack Developer:
        </p>
        <ul className="list-inside list-disc space-y-2 leading-relaxed">
          <li>Engineered responsive landing page and core web application.</li>
          <li>
            Implemented student-centric features: error tracking, interactive
            quizzes, and study planner.
          </li>
          <li>
            Optimized for mobile devices to enhance accessibility and user
            experience.
          </li>
          <li>
            Contributed to full-stack development using Next.js and modern web
            technologies.
          </li>
        </ul>
        <p className="mt-4 leading-relaxed">
          This project deepened my expertise in Figma, Framer Motion, and
          Next.js, aligning with industry standards.
        </p>
      </div>

      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

      <p className="mt-6 leading-relaxed">
        I&apos;m constantly learning and experimenting with new technologies.
        Stay tuned for more exciting projects and experiences coming soon...
      </p>

      <CdBack />
    </section>
  )
}
