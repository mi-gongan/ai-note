"use client";

import React, { useState } from "react";
import LeftNavigation from "./LeftNavigation";
import MenuIcon from "../icon/MenuIcon";
import { cls } from "@/utils/style";
import SessionCheck from "../common/SessionCheck";

function Header({ children }: { children?: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={cls("h-[52px] w-full", "flex items-center")}>
        <div
          onClick={() => {
            setOpen(true);
          }}
          data-testid="navigation-open-button"
          className="ml-4 cursor-pointer"
        >
          <MenuIcon />
        </div>
      </div>
      <div className="flex">
        <LeftNavigation
          open={open}
          onClose={() => {
            setOpen(false);
          }}
        />
        <div className="flex-1">{children}</div>
      </div>
    </>
  );
}

export default Header;
