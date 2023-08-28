import React from "react";
import Portal from "./Portal";

interface ModalProps {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}

function Modal({ children, open, onClose }: ModalProps) {
  return (
    <Portal>
      {open && (
        <div
          className="top-0 left-0 right-0 bottom-0 fixed bg-black/50 w-full h-full flex justify-center items-center"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <div className="absolute bg-white w-20 z-2">{children}</div>
        </div>
      )}
    </Portal>
  );
}

export default Modal;
