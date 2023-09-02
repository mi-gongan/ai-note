"use client";

import React, { useState } from "react";
import Spacing from "@/components/common/Spacing";
import UploadButton from "@/components/user/atom/UploadButton";
import UploadModal from "./organism/UploadModal";
import RobotImage from "./organism/RobotImage";
import WelcomeText from "./organism/WelcomeText";

function UserTemplate() {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  return (
    <>
      <div className="flex justify-center items-center flex-col leading-12">
        <Spacing size={80} />
        <WelcomeText />
        <RobotImage />
        <UploadButton openModal={openModal} />
      </div>
      <UploadModal
        open={open}
        closeModal={() => {
          setOpen(false);
        }}
      />
    </>
  );
}

export default UserTemplate;
