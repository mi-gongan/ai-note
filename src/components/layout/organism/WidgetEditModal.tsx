import CustonModal from "@/components/common/CustonModal";
import CloseButton from "@/components/icon/CloseButton";
import WidgetStep from "@/components/user/molecules/WidgeStep";
import { NoteDB } from "@/firebase/note";
import { fetchNoteData } from "@/redux/slice/note";
import { resetUpload, selectWidget } from "@/redux/slice/upload";
import { cls } from "@/utils/style";
import { useParams } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

interface WidgetEditModalProps {
  open: boolean;
  onClose: () => void;
}

function WidgetEditModal({ open, onClose }: WidgetEditModalProps) {
  const { user, note: noteId } = useParams();
  const selectWidgetList = useSelector(selectWidget);
  // const dispath = useDispatch<any>();

  const updateWidget = async () => {
    if (!noteId) return;
    await NoteDB.updateWidget(noteId as string, selectWidgetList);
    // TODO: 새로고침으로 처리 x
    window.location.reload();
  };

  return (
    <CustonModal
      open={open}
      width="md:w-[900px] w-[90vw] max-w-[90vw]"
      borderRadius="rounded-[20px]"
      onClose={onClose}
    >
      <div className={cls("font-rota pt-[18px] pb-[33px] pl-[40px] pr-[14px]")}>
        <div className="flex justify-end">
          <CloseButton onClick={onClose} />
        </div>
        <WidgetStep onPrev={onClose} onNext={updateWidget} />
      </div>
    </CustonModal>
  );
}

export default WidgetEditModal;
