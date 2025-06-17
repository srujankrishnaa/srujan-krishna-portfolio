import * as React from 'react'

const R: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 32 32" fill="none" {...props}>
    <rect width="32" height="32" rx="6" fill="#276DC3" />
    <ellipse cx="16" cy="16" rx="10" ry="7" fill="#FFF" />
    <path
      d="M12 22v-4h2.5c1.5 0 2.5-.5 2.5-2s-1-2-2.5-2H10v8h2zm2.5-6c.5 0 1 .5 1 1s-.5 1-1 1H12v-2h2.5zM20 22l-2-3h-1v3h-2v-8h4c2 0 3 1 3 2.5 0 1.2-.7 2-2 2.3l2.2 3.2H20zm-3-5v2h2c.7 0 1-.3 1-1s-.3-1-1-1h-2z"
      fill="#276DC3"
    />
  </svg>
)

export default R
