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
import { delay } from "@/utils/time";

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

    let summaryText = "";
    if (file?.type === "test") {
      await delay(5000);
      summaryText =
        "**예속 논쟁**은 정치의 주도권을 놓고 싸움이었고, **서인과 사대부는 왕과 같다는 이기일원론을 주장**했고, **남인은 왕과 다르다는 이기이원론을 주장**했다. 이기일원론과 이기이원론은 이기론으로 합쳐져 본질과 형태를 말하는 것이다. 효종의 경우, 이는 태어날 때부터 정해진 둘째 아들이고, 기는 현재의 왕이 되는 것이다. **서인은 이와 기가 같다고 주장하여 사대부나 평민들의 예의에 따라 1년 동안 상복을 입어야 한다고 주장**했고, **남인은 이와 기가 다르다고 주장하여 3년 동안 상복을 입어야 한다고 말**했다. 이들은 효종의 정통성에 대해 계속 이야기했다. 조선에서는 서인들이 주도권을 잡고 있었기 때문에 이를 놓치고 싶지 않았고, 왕과 사대부가 같다고 말해야 자신들의 힘이 강해지기 때문에 1차 때는 1년, 2차 때는 9개월을 주장했다. 남인은 소수만 정권에 참여했으며 항상 중요한 위치에 있었다.";
    } else {
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
              "Access-Control-Allow-Origin": "*",
            },
          }
        )
      ).data;
      summaryText = resonseData.summary_text;
    }

    if (summaryText === "") return;

    const noteId = generateRandomString(25);
    await NoteDB.setNote(session.user.email, noteId, summaryText, submitData);
    dispatch(fetchNoteData(session.user.email));
    dispatch(resetUpload());
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
