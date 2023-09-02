"use client";

import React, { useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import SessionCheck from "@/components/common/SessionCheck";
import { RouterPath } from "@/utils/router";
import GoogleLogo from "@/components/icon/GoogleLogo";
import { motion } from "framer-motion";
import Image from "next/image";
import Spacing from "@/components/common/Spacing";

function Login() {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (session && router) {
      router.push("/");
    }
  }, [session, router]);

  return (
    <>
      <SessionCheck path={RouterPath.LOGIN} />
      <div className="w-full h-screen flex justify-center items-center flex-col gap-[20px] min-h-[600px]">
        <div className="text-primary text-[60px] font-[600]">Login</div>
        <Spacing size={20} />
        <motion.div
          animate={{
            y: [0, -50],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5,
          }}
        >
          <Image
            src={"/imgs/robot-asset.png"}
            width={175}
            height={230}
            alt="sd"
          />
        </motion.div>
        <div
          onClick={() => signIn()}
          className="bg-white border border-[#DFE3E9] flex px-[77px] py-[12px] rounded-[9px] cursor-pointer"
        >
          <GoogleLogo />
          <div className="text-primary text-[18px] font-[500]">
            Continue with Google
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
