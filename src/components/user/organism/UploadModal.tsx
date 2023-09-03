import React, { useState } from "react";
import CustonModal from "../../common/CustonModal";
import { cls } from "@/utils/style";
import UploadStep from "../molecules/UploadStep";
import CloseButton from "@/components/icon/CloseButton";
import { useDispatch, useSelector } from "react-redux";
import { resetUpload, selectFile, submitForm } from "@/redux/slice/upload";
import CategoryStep from "../molecules/CategoryStep";
import WidgeStep from "../molecules/WidgeStep";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import axios from "axios";
import { NoteDB } from "@/firebase/note";
import { generateRandomString } from "@/utils/hash";
import { fetchNoteData } from "@/redux/slice/note";
import LoadingScreen from "@/components/common/LoadingScreen";

enum Step {
  UPLOAD,
  CATEGORY,
  WIDGET,
}

function UploadModal({
  open,
  closeModal,
}: {
  open: boolean;
  closeModal: () => void;
}) {
  const router = useRouter();

  const { data: session } = useSession();
  const [step, setStep] = useState<Step>(Step.UPLOAD);
  const dispatch = useDispatch<any>();
  const file = useSelector(selectFile);
  const submitData = useSelector(submitForm);
  const [loading, setLoading] = useState(false);

  const onClose = () => {
    closeModal();
    setStep(Step.UPLOAD);
    dispatch(resetUpload());
  };

  const onComplte = async () => {
    if (!session || !session.user || !session.user.name || !session.user.email)
      return;
    setLoading(true);
    const resonseData = (
      await axios.post<{
        summary_text: string;
      }>(
        process.env.NEXT_PUBLIC_SERVER_URL + "/audio",
        {
          audio_file: file,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
    ).data;
    const noteId = generateRandomString(25);
    await NoteDB.setNote(
      session.user.email,
      noteId,
      resonseData.summary_text,
      submitData
    );
    dispatch(fetchNoteData(session.user.email));
    router.push("/" + encodeURIComponent(session.user.name) + "/" + noteId);
  };

  return (
    <CustonModal
      open={open}
      width="md:w-[900px] w-[90vw] max-w-[90vw]"
      borderRadius="rounded-[20px]"
      onClose={onClose}
    >
      {loading && <LoadingScreen />}
      <div className={cls("font-rota pt-[18px] pb-[33px] pl-[40px] pr-[14px]")}>
        <div className="flex justify-end">
          <CloseButton onClick={onClose} />
        </div>
        {step === Step.UPLOAD && (
          <UploadStep onClose={onClose} onNext={() => setStep(Step.CATEGORY)} />
        )}
        {step === Step.CATEGORY && (
          <CategoryStep
            onPrev={() => setStep(Step.UPLOAD)}
            onNext={() => setStep(Step.WIDGET)}
          />
        )}
        {step === Step.WIDGET && (
          <WidgeStep onPrev={() => setStep(Step.CATEGORY)} onNext={onComplte} />
        )}
      </div>
    </CustonModal>
  );
}

export default UploadModal;
