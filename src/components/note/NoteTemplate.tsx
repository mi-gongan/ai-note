import { NoteClass, NoteDataType } from "@/firebase/note";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import Spacing from "../common/Spacing";
import { cls } from "@/utils/style";
import SmallRobot from "../icon/SmallRobot";
import ModuleControlBar from "./ModuleControlBar";

function NoteTemplate() {
  const textRef = useRef(null);
  const router = useRouter();
  const { user, note } = useParams();
  const [noteData, setNoteData] = useState<NoteDataType>();
  const [text, setText] = useState("");
  const [hover, setHover] = useState({
    chat: false,
    memo: false,
  });

  useEffect(() => {
    NoteClass.getNoteById(note as string)
      .then((data) => {
        setNoteData(data);
      })
      .catch(() => {
        router.push("/" + user);
      });
  }, [note, router, user]);

  return (
    <div className="lg:px-[70px] px-[20px] py-[20px]">
      <div className="text-primary text-[32px] font-[700] h-[40px]">
        {noteData !== undefined ? (
          <>
            {noteData?.title} ( {noteData?.category} )
          </>
        ) : (
          <>...</>
        )}
      </div>
      <Spacing size={24} />
      <div className="flex gap-[20px] lg:flex-row flex-col">
        <div
          className={cls(
            "bg-white rounded-[20px] px-[20px] py-[24px] shadow-[0_2px_12px_0px_rgba(0,0,0,0.09)]",
            "lg:w-[calc(50%-10px)] w-[100%] lg:h-[700px]",
            "font-rota text-[17px] font-[500] text-primary leading-[20px]"
          )}
        >
          {noteData?.summaryText}
        </div>
        <div className="lg:w-[calc(50%-10px)] w-[100%]">
          <div
            className={cls(
              "bg-white rounded-[20px] px-[20px] py-[24px] shadow-[0_2px_12px_0px_rgba(0,0,0,0.09)]",
              "w-[100%] h-[290px] relative"
            )}
            onMouseEnter={() => {
              setHover({ ...hover, chat: true });
            }}
            onMouseLeave={() => {
              setHover({ ...hover, chat: false });
            }}
          >
            <ModuleControlBar title="🤖 AI chat bot" isHovered={hover.chat} />
            <div className="flex gap-[10px] pt-6">
              <SmallRobot />
              <div className="bg-[#E0E5FF] rounded-[12px] w-[240px] h-[70px] flex items-center px-[20px] font-rota text-[16px] text-primary leading-[20px]">
                Sorry, This feature is currently not supported
              </div>
            </div>
          </div>
          <Spacing size={20} />
          <div
            className={cls(
              "bg-white rounded-[20px] px-[20px] py-[24px] shadow-[0_2px_12px_0px_rgba(0,0,0,0.09)]",
              "w-[100%] h-[390px] relative"
            )}
            onMouseEnter={() => {
              setHover({ ...hover, memo: true });
            }}
            onMouseLeave={() => {
              setHover({ ...hover, memo: false });
            }}
          >
            <ModuleControlBar title="🗒️ Memo" isHovered={hover.memo} />
            <div className="absolute top-[56px] w-[calc(100%-40px)] h-[2px] bg-primary opacity-[0.2] z-2"></div>
            <div className="absolute top-[88px] w-[calc(100%-40px)] h-[2px] bg-primary opacity-[0.2] z-2"></div>
            <div className="absolute top-[120px] w-[calc(100%-40px)] h-[2px] bg-primary opacity-[0.2] z-2"></div>
            <div className="absolute top-[152px] w-[calc(100%-40px)] h-[2px] bg-primary opacity-[0.2] z-2"></div>
            <div className="absolute top-[184px] w-[calc(100%-40px)] h-[2px] bg-primary opacity-[0.2] z-2"></div>
            <div className="absolute top-[216px] w-[calc(100%-40px)] h-[2px] bg-primary opacity-[0.2] z-2"></div>
            <div className="absolute top-[248px] w-[calc(100%-40px)] h-[2px] bg-primary opacity-[0.2] z-2"></div>
            <div className="absolute top-[280px] w-[calc(100%-40px)] h-[2px] bg-primary opacity-[0.2] z-2"></div>
            <div className="absolute top-[312px] w-[calc(100%-40px)] h-[2px] bg-primary opacity-[0.2] z-2"></div>
            <div className="absolute top-[344px] w-[calc(100%-40px)] h-[2px] bg-primary opacity-[0.2] z-2"></div>
            <textarea
              onChange={(e) => setText(e.target.value)}
              value={text}
              autoFocus
              ref={textRef}
              className="w-full h-full focus:outline-none active:outline-none leading-[32px]"
              placeholder="Write any additional notes or details here."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoteTemplate;
