"use client";

import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { RouterPath } from "@/utils/router";

interface SessionCheckProps {
  path: RouterPath;
  username?: string;
}

function SessionCheck({ path = RouterPath.HOME, username }: SessionCheckProps) {
  const router = useRouter();
  const { data: session, update, status } = useSession();

  useEffect(() => {
    if (!router) return;

    if (!session) {
      if (path === RouterPath.LOGIN) return;
      router.push("/login");
      return;
    }

    if (status === "authenticated" && session.user && session.user.name) {
      // session valid
      if (path === RouterPath.LOGIN || path === RouterPath.HOME) {
        router.push("/" + session.user.name);
      } else if (path === RouterPath.NOTE) {
        if (username && session.user.name !== username) {
          // session valid but username is incorrect
          router.push("/" + session.user.name);
        }
      }
    } else {
      // session expired
      update();
    }
  }, [session, router, status, update, path, username]);

  return <></>;
}

export default SessionCheck;
