import { Github } from '@/components/Icons/GIthubBentoIcon'
import BentoCard from './BentoCard'
import Link from 'next/link'

const GithubCard = () => {
  return (
    <BentoCard className="group/github col-span-3 row-span-2 flex items-center justify-center xs:col-span-2 xs:row-span-4">
      <Link
        href={'https://github.com/srujankrishnaa'}
        target="_blank"
        className="flex size-full flex-col items-center justify-center p-4"
      >
        <Github className="mb-2 size-16" />
        <span className="text-center text-xl font-semibold">
          github.com/srujankrishnaa
        </span>
      </Link>
    </BentoCard>
  )
}

export default GithubCard
