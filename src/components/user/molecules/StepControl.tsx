import { cls } from "@/utils/style";
import React from "react";

function StepControl({
  onPrev,
  onNext,
  disabled,
  isFirst = false,
  isLast = false,
}: {
  onPrev: () => void;
  onNext: () => void;
  disabled: boolean;
  isFirst?: boolean;
  isLast?: boolean;
}) {
  return (
    <div className="flex gap-8 items-center justify-end mr-[20px]">
      <div
        className="text-[#B5B5B5] text-[22px] font-[700] p-2 cursor-pointer"
        onClick={() => {
          onPrev();
        }}
      >
        {isFirst ? "Cancel" : "Back"}
      </div>
      <div
        className={cls(
          "w-[114px] h-[57px] rounded-[50px] p-2",
          disabled ? "bg-[#C1C2C8]" : "bg-primary",
          "flex justify-center items-center",
          "text-[#fff] text-[22px] font-[700]",
          "cursor-pointer"
        )}
        onClick={() => {
          if (disabled) return;
          onNext();
        }}
      >
        {isLast ? "Done" : "Next"}
      </div>
    </div>
  );
}

export default StepControl;
