import PythonIcon from '@/components/Icons/StackIcons/python'
import RIcon from '@/components/Icons/StackIcons/r'
import DartIcon from '@/components/Icons/StackIcons/dart'
import FlutterIcon from '@/components/Icons/StackIcons/flutter'
import TensorflowIcon from '@/components/Icons/StackIcons/tensorflow'
import PandasIcon from '@/components/Icons/StackIcons/pandas'
import MatplotlibIcon from '@/components/Icons/StackIcons/matplotlib'
import AndroidStudioIcon from '@/components/Icons/StackIcons/androidstudio'
import VercelIcon from '@/components/Icons/StackIcons/vercel'
import KafkaIcon from '@/components/Icons/StackIcons/kafka'
import GcpIcon from '@/components/Icons/StackIcons/gcp'
import SupabaseIcon from '@/components/Icons/StackIcons/supabase'
import FlaskIcon from '@/components/Icons/StackIcons/flask'
import { Postgresql as PostgresIcon } from '@/components/Icons/StackIcons/postgresql'
// import UnityIcon from '@/components/Icons/StackIcons/unity' // Uncomment if available

import type React from 'react'
// import { TechIcon } from './types' // Removed: TechIcon moved directly below
import { TbBrandNextjs } from 'react-icons/tb'
import { BiLogoTypescript, BiLogoPostgresql } from 'react-icons/bi'
import {
  SiTailwindcss,
  SiPrisma,
  SiMongodb,
  SiExpress,
  SiChakraui,
  SiPython,
  SiR,
  SiDart,
  SiFlutter,
  SiTensorflow,
  SiNumpy,
  SiPandas,
  SiAndroidstudio,
  SiVercel,
  SiApachekafka,
  SiGooglecloud,
  SiSupabase,
  // Remove this import since it's not available
  // SiMatplotlib,
} from 'react-icons/si'
import {
  FaNode,
  FaReact,
  FaAws,
  FaDocker,
  FaDiscord,
  FaLinkedinIn,
  FaGithub,
} from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

// Defining TechIcon interface directly in constants.ts
export interface TechIcon {
  Component: React.FC<{ className?: string }>
  href: string
  className: string
  label: string
  name: string
}

// Add a new interface for stack icons
export interface StackIcon {
  name: string
  Icon: React.ComponentType<any>
}

type NavItems = {
  name: string
  href: string
}[]
export const navItems: NavItems = [
  { name: 'Work', href: '/work' },
  { name: 'Projects', href: '/projects' },
  { name: 'Achievements', href: '/achievements' },
  { name: 'About', href: '/about' },
]

// Removed IconData interface and directly use TechIcon for iconData
export const iconData: TechIcon[] = [
  {
    Component: PythonIcon,
    href: 'https://python.org',
    className: 'size-12',
    label: 'Python',
    name: 'Python',
  },
  {
    Component: RIcon,
    href: 'https://www.r-project.org/',
    className: 'size-12',
    label: 'R',
    name: 'R',
  },
  {
    Component: DartIcon,
    href: 'https://dart.dev/',
    className: 'size-12',
    label: 'Dart',
    name: 'Dart', // Add comma here
  },
  {
    Component: FlutterIcon,
    href: 'https://flutter.dev/',
    className: 'size-12',
    label: 'Flutter',
    name: 'Flutter', // Add comma here
  },
  {
    Component: TensorflowIcon,
    href: 'https://www.tensorflow.org/',
    className: 'size-12',
    label: 'TensorFlow',
    name: 'TensorFlow', // Add comma here
  },
  {
    Component: PandasIcon,
    href: 'https://pandas.pydata.org/',
    className: 'size-12',
    label: 'Pandas',
    name: 'Pandas', // Add comma here
  },
  {
    Component: MatplotlibIcon,
    href: 'https://matplotlib.org/',
    className: 'size-12',
    label: 'Matplotlib',
    name: 'Matplotlib', // Add comma here
  },
  {
    Component: AndroidStudioIcon,
    href: 'https://developer.android.com/studio',
    className: 'size-12',
    label: 'Android Studio',
    name: 'Android Studio', // Add comma here
  },
  {
    Component: VercelIcon,
    href: 'https://vercel.com',
    className: 'size-12',
    label: 'Vercel',
    name: 'Vercel', // Add comma here
  },
  {
    Component: KafkaIcon,
    href: 'https://kafka.apache.org/',
    className: 'size-12',
    label: 'Kafka',
    name: 'Kafka', // Add comma here
  },
  {
    Component: GcpIcon,
    href: 'https://cloud.google.com/',
    className: 'size-12',
    label: 'GCP',
    name: 'GCP', // Add comma here
  },
  {
    Component: SupabaseIcon,
    href: 'https://supabase.com/',
    className: 'size-12',
    label: 'Supabase',
    name: 'Supabase', // Add comma here
  },
  {
    Component: FlaskIcon,
    href: 'https://flask.palletsprojects.com/',
    className: 'size-12',
    label: 'Flask',
    name: 'Flask', // Add comma here
  },
  {
    Component: PostgresIcon,
    href: 'https://www.postgresql.org/',
    className: 'size-12',
    label: 'PostgreSQL',
    name: 'PostgreSQL', // Add comma here
  },
  // {
  //   Component: UnityIcon,
  //   href: 'https://unity.com/',
  //   className: 'size-12',
  //   label: 'Unity',
  // },
]
export const inspirationWebsites = [
  { name: 'antfu.me', url: 'https://antfu.me/' },
  { name: 'beta.vimfn.in', url: 'https://beta.vimfn.in' },
  { name: 'honghong.me', url: 'https://honghong.me' },
  { name: 'leerob.io', url: 'https://leerob.io' },
  { name: 'manuarora.in', url: 'https://manuarora.in/' },
  { name: 'canvas.hrcd.fr', url: 'https://canvas.hrcd.fr/' },
  { name: 'marcbouchenoire.com', url: 'https://marcbouchenoire.com' },
  { name: 'magicui.design', url: 'https://magicui.design/' },
  { name: 'augen.pro', url: 'https://augen.pro/' },
  { name: 'ui.aceternity.com', url: 'https://ui.aceternity.com/' },
]
export const topProjects = [
  {
    imageSrc: '/images/project/deepfake-gan.png',
    title: 'Deepfake Detection using GAN Model',
    tags: ['Python', 'GANs', 'Keras', 'Flask'],
    timeline: '2024',
    tagline: 'Deep learning model to detect deepfake images using GANs.',
    sourceCodeHref:
      'https://github.com/srujankrishnaa/deepfake-detection-using-gan-model',
    liveDemoHref: '',
  },
  {
    imageSrc: '/images/project/educity.png',
    title: 'EduCity (EDVISE App)',
    tags: [
      'Unity',
      'Flutter',
      'Springboot',
      'ARCore',
      'PostgreSQL',
      'Gemini API',
      'TensorFlow',
    ],
    timeline: '2024',
    tagline:
      'Gamified learning platform where subjects are represented as cities.',
    sourceCodeHref: 'https://github.com/srujankrishnaa/EduCity',
    liveDemoHref: '',
  },
  {
    imageSrc: '/images/project/bonfire.png',
    title: 'Bonfire',
    tags: ['Flutter', 'Unity', 'Firebase', 'Dart', 'Dialogflow', 'LLM'],
    timeline: '2025',
    tagline: 'Therapy group community app with VR and AI features.',
    sourceCodeHref: 'https://github.com/srujankrishnaa/Bonfire',
    liveDemoHref: '',
  },
  {
    imageSrc: '/images/project/mechido.png',
    title: 'Mechido',
    tags: [
      'Flutter',
      'Supabase',
      'PostgreSQL',
      'Dart',
      'Realtime Tracking',
      'UI/UX Design',
    ],
    timeline: '2025',
    tagline: 'Vehicle service booking app with real-time mechanic tracking.',
    sourceCodeHref: 'https://github.com/srujankrishnaa/mechido',
    liveDemoHref: '',
  },
]

