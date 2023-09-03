import React from "react";
import Portal from "./Portal";
import Image from "next/image";
import { motion } from "framer-motion";

function LoadingScreen() {
  return (
    <Portal>
      <div className="top-0 left-0 right-0 bottom-0 fixed bg-black/50 w-full h-full flex flex-col justify-center items-center z-100">
        <motion.div
          animate={{
            rotate: [20, 5],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5,
          }}
        >
          <Image
            src={"/imgs/loading-robot.svg"}
            width={211}
            height={230}
            alt="loaing-robot"
          />
          <div className="text-primary text-[20px]">Loading...</div>
        </motion.div>
      </div>
    </Portal>
  );
}

export default LoadingScreen;
