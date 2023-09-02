import { cls } from "@/utils/style";
import React from "react";

function ModalTitle({ text }: { text: string }) {
  return (
    <div
      className={cls(
        "text-primary font-[700] pr-6",
        "md:text-[30px] leading-[30px]",
        "sm:text-[30px]",
        "text-[24px]"
      )}
    >
      {text.split("\\n").map((line, index) => {
        return (
          <div key={index}>
            {line}
            <br />
          </div>
        );
      })}
    </div>
  );
}

export default ModalTitle;
