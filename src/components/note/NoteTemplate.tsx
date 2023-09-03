import { NoteDB, NoteDataType } from "@/firebase/note";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Spacing from "../common/Spacing";
import { cls } from "@/utils/style";
import AIChatBotModule from "./organism/AIChatBotModule";
import MemoModule from "./organism/MemoModule";
import NoteTitle from "./organism/NoteTitle";
import SummaryNoteModule from "./organism/SummaryNoteModule";

function NoteTemplate() {
  const router = useRouter();
  const { user, note } = useParams();
  const [noteData, setNoteData] = useState<NoteDataType>();

  useEffect(() => {
    NoteDB.getNoteById(note as string)
      .then((data) => {
        setNoteData(data);
      })
      .catch(() => {
        router.push("/" + user);
      });
  }, [note, router, user]);

  return (
    <div className="lg:px-[70px] px-[20px] py-[20px]">
      <NoteTitle title={noteData?.title} category={noteData?.category} />
      <Spacing size={36} />
      <div className="flex gap-[20px] lg:flex-row flex-col">
        <SummaryNoteModule summaryText={noteData?.summaryText} />
        <div className="lg:w-[calc(50%-10px)] w-[100%]">
          <AIChatBotModule />
          <Spacing size={20} />
          <MemoModule />
        </div>
      </div>
    </div>
  );
}

export default NoteTemplate;
