import { cls } from "@/utils/style";
import React from "react";

function SummaryNoteModule({ summaryText }: { summaryText?: string }) {
  return (
    <div
      className={cls(
        "bg-white rounded-[20px] px-[20px] py-[24px] shadow-[0_2px_12px_0px_rgba(0,0,0,0.09)]",
        "lg:w-[calc(50%-10px)] w-[100%] lg:h-[700px]",
        "font-rota text-[17px] font-[500] text-primary leading-[20px]"
      )}
    >
      {summaryText}
    </div>
  );
}

export default SummaryNoteModule;
