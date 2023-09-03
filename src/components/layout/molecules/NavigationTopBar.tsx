import Image from "next/image";
import React from "react";
import Spacing from "../../common/Spacing";
import { SpacingDirection, cls } from "@/utils/style";
import LeftCloseButtonIcon from "../../icon/LeftCloseButtonIcon";

interface NavigationTopBarProps {
  onClose: () => void;
  userInfo: {
    name: string;
    imageUrl: string;
  };
}

function NavigationTopBar({ onClose, userInfo }: NavigationTopBarProps) {
  return (
    <div className={cls("h-[50px] px-3 bg-gray2", "flex items-center")}>
      <div className="w-[180px] flex">
        {userInfo.imageUrl !== "" ? (
          <Image
            src={userInfo.imageUrl}
            alt="user-profile"
            width={24}
            height={24}
            className="rounded-full border border-white"
          />
        ) : (
          <div className="w-6 h-6 bg-gray-300 rounded-full border border-white" />
        )}
        <Spacing direction={SpacingDirection.HORIZONTAL} size={8} />
        <div className="text-primary font-[14px]">{userInfo.name}의 노트</div>
      </div>
      <Spacing direction={SpacingDirection.HORIZONTAL} size={10} />
      <div
        onClick={onClose}
        data-testid="navigation-close-button"
        className="cursor-pointer"
      >
        <LeftCloseButtonIcon />
      </div>
    </div>
  );
}

export default NavigationTopBar;
