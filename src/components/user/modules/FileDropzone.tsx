"use client";

import { cls } from "@/utils/style";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import UploadIcon from "../../icon/UploadIcon";

interface FileDropzoneProps {
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
}

function FileDropzone({ setFile }: FileDropzoneProps) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setFile(acceptedFiles[0]);
    },
    [setFile]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className={cls(
        "w-full h-full bg-[#EFF4FF]",
        "border border-dashed border-[#9A9B9C] rounded-[30px]",
        "flex justify-center items-center"
      )}
    >
      <input {...getInputProps()} />
      <div className="flex justify-center items-center flex-col gap-3">
        <UploadIcon />
        <div className="text-[#9A9B9C] font-[600] md:text-[18px] text-[14px]">
          Add file or drop your files here
        </div>
      </div>
    </div>
  );
}

export default FileDropzone;
