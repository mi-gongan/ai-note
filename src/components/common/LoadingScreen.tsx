import React from "react";
import Portal from "./Portal";
import Image from "next/image";
import { motion } from "framer-motion";

function LoadingScreen() {
  return (
    <Portal>
      <div className="top-0 left-0 right-0 bottom-0 fixed bg-black/80 w-full h-full flex flex-col justify-center items-center z-50 backdrop-blur-md">
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
            src={"/imgs/loading-robot.webp"}
            width={211}
            height={230}
            alt="loaing-robot"
            priority={true}
          />
        </motion.div>
        <div className="text-white text-[32px]">Loading...</div>
      </div>
    </Portal>
  );
}

export default LoadingScreen;
