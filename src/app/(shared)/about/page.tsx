import PolaroidPhoto from '@/components/About/PolaroidPhoto'
import { SpacingWhale } from '@/components/Home/SpacingWhle'
import CdBack from '@/components/shared/CdBack'

import photo1 from '@/../../public/images/photo 1.jpeg'
import photo2 from '@/../../public/images/photo 2.jpeg'
import photo3 from '@/../../public/images/photo 3.jpeg'
import Image from 'next/image'

const page = () => {
  return (
    <section className="pb-3 pt-8 md:mt-8 md:pb-16 lg:mt-10">
      <div className="flex items-end gap-5">
        <h1 className="text-4xl font-bold tracking-tight">about me</h1>
        <SpacingWhale />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-5 py-20 md:gap-20">
        <PolaroidPhoto
          altText="Srujan at a cafe"
          imageSrc={photo1}
          rotation={-7}
          text="Chilling at a cafe"
        />
        <PolaroidPhoto
          altText="just chilling"
          imageSrc={photo2}
          rotation={5}
          text="love seeing the beaches"
        />
        <PolaroidPhoto
          altText="Srujan outdoors"
          imageSrc={photo3}
          rotation={2}
          text="Exploring nature"
        />
      </div>
      <div className="group space-y-5 leading-relaxed">
        <h2 className="text-2xl font-bold">GANDAMALLA SRUJAN KRISHNA</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Telangana, India |{' '}
          <a href="mailto:srujankrishnac1@gmail.com" className="underline">
            srujankrishnac1@gmail.com
          </a>{' '}
          |{' '}
          <a
            href="https://www.linkedin.com/in/srujan-krishna-944a03257/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            LinkedIn
          </a>{' '}
          |{' '}
          <a
            href="https://github.com/srujankrishnaa"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            GitHub
          </a>
        </p>
        <p>
          Hi, I&apos;m G.Srujan Krishna, a Full-Stack App Developer passionate
          about merging technology with business.
          <br />
          I believe that great software is built not just with clean code, but
          with a sharp eye for design and a strong understanding of business
          value.
          <br />
          I specialize in building scalable full-stack applications with
          seamless user experiences, where business logic and design go hand in
          hand. From backend systems to frontend polish, I enjoy creating
          products that solve real-world problems and drive measurable impact.
          <br />
          Currently, I&apos;m diving deeper into product thinking, backend
          architecture, and UI innovation to build the next generation of apps.
        </p>
      </div>

      {/* Tech Stack Section */}
      <div className="mt-16 space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">About this site</h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Curious about this site? It features:
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="mb-4 text-2xl font-bold">Tech stack</h3>
            <p className="mb-6 text-zinc-600 dark:text-zinc-400">
              This site is crafted with Next.js, Tailwind CSS, and MDX, and uses
              Umami for analytics, with Vercel handling the hosting. Check out
              the code on{' '}
              <a
                href="https://github.com/srujankrishnaa/srujan-krishna-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-zinc-900 underline dark:text-zinc-100"
              >
                GitHub
              </a>
            </p>

            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
              <div className="flex flex-col items-center">
                <div className="flex size-16 items-center justify-center rounded-full bg-zinc-100 p-2 dark:bg-zinc-800">
                  <Image src="/next.svg" alt="Next.js" width={40} height={40} />
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex size-16 items-center justify-center rounded-full bg-zinc-100 p-2 dark:bg-zinc-800">
                  <svg
                    viewBox="0 0 24 24"
                    className="size-10"
                    fill="currentColor"
                  >
                    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
                  </svg>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex size-16 items-center justify-center rounded-full bg-zinc-100 p-2 dark:bg-zinc-800">
                  <svg
                    viewBox="0 0 24 24"
                    className="size-10"
                    fill="currentColor"
                  >
                    <path d="M22.251 11.82a3.117 3.117 0 0 0-2.328-3.067L22.911 0H8.104L11.1 8.753a3.116 3.116 0 0 0-2.244 2.993L8.855 24 13 17.846l5.233 5.789.963-11.815ZM11.485 1.538h9.671L18.5 9.723A3.124 3.124 0 0 0 16.415 9.2a3.117 3.117 0 0 0-1.97 1.313l-1.514.855Z" />
                  </svg>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex size-16 items-center justify-center rounded-full bg-zinc-100 p-2 dark:bg-zinc-800">
                  <svg
                    viewBox="0 0 24 24"
                    className="size-10"
                    fill="currentColor"
                  >
                    <path d="M20.38 8.53c.16-.4.68-1.99-.17-4.14c0 0-1.31-.39-4.3 1.61c-1.25-.33-2.58-.38-3.91-.38c-1.32 0-2.66.05-3.91.38c-2.99-2.03-4.3-1.61-4.3-1.61c-.85 2.15-.33 3.74-.16 4.14C2.61 9.62 2 11 2 12.72c0 6.44 4.16 7.89 10 7.89c5.79 0 10-1.45 10-7.89c0-1.72-.61-3.1-1.62-4.19M12 19.38c-4.12 0-7.47-.19-7.47-4.19c0-.95.47-1.85 1.27-2.58c1.34-1.23 3.63-.58 6.2-.58c2.59 0 4.85-.65 6.2.58c.8.73 1.3 1.62 1.3 2.58c0 3.99-3.37 4.19-7.5 4.19m-3.14-6.26c-.82 0-1.5 1-1.5 2.22c0 1.23.68 2.24 1.5 2.24c.83 0 1.5-1 1.5-2.24c0-1.23-.67-2.22-1.5-2.22m6.28 0c-.83 0-1.5.99-1.5 2.22c0 1.24.67 2.24 1.5 2.24c.82 0 1.5-1 1.5-2.24c0-1.23-.64-2.22-1.5-2.22z" />
                  </svg>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex size-16 items-center justify-center rounded-full bg-zinc-100 p-2 dark:bg-zinc-800">
                  <svg
                    viewBox="0 0 24 24"
                    className="size-10"
                    fill="currentColor"
                  >
                    <path d="M24 22.525H0l12-21.05l12 21.05z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Typography Section */}
          <div>
            <h3 className="mb-4 text-2xl font-bold">Typography</h3>
            <p className="mb-6 text-zinc-600 dark:text-zinc-400">
              For typography, Inter sets the stage with body text, Neue Montreal
              emphasizes special words, Lombok makes playground headings pop,
              and Catholic School Girls BB adds flair to Polaroid images. Each
              font is uniquely styled to highlight its role.
            </p>

            <div className="grid grid-cols-2 gap-0">
              <div className="flex items-center justify-center border border-dashed border-zinc-600 p-6 dark:border-zinc-400">
                <p className="text-center text-xl">Inter</p>
              </div>

              <div className="flex items-center justify-center border border-dashed border-zinc-600 p-6 dark:border-zinc-400">
                <p className="text-center font-neu text-xl">Neue Monstreal</p>
              </div>

              <div className="flex items-center justify-center border border-dashed border-zinc-600 p-6 dark:border-zinc-400">
                <p className="text-center font-lombok text-xl">LOMBOK</p>
              </div>

              <div className="flex items-center justify-center border border-dashed border-zinc-600 p-6 dark:border-zinc-400">
                <p className="text-center font-cath text-xl">
                  Catholic School Girls BB
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CdBack />
    </section>
  )
}

export default page
