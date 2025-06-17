import * as React from 'react'

const TensorFlow: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 32 32" fill="none" {...props}>
    <rect width="32" height="32" rx="6" fill="#FF6F00" />
    <path
      d="M16 8l-8 4v4l8-4 8 4v-4l-8-4zm0 4l-4 2v4l4-2 4 2v-4l-4-2zm0 4l-2 1v4l2-1 2 1v-4l-2-1z"
      fill="#FFF"
    />
  </svg>
)

export default TensorFlow
