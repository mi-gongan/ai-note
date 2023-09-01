"use client";

import React from "react";
import CustomButton from "../../common/CustomButton";

interface UploadButtonProps {
  setOpen: (open: boolean) => void;
}

function UploadButton({ setOpen }: UploadButtonProps) {
  return (
    <CustomButton
      text="Upload"
      handleClick={() => {
        setOpen(true);
      }}
    />
  );
}

export default UploadButton;
