import { memo, SVGProps } from 'react'

export const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="log-out" clipPath="url(#clip0_5661_2613)">
      <g id="Layer 2">
        <g id="log-out_2">
          <path
            id="Vector"
            d="M4.66666 3.99996C4.84348 3.99996 5.01304 3.92972 5.13807 3.8047C5.26309 3.67967 5.33333 3.5101 5.33333 3.33329C5.33333 3.15648 5.26309 2.98691 5.13807 2.86189C5.01304 2.73686 4.84348 2.66663 4.66666 2.66663H3.33333C3.15652 2.66663 2.98695 2.73686 2.86193 2.86189C2.7369 2.98691 2.66666 3.15648 2.66666 3.33329V12.6666C2.66666 12.8434 2.7369 13.013 2.86193 13.138C2.98695 13.2631 3.15652 13.3333 3.33333 13.3333H4.66666C4.84348 13.3333 5.01304 13.2631 5.13807 13.138C5.26309 13.013 5.33333 12.8434 5.33333 12.6666C5.33333 12.4898 5.26309 12.3202 5.13807 12.1952C5.01304 12.0702 4.84348 12 4.66666 12H4V3.99996H4.66666Z"
            fill="currentColor"
          />
          <path
            id="Vector_2"
            d="M13.88 7.61338L12 4.94672C11.898 4.80299 11.7433 4.70548 11.5697 4.67549C11.396 4.64551 11.2176 4.6855 11.0733 4.78672C11.0012 4.83724 10.9399 4.90154 10.8927 4.97592C10.8456 5.05029 10.8137 5.13326 10.7988 5.22004C10.784 5.30681 10.7864 5.39568 10.8061 5.4815C10.8257 5.56732 10.8622 5.64839 10.9133 5.72005L12.06 7.33338H6.66667C6.48986 7.33338 6.32029 7.40362 6.19526 7.52864C6.07024 7.65367 6 7.82324 6 8.00005C6 8.17686 6.07024 8.34643 6.19526 8.47145C6.32029 8.59648 6.48986 8.66672 6.66667 8.66672H12L10.8 10.2667C10.7475 10.3368 10.7093 10.4165 10.6875 10.5013C10.6658 10.5861 10.661 10.6743 10.6734 10.761C10.6857 10.8477 10.7151 10.931 10.7597 11.0064C10.8043 11.0817 10.8633 11.1475 10.9333 11.2C11.0487 11.2866 11.1891 11.3334 11.3333 11.3334C11.4368 11.3334 11.5389 11.3093 11.6315 11.263C11.724 11.2167 11.8046 11.1495 11.8667 11.0667L13.8667 8.40005C13.952 8.28729 13.9994 8.15031 14.0018 8.00889C14.0041 7.86748 13.9615 7.72897 13.88 7.61338Z"
            fill="currentColor"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="clip0_5661_2613">
        <rect width={16} height={16} fill="currentColor" />
      </clipPath>
    </defs>
  </svg>
)

export default memo(SvgComponent)
