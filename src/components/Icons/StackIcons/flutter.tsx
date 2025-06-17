import React from 'react'

const Flutter = ({ size = 24, className = '' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M14.5 2L5 11.5l3 3L22 2z" fill="#42A5F5" />
      <path d="M14.5 2L2 14.5l7 7L22 9z" fill="#42A5F5" />
    </svg>
  )
}

export default Flutter
