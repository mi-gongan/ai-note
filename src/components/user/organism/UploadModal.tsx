import React, { useState } from "react";
import CustonModal from "../../common/CustonModal";
import { cls } from "@/utils/style";
import UploadStep from "../molecules/UploadStep";
import ModalCloseButton from "@/components/icon/ModalCloseButton";
import { useDispatch, useSelector } from "react-redux";
import { resetUpload, submitForm } from "@/redux/slice/upload";
import CategoryStep from "../molecules/CategoryStep";
import WidgeStep from "../molecules/WidgeStep";

enum Step {
  UPLOAD,
  CATEGORY,
  WIDGET,
}

function UploadModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const [step, setStep] = useState<Step>(Step.UPLOAD);
  const subitForm = useSelector(submitForm);
  const dispatch = useDispatch();

  const onClose = () => {
    setOpen(false);
    setStep(Step.UPLOAD);
    dispatch(resetUpload());
  };

  const onComplte = () => {
    console.log(subitForm?.get("file"));
    console.log(subitForm?.get("title"));
    console.log(subitForm?.get("category"));
    console.log(subitForm?.get("widget"));
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
          <ModalCloseButton onClick={onClose} />
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