export const frontendStack: StackIcon[] = [
  {
    name: 'Next.js',
    Icon: TbBrandNextjs,
  },
  {
    name: 'TypeScript',
    Icon: BiLogoTypescript,
  },
  {
    name: 'React.js',
    Icon: FaReact,
  },
  {
    name: 'TailwindCSS',
    Icon: SiTailwindcss,
  },
  {
    name: 'ChakraUI',
    Icon: SiChakraui,
  },
]

export const backendStack: StackIcon[] = [
  {
    name: 'Node.js',
    Icon: FaNode,
  },
  {
    name: 'Express.js',
    Icon: SiExpress,
  },
  {
    name: 'Prisma',
    Icon: SiPrisma,
  },
  {
    name: 'PostgreSQL',
    Icon: BiLogoPostgresql,
  },
  {
    name: 'MongoDB',
    Icon: SiMongodb,
  },
]

export const mobileStack: StackIcon[] = [
  {
    name: 'Dart',
    Icon: SiDart,
  },
  {
    name: 'Flutter',
    Icon: SiFlutter,
  },
  {
    name: 'Android Studio',
    Icon: SiAndroidstudio,
  },
]

export const devopsStack: StackIcon[] = [
  {
    name: 'Docker',
    Icon: FaDocker,
  },
  {
    name: 'AWS',
    Icon: FaAws,
  },
  {
    name: 'Google Cloud',
    Icon: SiGooglecloud,
  },
  {
    name: 'Vercel',
    Icon: SiVercel,
  },
  {
    name: 'Kafka',
    Icon: SiApachekafka,
  },
  {
    name: 'Supabase',
    Icon: SiSupabase,
  },
]

export const dataScienceStack: StackIcon[] = [
  {
    name: 'Python',
    Icon: SiPython,
  },
  {
    name: 'R',
    Icon: SiR,
  },
  {
    name: 'TensorFlow',
    Icon: SiTensorflow,
  },
  {
    name: 'NumPy',
    Icon: SiNumpy,
  },
  {
    name: 'Pandas',
    Icon: SiPandas,
  },
  {
    name: 'Matplotlib',
    Icon: MatplotlibIcon, // This is now correctly using your custom MatplotlibIcon
  },
]

export const socialLinks = [
  {
    name: 'Discord',
    href: 'https://discordapp.com/users/yourusername',
    Icon: FaDiscord,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/g-srujan-krishna',
    Icon: FaLinkedinIn,
  },
  {
    name: 'Twitter/X',
    href: 'https://twitter.com/yourtwitterhandle',
    Icon: FaXTwitter,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/srujankrishnaa',
    Icon: FaGithub,
  },
]

export const contactEmail = 'g.srujankrishna@example.com'
