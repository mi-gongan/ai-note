import React from "react";
import Portal from "./Portal";
import { cls } from "@/utils/style";
import { motion, AnimatePresence } from "framer-motion";

interface CustonModalProps {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
  width?: string;
  borderRadius?: string;
}

function CustonModal({
  children,
  open,
  onClose,
  width,
  borderRadius,
}: CustonModalProps) {
  return (
    <Portal>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="top-0 left-0 right-0 bottom-0 fixed bg-black/50 w-full h-full flex justify-center items-center backdrop-blur-[6.5px]"
            onClick={(e) => {
              if (e.target === e.currentTarget) onClose();
            }}
          >
            <div
              className={cls(
                "absolute bg-white z-10 max-h-[90vh] overflow-auto",
                width ? width : "w-[400px]",
                borderRadius ? borderRadius : "rounded-[10px]"
              )}
            >
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  );
}

export default CustonModal;
