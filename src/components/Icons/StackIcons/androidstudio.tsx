import React from 'react'

const AndroidStudio = ({ size = 24, className = '' }) => {
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
      <path
        d="M17 19l-4-4H5.82C4.13 15 3 13.82 3 12.13V5c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v10c0 1.69-1.18 2.87-2.87 2.99L17 19z"
        fill="#3DDC84"
      />
      <path
        d="M7 19l-4-4h11.18c1.69 0 2.87-1.18 2.99-2.87L17 19z"
        fill="#3DDC84"
      />
    </svg>
  )
}

export default AndroidStudio
