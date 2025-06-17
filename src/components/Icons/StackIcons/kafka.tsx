import * as React from 'react'

const Kafka: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 32 32" fill="none" {...props}>
    <rect width="32" height="32" rx="6" fill="#231F20" />
    <circle cx="16" cy="16" r="6" fill="#FFF" />
    <circle cx="16" cy="10" r="2" fill="#231F20" />
    <circle cx="16" cy="22" r="2" fill="#231F20" />
    <circle cx="10" cy="16" r="2" fill="#231F20" />
    <circle cx="22" cy="16" r="2" fill="#231F20" />
    <rect x="15" y="10" width="2" height="12" fill="#231F20" />
    <rect x="10" y="15" width="12" height="2" fill="#231F20" />
  </svg>
)

export default Kafka
