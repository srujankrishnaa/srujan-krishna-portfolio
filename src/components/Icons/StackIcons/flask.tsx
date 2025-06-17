import * as React from 'react'

const Flask: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 32 32" fill="none" {...props}>
    <rect width="32" height="32" rx="6" fill="#000" />
    <path
      d="M16 8c-2 0-4 2-4 4s2 4 4 4 4-2 4-4-2-4-4-4zm0 8c-2.21 0-4 1.79-4 4v4h8v-4c0-2.21-1.79-4-4-4z"
      fill="#FFF"
    />
  </svg>
)

export default Flask
