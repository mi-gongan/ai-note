"use client";

import { cls } from "@/utils/style";
import React from "react";
import { motion } from "framer-motion";

interface CustomButtonProps {
  text: string;
  handleClick: () => void;
}

function CustomButton({ text, handleClick }: CustomButtonProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.04,
      }}
      whileTap={{
        scale: 0.96,
      }}
      onClick={handleClick}
      className={cls(
        "flex justify-center items-center",
        "bg-primary md:w-[224px] md:h-[70px] md:rounded-[64px]",
        "w-[180px] h-[52px] rounded-[40px]",
        "md:text-[30px]",
        "text-[20px]",
        "text-white",
        "cursor-pointer"
      )}
    >
      {text}
    </motion.div>
  );
}

export default CustomButton;
