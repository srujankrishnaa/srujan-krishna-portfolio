import * as React from 'react'

const Supabase: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 32 32" fill="none" {...props}>
    <rect width="32" height="32" rx="6" fill="#3ECF8E" />
    <polygon points="16,8 24,24 8,24" fill="#FFF" />
    <rect x="14" y="12" width="4" height="8" fill="#3ECF8E" />
  </svg>
)

export default Supabase
