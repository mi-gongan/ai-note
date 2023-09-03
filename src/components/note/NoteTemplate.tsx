import { NoteDB, NoteDataType } from "@/firebase/note";
import { useParams, useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
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

  const refetchNoteData = useCallback(() => {
    NoteDB.getNoteById(note as string)
      .then((data) => {
        setNoteData(data);
      })
      .catch(() => {
        router.push("/" + user);
      });
  }, [router, user, note]);

  useEffect(() => {
    refetchNoteData();
  }, [refetchNoteData]);

  const deleteWidget = (widgetId: number) => {
    if (!noteData || !note) return;
    NoteDB.updateWidget(
      note as string,
      noteData.widget.filter((id) => id !== widgetId)
    )
      .then(() => {
        refetchNoteData();
      })
      .catch(() => {
        router.push("/" + user);
      });
  };

  return (
    <div className="lg:px-[70px] px-[40px] py-[20px]">
      <NoteTitle title={noteData?.title} category={noteData?.category} />
      <Spacing size={36} />
      <div className="flex gap-[20px] lg:flex-row flex-col">
        <SummaryNoteModule summaryText={noteData?.summaryText} />
        <div className="lg:w-[calc(50%-10px)] w-[100%]">
          {noteData?.widget.includes(1) && (
            <>
              <AIChatBotModule
                deleteChatbotWidget={() => {
                  deleteWidget(1);
                }}
              />
              <Spacing size={20} />
            </>
          )}
          {noteData?.widget.includes(2) && (
            <MemoModule
              deleteMemeoWidget={() => {
                deleteWidget(2);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default NoteTemplate;
