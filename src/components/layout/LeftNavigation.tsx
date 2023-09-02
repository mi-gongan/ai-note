"use client";

import React, { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import LeftCloseButtonIcon from "@/components/icon/LeftCloseButtonIcon";
import Spacing from "@/components/common/Spacing";
import { SpacingDirection, cls } from "@/utils/style";
import Image from "next/image";
import LogoutIcon from "../icon/LogoutIcon";
import { useParams, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { fetchNoteData, noteData } from "@/redux/slice/note";
import RightArrowIcon from "../icon/RightArrowIcon";

interface LeftNavigationProps {
  open: boolean;
  onClose: () => void;
}

function LeftNavigation({ open, onClose }: LeftNavigationProps) {
  const router = useRouter();
  const { user, note: noteIdParam } = useParams();
  const { data: session } = useSession();
  const [userInfo, setUserInfo] = useState({
    name: "--",
    imageUrl: "",
  });
  const dispatch = useDispatch<any>();
  const data = useSelector(noteData);

  useEffect(() => {
    if (session && session.user && session.user.name && session.user.image) {
      setUserInfo({
        name: session.user.name,
        imageUrl: session.user.image,
      });
    }
  }, [session]);

  useEffect(() => {
    if (!session || !session.user?.email) return;
    if (data === null) {
      dispatch(fetchNoteData(session.user.email as string));
    }
  }, [dispatch, session, session?.user?.email, data]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className={cls(
              "w-[240px] h-[100vh] bg-gray1",
              "relative top-0 left-0"
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
          />
          <motion.div
            className={cls(
              "w-[240px] h-[100vh] bg-gray1",
              "fixed top-0 left-0 z-10"
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
            <Spacing size={40} />
            <div className="font-rota text-[14px] text-[#8A8B90] font-[600] pl-[14px] flex justify-between items-center">
              <div>My note</div>
              <div
                className="mr-4 text-[24px] font-[300] text-black cursor-pointer"
                onClick={() => {
                  router.push("/" + session?.user?.name);
                }}
              >
                +
              </div>
            </div>
            <Spacing size={8} />
            <div className="flex flex-col">
              {data?.map((note) => (
                <motion.div
                  key={note.noteId}
                  className={cls(
                    "font-rota text-[18px] text-primary font-[500] pl-[14px] py-2 cursor-pointer flex items-center",
                    note.noteId === noteIdParam?.toString()
                      ? "bg-[#DADFE7]"
                      : "",
                    "hover:bg-[#DADFE7]"
                  )}
                  onClick={() => {
                    router.push("/" + userInfo.name + "/" + note.noteId);
                  }}
                >
                  <RightArrowIcon />
                  <motion.div>{note.title}</motion.div>
                </motion.div>
              ))}
            </div>
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
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default LeftNavigation;
