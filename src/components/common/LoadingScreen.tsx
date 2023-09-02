import React from "react";
import Portal from "./Portal";

function LoadingScreen() {
  return (
    <Portal>
      <div className="top-0 left-0 right-0 bottom-0 fixed bg-black/50 w-full h-full flex justify-center items-center z-100" />
    </Portal>
  );
}

export default LoadingScreen;
