import React, { SVGProps } from "react";

interface ModalCloseButtonProps extends SVGProps<SVGSVGElement> {}

function ModalCloseButton({ ...props }: ModalCloseButtonProps) {
  return (
    <svg
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
      {...props}
    >
      <rect
        x="0.428711"
        width="30.5714"
        height="30.5714"
        rx="15.2857"
        fill="#E8E8E8"
      />
      <path
        d="M9.54798 9.24639L9.60688 9.17817C9.82284 8.9622 10.1608 8.94258 10.3989 9.11927L10.4671 9.17817L15.7144 14.4252L20.9617 9.17817C21.1993 8.94061 21.5844 8.94061 21.822 9.17817C22.0595 9.41572 22.0595 9.80087 21.822 10.0384L16.575 15.2857L21.822 20.533C22.0379 20.7489 22.0576 21.0869 21.8808 21.325L21.822 21.3932C21.6061 21.6092 21.2681 21.6289 21.03 21.4521L20.9617 21.3932L15.7144 16.1463L10.4671 21.3932C10.2296 21.6308 9.84443 21.6308 9.60688 21.3932C9.36933 21.1557 9.36933 20.7706 9.60688 20.533L14.8539 15.2857L9.60688 10.0384C9.39092 9.82246 9.37129 9.48453 9.54798 9.24639Z"
        fill="#454D57"
      />
    </svg>
  );
}

export default ModalCloseButton;
