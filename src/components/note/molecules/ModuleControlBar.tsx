import React from "react";
import { cls } from "@/utils/style";
import { AnimatePresence, motion } from "framer-motion";

interface ModuleControlBarProps {
  title: string;
}

function ModuleControlBar({ title }: ModuleControlBarProps) {
  return (
    <div
      className={cls(
        "h-[46px] w-full bg-[#F6F7FA] rounded-t-[20px] px-[20px]",
        "flex items-center justify-between"
      )}
    >
      <div>{title}</div>
    </div>
  );
}

export default ModuleControlBar;
