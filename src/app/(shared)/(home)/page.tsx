'use client'
import Bento from '@/components/Home/Bento'
import { Intro } from '@/components/Home/Intro'
import BlurFade from '@/components/ui/BlurFade'

const page = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with tighter spacing */}
      <section className="pb-8 pt-6 md:pt-12 lg:pt-16">
        <BlurFade delay={0.3}>
          <Intro />
        </BlurFade>
      </section>

      {/* Bento Section with better spacing */}
      <section className="pb-16 md:pb-24">
        <BlurFade delay={0.5}>
          <Bento />
        </BlurFade>
      </section>
    </div>
  )
}
export default page
