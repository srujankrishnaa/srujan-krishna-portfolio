import * as React from 'react'

const Vercel: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 32 32" fill="none" {...props}>
    <rect width="32" height="32" rx="6" fill="#000" />
    <polygon points="16,8 26,24 6,24" fill="#FFF" />
  </svg>
)

export default Vercel
