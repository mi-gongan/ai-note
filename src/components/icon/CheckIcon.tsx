import React from "react";

function CheckIcon({ selected }: { selected: boolean }) {
  if (selected) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
      >
        <path
          d="M18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9Z"
          fill="#3D60FF"
        />
        <path
          d="M12.9389 6.68539C13.2277 6.97424 13.2277 7.44255 12.9389 7.73138L8.76736 11.7227C8.47852 12.0115 8.01018 12.0115 7.72144 11.7227L5.74532 9.74659C5.45648 9.45774 5.45648 8.98941 5.74532 8.70066C6.03415 8.41181 6.50246 8.41181 6.7913 8.70066L8.2444 10.1537L11.893 6.68537C12.1818 6.39653 12.6501 6.39654 12.9389 6.68539Z"
          fill="white"
        />
      </svg>
    );
  } else {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
      >
        <circle
          cx="9"
          cy="9"
          r="8.35714"
          fill="#DFE3E9"
          stroke="#DFE3E9"
          strokeWidth="1.28571"
        />
        <path
          d="M13.3765 6.6704C13.6975 6.99134 13.6975 7.51169 13.3765 7.83261L8.74147 12.2674C8.42053 12.5883 7.90016 12.5883 7.57933 12.2674L5.38364 10.0717C5.06271 9.75079 5.06271 9.23042 5.38364 8.90959C5.70457 8.58864 6.22492 8.58864 6.54585 8.90959L8.1604 10.5241L12.2144 6.67038C12.5353 6.34945 13.0556 6.34946 13.3765 6.6704Z"
          fill="white"
        />
      </svg>
    );
  }
}

export default CheckIcon;
