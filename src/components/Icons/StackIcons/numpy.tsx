import * as React from 'react'

const NumPy: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 32 32" fill="none" {...props}>
    <rect width="32" height="32" rx="6" fill="#013243" />
    <path d="M10 22V10h2l6 8V10h2v12h-2l-6-8v8h-2z" fill="#FFF" />
  </svg>
)

export default NumPy
