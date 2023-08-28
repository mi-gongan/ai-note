"use client";

import React, { useState } from "react";
import Modal from "./modal/Modal";

function ModalButton() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        asdfasdfs
      </Modal>
      <div
        onClick={() => {
          setOpen(true);
        }}
      >
        fasdf
      </div>
    </>
  );
}

export default ModalButton;
