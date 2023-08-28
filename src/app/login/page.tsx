"use client";

import React, { useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

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
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}

export default Login;
