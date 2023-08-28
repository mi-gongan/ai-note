import { cls } from "@/utils/style";
import React from "react";

interface CustomButtonProps {
  text: string;
}

function CustomButton({ text }: CustomButtonProps) {
  return (
    <div
      className={cls(
        "bg-primary w-[240px] h-[77px] rounded-[64px]",
        "flex justify-center items-center",
        "text-white text-[30px]",
        "cursor-pointer"
      )}
    >
      {text}
    </div>
  );
}

export default CustomButton;
