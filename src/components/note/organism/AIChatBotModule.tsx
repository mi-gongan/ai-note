import React from "react";
import ModuleControlBar from "../molecules/ModuleControlBar";
import { cls } from "@/utils/style";
import SmallRobot from "../../icon/SmallRobot";

function AIChatBotModule() {
  return (
    <div
      className={cls(
        "bg-white rounded-[20px] shadow-[0_2px_12px_0px_rgba(0,0,0,0.09)]",
        "w-[100%] h-[290px] relative"
      )}
    >
      <ModuleControlBar title="🤖 AI chat bot" />
      <div className="px-[20px]">
        <div className="flex gap-[10px] pt-6">
          <SmallRobot />
          <div className="bg-[#E0E5FF] rounded-[12px] w-[240px] h-[70px] flex items-center px-[20px] font-rota text-[16px] text-primary leading-[20px]">
            Sorry, This feature is currently not supported
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIChatBotModule;
