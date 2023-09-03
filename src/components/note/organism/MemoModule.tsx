import React, { useRef, useState } from "react";
import ModuleControlBar from "../molecules/ModuleControlBar";
import NoteLine from "../atom/NoteLine";
import { cls } from "@/utils/style";

function MemoModule() {
  const textRef = useRef(null);
  const [text, setText] = useState("");
  return (
    <div
      className={cls(
        "bg-white rounded-[20px] shadow-[0_2px_12px_0px_rgba(0,0,0,0.09)]",
        "w-[100%] h-[390px] relative"
      )}
    >
      <ModuleControlBar title="🗒️ Memo" />
      <div className="px-[20px] h-[calc(100%-66px)]">
        <NoteLine />
        <textarea
          onChange={(e) => {
            if (e.target.scrollHeight > 324) {
              e.target.scrollTop = 0;
              e.target.value = text;
            } else {
              setText(e.target.value);
            }
          }}
          value={text}
          autoFocus
          ref={textRef}
          className="w-full h-[calc(100%)] focus:outline-none active:outline-none leading-[32px]"
          placeholder="Write any additional notes or details here."
        />
      </div>
    </div>
  );
}

export default MemoModule;
