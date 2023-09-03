import Image from "next/image";
import React from "react";

function RobotImage() {
  return (
    <div className="xl:w-[727px] md:w-[500px] w-[100%] max-w-[500px]">
      <Image
        src={"/imgs/robot-background.webp"}
        width={727}
        height={449}
        alt="robot"
        style={{
          width: "100%",
          height: "auto",
        }}
        priority={true}
      />
    </div>
  );
}

export default RobotImage;
