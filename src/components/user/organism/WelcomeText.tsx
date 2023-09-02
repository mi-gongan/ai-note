import { cls } from "@/utils/style";
import React from "react";

function WelcomeText() {
  return (
    <div className={cls("px-12", "xl:text-[34px] text-[24px]", "font-bold")}>
      Welcome!
      <br />
      Please upload the recording file to create your note
    </div>
  );
}

export default WelcomeText;
