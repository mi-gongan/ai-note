"use client";

import React, { useEffect, useState } from "react";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";
import LeftNavigation from "./LeftNavigation";
import MenuIcon from "../icon/MenuIcon";
import { cls } from "@/utils/style";

interface RedirectProps {
  sessionInfo:
    | {
        redirect: {
          destination: string;
          permanent: boolean;
        };
        props?: undefined;
      }
    | {
        props: {
          session: Session;
        };
        redirect?: undefined;
      };
  children: React.ReactNode;
}

function Header({ sessionInfo, children }: RedirectProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!router) return;
    if (
      sessionInfo &&
      sessionInfo.redirect &&
      sessionInfo.redirect.destination
    ) {
      router.push(sessionInfo.redirect.destination);
    }
  }, [sessionInfo, router]);

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
