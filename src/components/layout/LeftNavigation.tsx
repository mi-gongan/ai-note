"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import Spacing from "@/components/common/Spacing";
import { cls } from "@/utils/style";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { fetchNoteData, noteData } from "@/redux/slice/note";
import NavigationTopBar from "./molecules/NavigationTopBar";
import NoteList from "./molecules/NoteList";
import LogoutSection from "./molecules/LogoutSection";
import NoteTitleBar from "./molecules/NoteTitleBar";

interface LeftNavigationProps {
  open: boolean;
  onClose: () => void;
}

function LeftNavigation({ open, onClose }: LeftNavigationProps) {
  const router = useRouter();
  const { data: session } = useSession();
  const dispatch = useDispatch<any>();
  const data = useSelector(noteData);
  const [userInfo, setUserInfo] = useState({
    name: "--",
    imageUrl: "",
  });
  const [noteList, setNoteList] = useState<any[]>([]);

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

  useEffect(() => {
    if (data === null) return;
    setNoteList(data);
  }, [data]);

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
            <NavigationTopBar
              onClose={onClose}
              userInfo={{
                name: userInfo.name,
                imageUrl: userInfo.imageUrl,
              }}
            />
            <Spacing size={40} />
            <NoteTitleBar />
            <Spacing size={8} />
            <NoteList noteList={noteList} setNoteList={setNoteList} />
            <LogoutSection />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default LeftNavigation;
