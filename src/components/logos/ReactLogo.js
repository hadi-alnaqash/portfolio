export const ReactLogo = ({ size = 55, color = "#000", ...props }) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="-11.5 -10.23174 23 20.46348"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <circle cx="0" cy="0" r="2.05" fill="white"/>
        <g stroke="white" stroke-width="1" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
     </svg>
    );
  };