"use client";

import { useParams } from "next/navigation";
import React from "react";
import Header from "@/components/layout/Header";
import SessionCheck from "@/components/common/SessionCheck";
import UserTemplate from "@/components/user/UserTemplate";
import { RouterPath } from "@/utils/router";

function Note() {
  const { user } = useParams();

  return (
    <Header>
      <SessionCheck path={RouterPath.NOTE} username={user as string} />
      <UserTemplate />
    </Header>
  );
}

export default Note;
