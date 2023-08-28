"use client";

import React from "react";
import { signOut } from "next-auth/react";

function LogoutButton() {
  return (
    <div
      onClick={() => {
        signOut();
      }}
    >
      LogoutButton
    </div>
  );
}

export default LogoutButton;
