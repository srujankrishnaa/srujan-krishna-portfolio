import PolaroidPhoto from '@/components/About/PolaroidPhoto'
import { SpacingWhale } from '@/components/Home/SpacingWhle'
import CdBack from '@/components/shared/CdBack'

import photo1 from '@/../../public/images/photo 1.jpeg'
import photo2 from '@/../../public/images/photo 2.jpeg'
import photo3 from '@/../../public/images/photo 3.jpeg'

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
      <CdBack />
    </section>
  )
}

export default page
