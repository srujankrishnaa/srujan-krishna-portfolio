import CdBack from '@/components/shared/CdBack'
import { ChevronRight } from 'lucide-react'
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
          href="https://drive.google.com/uc?export=download&id=1F5scv5EtrwYbezdZc3_IY2WOIXhzebmy"
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
          Exploring new technologies and creating engaging app experiences,
          while continuously learning and growing as a developer.
        </p>
        <p>Here &apos;s a snapshot of my journey so far.</p>
      </div>

      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

      <div className="space-y-8 text-sm">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">
            Android Developer - Google for Developers
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            April 2024 – June 2024, Virtual Internship, Hyderabad, India
          </p>
        </div>

        <p className="leading-relaxed">
          During my virtual internship with Google for Developers, I:
        </p>
        <ul className="list-inside list-disc space-y-2 leading-relaxed">
          <li>
            Completed a comprehensive virtual internship focused on core Android
            app development concepts, tools, and best practices.
          </li>
          <li>
            Integrated RESTful APIs and managed data persistence using SQLite
            and Room Database, enhancing app functionality by 60%.
          </li>
          <li>
            Engineered responsive Android interfaces using RecyclerView,
            ViewModel, and LiveData, improving UI loading speeds by 40% and
            reducing user-reported lags by 25% for enhanced user experience.
          </li>
        </ul>
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
