import React from "react";

function ModalSubText({ text }: { text: string }) {
  return (
    <div className="text-[#9A9B9C] font-[600] md:text-[18px] text-[14px]">
      {text}
    </div>
  );
}

export default ModalSubText;
