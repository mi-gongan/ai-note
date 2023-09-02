import React from "react";
import { cls } from "@/utils/style";
import { AnimatePresence, motion } from "framer-motion";

interface ModuleControlBarProps {
  title: string;
  isHovered?: boolean;
}

function ModuleControlBar({ title, isHovered }: ModuleControlBarProps) {
  return (
    <AnimatePresence>
      {isHovered && (
        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cls(
            "absolute top-0 left-[0px] h-[46px] w-full bg-[#F6F7FA] rounded-t-[20px] px-[20px]",
            "flex items-center justify-between"
          )}
        >
          <div>{title}</div>
          {/* <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M10.0003 1.66602C14.6027 1.66602 18.3337 5.39697 18.3337 9.99935C18.3337 14.6017 14.6027 18.3327 10.0003 18.3327C5.39795 18.3327 1.66699 14.6017 1.66699 9.99935C1.66699 5.39697 5.39795 1.66602 10.0003 1.66602ZM12.9422 7.05741L12.8722 6.99689C12.6547 6.83552 12.3562 6.83352 12.1367 6.99092L12.0584 7.05741L10.0003 9.11518L7.94227 7.05741L7.87217 6.99689C7.65468 6.83552 7.35617 6.83352 7.13668 6.99092L7.05838 7.05741L6.99787 7.12751C6.83649 7.345 6.8345 7.64351 6.99189 7.863L7.05838 7.94129L9.11616 9.99935L7.05838 12.0574L6.99787 12.1275C6.83649 12.345 6.8345 12.6435 6.99189 12.863L7.05838 12.9413L7.12848 13.0018C7.34598 13.1632 7.64448 13.1652 7.86398 13.0078L7.94227 12.9413L10.0003 10.8835L12.0584 12.9413L12.1285 13.0018C12.346 13.1632 12.6445 13.1652 12.864 13.0078L12.9422 12.9413L13.0027 12.8712C13.1642 12.6537 13.1662 12.3552 13.0087 12.1357L12.9422 12.0574L10.8845 9.99935L12.9422 7.94129L13.0027 7.87119C13.1642 7.6537 13.1662 7.35519 13.0087 7.1357L12.9422 7.05741Z"
                fill="#C1C2C8"
              />
            </svg>
          </div> */}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ModuleControlBar;
