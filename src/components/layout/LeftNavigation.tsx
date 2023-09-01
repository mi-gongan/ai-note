"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { AnimatePresence, Reorder } from "framer-motion";
import { motion } from "framer-motion";
import LeftCloseButtonIcon from "@/components/icon/LeftCloseButtonIcon";
import Spacing from "@/components/common/Spacing";
import { SpacingDirection, cls } from "@/utils/style";
import Image from "next/image";

interface LeftNavigationProps {
  open: boolean;
  onClose: () => void;
}

function LeftNavigation({ open, onClose }: LeftNavigationProps) {
  const { data: session } = useSession();
  const [userInfo, setUserInfo] = useState({
    name: "--",
    imageUrl: "",
  });

  useEffect(() => {
    if (session && session.user && session.user.name && session.user.image) {
      setUserInfo({
        name: session.user.name,
        imageUrl: session.user.image,
      });
    }
  }, [session]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className={cls(
              "w-[240px] h-[100vh] bg-gray1",
              "md:relative md:top-[-52px]",
              "absolute top-0 left-0 z-10"
            )}
            initial={{
              opacity: 0,
              x: -200,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: -200,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            <div className={cls("h-[50px] px-3 bg-gray2", "flex items-center")}>
              <div className="w-[180px] flex">
                {userInfo.imageUrl !== "" ? (
                  <Image
                    src={userInfo.imageUrl}
                    alt="user profile"
                    width={24}
                    height={24}
                    className="rounded-full border border-white"
                  />
                ) : (
                  <div className="w-6 h-6 bg-gray-300 rounded-full border border-white" />
                )}
                <Spacing direction={SpacingDirection.HORIZONTAL} size={8} />
                <div className="text-primary font-[14px]">
                  {userInfo.name}의 노트
                </div>
              </div>
              <Spacing direction={SpacingDirection.HORIZONTAL} size={10} />
              <div
                onClick={onClose}
                data-testid="navigation-close-button"
                className="cursor-pointer"
              >
                <LeftCloseButtonIcon />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default LeftNavigation;
