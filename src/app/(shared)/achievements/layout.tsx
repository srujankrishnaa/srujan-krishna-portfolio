import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Achievements',
  description: 'My awards, leadership roles, and certifications.',
}

export default function AchievementsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}