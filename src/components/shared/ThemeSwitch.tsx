'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ThemeSwitch() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="size-11"></div>
  }

  function switchTheme() {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  function onThemeChange() {
    if (!document.startViewTransition) {
      switchTheme()
    } else {
      document.startViewTransition(switchTheme)
    }
  }

  return (
    <div className="flex items-center justify-center">
      <motion.button
        aria-label="Switch theme"
        type="button"
        onClick={onThemeChange}
        className="focus-ring relative ml-1 flex size-10 flex-col items-center justify-center overflow-hidden rounded-full bg-zinc-100 font-medium duration-200 ease-in-out hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {resolvedTheme === 'light' ? (
            <motion.div
              key="moon"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Moon size={15} />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Sun size={15} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Subtle glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-400/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-blue-400/20 dark:to-purple-400/20"></div>
      </motion.button>
    </div>
  )
}
