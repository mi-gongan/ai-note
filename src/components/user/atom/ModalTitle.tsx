import { cls } from "@/utils/style";
import React from "react";

function ModalTitle({ text }: { text: string }) {
  return (
    <div
      className={cls(
        "text-primary font-[800] pr-6",
        "md:text-[38px]",
        "sm:text-[32px]",
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
