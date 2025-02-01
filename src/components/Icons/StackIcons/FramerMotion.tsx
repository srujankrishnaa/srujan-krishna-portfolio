import * as React from 'react'
import type { SVGProps } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 154 54" {...props}>
    <path d="M58.148 0L27.72 53.952H0L23.759 11.824C27.442 5.294 36.633 0 44.288 0zM126.125 13.488C126.125 6.039 132.33 0 139.985 0c7.655 0 13.86 6.039 13.86 13.488 0 7.449-6.205 13.488-13.86 13.488-7.655 0-13.86-6.039-13.86-13.488zM63.345 0h27.72L60.638 53.952H32.918zM96.085 0h27.72l-23.759 42.128c-3.683 6.531-12.874 11.824-20.529 11.824H65.657z" />
  </svg>
)

export { SvgComponent as FramerMotion }
