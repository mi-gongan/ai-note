import React from "react";
import Spacing from "../../common/Spacing";
import FileDropzone from "../atom/FileDropzone";
import { cls } from "@/utils/style";
import StepControl from "./StepControl";
import ModalTitle from "../atom/ModalTitle";
import ModalSubText from "../atom/ModalSubText";
import FileInfo from "../atom/FileInfo";
import { useSelector } from "react-redux";
import { selectFile } from "@/redux/slice/upload";

interface UploadStepProps {
  onClose: () => void;
  onNext: () => void;
}

function UploadStep({ onClose, onNext }: UploadStepProps) {
  const file = useSelector(selectFile);
  return (
    <>
      <ModalTitle text="Please upload your recording file" />
      <Spacing size={10} />
      <ModalSubText text="File should be MP3, MP4" />
      <div className="md:h-[30px] h-[20px]" />
      <div
        className={cls(
          "w-[820px] max-w-[calc(100%-26px)]",
          file === null ? "h-[360px]" : "h-[180px]"
        )}
      >
        <FileDropzone />
      </div>
      {file && <FileInfo file={file} />}
      <div className="h-[30px]" />
      <StepControl
        onNext={onNext}
        onPrev={onClose}
        disabled={file === null}
        isFirst={true}
      />
    </>
  );
}

export default UploadStep;
