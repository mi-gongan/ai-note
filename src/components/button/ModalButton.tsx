"use client";

import React, { useState } from "react";
import CustomButton from "../common/CustomButton";
import CustonModal from "../modal/CustonModal";
import Spacing from "../common/Spacing";
import FileDropzone from "../FileDropzone";
import { cls } from "@/utils/style";
import ModalCloseButton from "../icon/ModalCloseButton";
import { getByteSize } from "@/utils/number";
import { Icon } from "@iconify/react";

function ModalButton() {
  const [file, setFile] = useState<File | null>(null);
  const [open, setOpen] = useState(false);
  return (
    <>
      <CustonModal
        open={open}
        width="md:w-[900px] w-[90vw] max-w-[90vw]"
        borderRadius="rounded-[20px]"
        onClose={() => {
          setOpen(false);
        }}
      >
        <div
          className={cls("font-rota pt-[18px] pb-[33px] pl-[40px] pr-[14px]")}
        >
          <div className="flex justify-end">
            <ModalCloseButton />
          </div>
          <div
            className={cls(
              "text-primary font-[800] pr-6",
              "md:text-[38px]",
              "sm:text-[32px]",
              "text-[24px]"
            )}
          >
            Please upload your recording file
          </div>
          <Spacing size={12} />
          <div className="text-[#9A9B9C] font-[600] md:text-[18px] text-[14px]">
            File should be MP3, MP4
          </div>
          <div className="md:h-[40px] h-[20px]" />
          <div
            className={cls(
              "w-[820px] max-w-[calc(100%-26px)]",
              file === null ? "h-[420px]" : "h-[200px]"
            )}
          >
            <FileDropzone setFile={setFile} />
          </div>
          {file && (
            <div>
              <div className="md:h-[40px] h-[20px]" />
              <div className="text-primary font-[700] md:text-[28px] text-[24px]">
                My files
              </div>
              <div className="flex items-center md:mr-[50px] mr-[20px] ">
                <div className="flex-1 text-primary font-[400] md:text-[20px] text-[14px]">
                  {file.name.length > 20
                    ? file.name.slice(0, 20) + "..."
                    : file.name}
                </div>
                <div className="flex gap-2 items-center">
                  <div className="text-[#9A9B9C] md:text-[15px] text-[12px]">
                    {getByteSize(file.size)}
                  </div>
                  <div
                    onClick={() => {
                      setFile(null);
                    }}
                  >
                    <Icon
                      icon="ic:round-close"
                      color="#b6b6b6"
                      width="20"
                      height="20"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="md:h-[100px] h-[60px]" />
          <div className="flex gap-8 items-center justify-end mr-[20px]">
            <div
              className="text-[#B5B5B5] text-[22px] font-[700] p-2 cursor-pointer"
              onClick={() => {
                setOpen(false);
              }}
            >
              Cancel
            </div>
            <div
              className={cls(
                "w-[114px] h-[57px] rounded-[50px] bg-primary p-2",
                "flex justify-center items-center",
                "text-[#fff] text-[22px] font-[700]",
                "cursor-pointer"
              )}
              onClick={() => {
                setOpen(false);
              }}
            >
              Next
            </div>
          </div>
        </div>
      </CustonModal>
      <CustomButton
        text="Upload"
        handleClick={() => {
          setOpen(true);
        }}
      />
    </>
  );
}

export default ModalButton;
