"use client";

import { cls } from "@/utils/style";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import UploadIcon from "../../icon/UploadIcon";
import { useDispatch } from "react-redux";
import { selectFile, uploadFile, uploadTestFile } from "@/redux/slice/upload";
import { useSelector } from "react-redux";

function FileDropzone() {
  const file = useSelector(selectFile);
  const dispatch = useDispatch();

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const selectedFile = acceptedFiles[0];
      if (acceptedFiles) {
        const allowedExtensions = [".mp3", ".mp4"];
        const fileExtension = selectedFile.name.slice(
          ((selectedFile.name.lastIndexOf(".") - 1) >>> 0) + 2
        );
        if (allowedExtensions.includes("." + fileExtension)) {
          dispatch(uploadFile(acceptedFiles[0]));
        } else {
          alert(
            "올바른 파일 확장자가 아닙니다. 허용된 확장자는 .mp3 및 .mp4 입니다."
          );
        }
      }
    },
    [dispatch]
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
      <input {...getInputProps()} accept=".mp3,.mp4" />
      <div className="flex justify-center items-center flex-col gap-3">
        <UploadIcon />
        <div className="text-[#9A9B9C] font-[600] md:text-[18px] text-[14px] flex flex-col gap-4 relative">
          Add file or drop your files here
          {!file && (
            <div
              className="flex justify-center bg-primary rounded-md w-[90%] left-[50%] -translate-x-1/2 text-white absolute z-20 top-16 py-[8px]"
              onClick={(e) => {
                e.stopPropagation();
                dispatch(uploadTestFile());
              }}
            >
              Test file 사용하기
            </div>
          )}
        </div>
        {!file && <div className="h-16"></div>}
      </div>
    </div>
  );
}

export default FileDropzone;
