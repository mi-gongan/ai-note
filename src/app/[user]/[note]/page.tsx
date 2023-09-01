"use client";

import { useParams } from "next/navigation";
import React from "react";
import Header from "@/components/layout/Header";
import SessionCheck from "@/components/common/SessionCheck";
import NoteTemplate from "@/components/note/NoteTemplate";
import { RouterPath } from "@/utils/router";

function Note() {
  const { user, note } = useParams();
  return (
    <Header>
      <SessionCheck path={RouterPath.NOTE} username={user as string} />
      <NoteTemplate />
    </Header>
  );
}

export default Note;
