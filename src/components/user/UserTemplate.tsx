"use client";

import React, { useState } from "react";
import Spacing from "@/components/common/Spacing";
import UploadButton from "@/components/user/atom/UploadButton";
import UploadModal from "./organism/UploadModal";
import RobotImage from "./organism/RobotImage";
import WelcomeText from "./organism/WelcomeText";

function UserTemplate() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex justify-center items-center flex-col leading-12">
        <Spacing size={80} />
        <WelcomeText />
        <RobotImage />
        <UploadButton setOpen={setOpen} />
      </div>
      <UploadModal open={open} setOpen={setOpen} />
    </>
  );
}

export default UserTemplate;
