import * as React from 'react'

const Pandas: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 32 32" fill="none" {...props}>
    <rect width="32" height="32" rx="6" fill="#150458" />
    <rect x="10" y="8" width="2" height="16" fill="#FFF" />
    <rect x="20" y="8" width="2" height="16" fill="#FFF" />
    <rect x="15" y="12" width="2" height="8" fill="#E70488" />
  </svg>
)

export default Pandas
