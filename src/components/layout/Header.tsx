"use client";

import React, { useEffect, useState } from "react";
import LeftNavigation from "./LeftNavigation";
import MenuIcon from "../icon/MenuIcon";
import { cls } from "@/utils/style";
import { useParams, useRouter } from "next/navigation";
import { NoteDB, NoteDataType } from "@/firebase/note";
import WidgetChooseModal from "./organism/WidgetEditModal";

function Header({ children }: { children?: React.ReactNode }) {
  const router = useRouter();
  const { user, note } = useParams();
  const [open, setOpen] = useState(false);
  const [noteData, setNoteData] = useState<NoteDataType>();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (!note) return;
    NoteDB.getNoteById(note as string)
      .then((data) => {
        setNoteData(data);
      })
      .catch(() => {
        router.push("/" + user);
      });
  }, [note, router, user]);

  return (
    <>
      <div className={cls("h-[52px] w-full", "flex items-center")}>
        <WidgetChooseModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
        />
        <div
          onClick={() => {
            setOpen(true);
          }}
          data-testid="navigation-open-button"
          className="ml-4 cursor-pointer"
        >
          <MenuIcon />
        </div>
        {note && (
          <div className="flex-1 flex justify-between mx-[20px]">
            <div className="text-[#8A8B90] text-[14px]">
              My note /{" "}
              {noteData ? (
                <>
                  {noteData.title} ({noteData.category})
                </>
              ) : (
                <>..</>
              )}
            </div>
            <div
              className="text-[#3D60FF] cursor-pointer"
              onClick={() => {
                setModalOpen(true);
              }}
            >
              + Widget
            </div>
          </div>
        )}
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
