'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import React from 'react'

type Props = {
  children?: React.ReactNode
  className?: string
}

const BentoCard = ({ children, className }: Props) => {
  return (
    <motion.div
      className={cn(
        'bento group/bentoCard relative size-full overflow-hidden',
        className
      )}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2, ease: 'easeOut' },
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Animated border gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 blur-xl transition-opacity duration-500 group-hover/bentoCard:opacity-100"></div>

      {/* Content */}
      <div className="relative z-10 flex size-full flex-col">{children}</div>

      {/* Enhanced hover overlay */}
      <div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover/bentoCard:bg-gradient-to-br group-hover/bentoCard:from-white/[0.02] group-hover/bentoCard:to-transparent group-hover/bentoCard:dark:from-white/[0.05] group-hover/bentoCard:dark:to-transparent" />

      {/* Subtle shine effect */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/bentoCard:opacity-100">
        <div className="absolute left-0 top-0 size-full -translate-x-full -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover/bentoCard:translate-x-full"></div>
      </div>
    </motion.div>
  )
}

export default BentoCard
