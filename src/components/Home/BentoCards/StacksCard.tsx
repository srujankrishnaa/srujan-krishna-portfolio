import React from 'react'
import { Marquee } from '../Marquee'
import Nextjs from '@/components/Icons/StackIcons/Nextjs'
import { Html } from '@/components/Icons/StackIcons/Html'
import { Css } from '@/components/Icons/StackIcons/css'
import { Docker } from '@/components/Icons/StackIcons/docker'
import { Git } from '@/components/Icons/StackIcons/git'
import { JS } from '@/components/Icons/StackIcons/javascript'
import { Postgresql } from '@/components/Icons/StackIcons/postgresql'
import { ReactIcon } from '@/components/Icons/StackIcons/react'
import Stack from '@/components/Icons/Stack'
import BentoCard from './BentoCard'
import Python from '@/components/Icons/StackIcons/python'
import R from '@/components/Icons/StackIcons/r'
import Dart from '@/components/Icons/StackIcons/dart'
import Flutter from '@/components/Icons/StackIcons/flutter'
import TensorFlow from '@/components/Icons/StackIcons/tensorflow'
import NumPy from '@/components/Icons/StackIcons/numpy'
import Pandas from '@/components/Icons/StackIcons/pandas'
import Matplotlib from '@/components/Icons/StackIcons/matplotlib'
import AndroidStudio from '@/components/Icons/StackIcons/androidstudio'
import Vercel from '@/components/Icons/StackIcons/vercel'
import Kafka from '@/components/Icons/StackIcons/kafka'
import GCP from '@/components/Icons/StackIcons/gcp'
import Supabase from '@/components/Icons/StackIcons/supabase'
import Flask from '@/components/Icons/StackIcons/flask'

const frontendTech: React.FC<React.SVGProps<SVGSVGElement>>[] = [
  Html,
  Css,
  JS,
  Dart,
  Flutter,
  ReactIcon,
  Nextjs,
]

const backendTech: React.FC<React.SVGProps<SVGSVGElement>>[] = [
  Postgresql,
  Supabase,
  Flask,
  Docker,
]

const dataScienceTech: React.FC<React.SVGProps<SVGSVGElement>>[] = [
  Python,
  R,
  TensorFlow,
  NumPy,
  Pandas,
  Matplotlib,
]

const toolsPlatforms: React.FC<React.SVGProps<SVGSVGElement>>[] = [
  Git,
  AndroidStudio,
  Vercel,
  Kafka,
  GCP,
]

const StacksCard = ({ isForSmall = false }: { isForSmall?: boolean }) => {
  return (
    <BentoCard className="group/stack col-span-5 row-span-1 h-[450px] p-6 xs:col-span-4 xs:row-span-2 lg:p-8">
      <div className="mb-3 flex items-center gap-2">
        <Stack className="size-4" />
        <h2 className="bg-gradient-to-r from-[#8ebac7] via-[#4d8b9d] to-[#2a4b55] bg-clip-text font-neu text-sm font-medium text-transparent">
          Stacks
        </h2>
      </div>
      <div className="mb-4 text-xs text-gray-500">Frontend</div>
      <Marquee gap="40px" className="py-2" fade pauseOnHover>
        {frontendTech.map((TechComponent, index) => (
          <TechComponent
            key={index}
            id={isForSmall ? `s-${index}` : `${index}`}
            className="size-8 transition-all duration-500 ease-in-out"
          />
        ))}
      </Marquee>
      <div className="mb-4 mt-4 text-xs text-gray-500">Backend</div>
      <Marquee gap="40px" className="py-2" reverse fade pauseOnHover>
        {backendTech.map((TechComponent, index) => (
          <TechComponent
            key={index}
            id={isForSmall ? `b-${index}` : `b${index}`}
            className="size-8 transition-all duration-500 ease-in-out"
          />
        ))}
      </Marquee>
      <div className="mb-4 mt-4 text-xs text-gray-500">Data Science</div>
      <Marquee gap="40px" className="py-2" fade pauseOnHover>
        {dataScienceTech.map((TechComponent, index) => (
          <TechComponent
            key={index}
            id={isForSmall ? `d-${index}` : `d${index}`}
            className="size-8 transition-all duration-500 ease-in-out"
          />
        ))}
      </Marquee>
      <div className="mb-4 mt-4 text-xs text-gray-500">Tools & Platforms</div>
      <Marquee gap="40px" className="py-2" reverse fade pauseOnHover>
        {toolsPlatforms.map((TechComponent, index) => (
          <TechComponent
            key={index}
            id={isForSmall ? `t-${index}` : `t${index}`}
            className="size-8 transition-all duration-500 ease-in-out"
          />
        ))}
      </Marquee>
    </BentoCard>
  )
}

export default StacksCard
