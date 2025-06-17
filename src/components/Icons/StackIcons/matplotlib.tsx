import * as React from 'react'

const Matplotlib: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 32 32" fill="none" {...props}>
    <rect width="32" height="32" rx="6" fill="#11557C" />
    <circle cx="16" cy="16" r="6" fill="#FFF" />
    <path d="M16 10v12M10 16h12" stroke="#11557C" strokeWidth="2" />
  </svg>
)

export default Matplotlib
