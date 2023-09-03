import LogoutIcon from "@/components/icon/LogoutIcon";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

function LogoutSection() {
  const router = useRouter();
  return (
    <div
      className="absolute bottom-[20px] left-[20px] flex items-center gap-2 cursor-pointer"
      onClick={() => {
        signOut();
        router.push("/login");
      }}
    >
      <LogoutIcon />
      <div className="font-rota text-[14px] text-[#8A8B90] font-[500]">
        Logout
      </div>
    </div>
  );
}

export default LogoutSection;
