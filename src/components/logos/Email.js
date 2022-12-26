export const Email = ({ size = 32, color = "#000", ...props }) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M22.6667 4.66675H9.33332C5.33332 4.66675 2.66666 6.66675 2.66666 11.3334V20.6667C2.66666 25.3334 5.33332 27.3334 9.33332 27.3334H22.6667C26.6667 27.3334 29.3333 25.3334 29.3333 20.6667V11.3334C29.3333 6.66675 26.6667 4.66675 22.6667 4.66675ZM23.2933 12.7867L19.12 16.1201C18.24 16.8267 17.12 17.1734 16 17.1734C14.88 17.1734 13.7467 16.8267 12.88 16.1201L8.70666 12.7867C8.27999 12.4401 8.21332 11.8001 8.54666 11.3734C8.89332 10.9467 9.51999 10.8667 9.94666 11.2134L14.12 14.5467C15.1333 15.3601 16.8533 15.3601 17.8667 14.5467L22.04 11.2134C22.4667 10.8667 23.1067 10.9334 23.44 11.3734C23.7867 11.8001 23.72 12.4401 23.2933 12.7867Z" fill="#7562E0"/>
     </svg>
    );
  };