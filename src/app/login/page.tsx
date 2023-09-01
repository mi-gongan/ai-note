"use client";

import React, { useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import SessionCheck from "@/components/common/SessionCheck";
import { RouterPath } from "@/utils/router";

function Login() {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (session && router) {
      router.push("/");
    }
  }, [session, router]);

  return (
    <>
      <SessionCheck path={RouterPath.LOGIN} />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}

export default Login;
