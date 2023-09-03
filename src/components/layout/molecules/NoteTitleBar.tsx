import { useParams, useRouter } from "next/navigation";
import React from "react";

function NoteTitleBar() {
  const router = useRouter();
  const { user } = useParams();
  return (
    <div className="font-rota text-[14px] text-[#8A8B90] font-[600] pl-[14px] flex justify-between items-center">
      <div>My note</div>
      <div
        className="mr-4 text-[24px] font-[300] text-black cursor-pointer"
        onClick={() => {
          router.push("/" + user);
        }}
      >
        +
      </div>
    </div>
  );
}

export default NoteTitleBar;
