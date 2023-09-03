"use client";

import React from "react";
import CustomButton from "../../common/CustomButton";

interface UploadButtonProps {
  openModal: () => void;
}

function UploadButton({ openModal }: UploadButtonProps) {
  return <CustomButton text="Upload" handleClick={openModal} />;
}

export default UploadButton;
