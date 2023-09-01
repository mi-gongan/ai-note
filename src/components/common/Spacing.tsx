import { SpacingDirection } from "@/utils/style";
import React, { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  direction?: SpacingDirection;
  size: number;
}

const Spacing = ({
  direction = SpacingDirection.VERTICAL,
  size,
  ...props
}: Props) => {
  return (
    <div
      style={{
        flex: "none",
        width: direction === "horizontal" ? `${size}px` : undefined,
        height: direction === "vertical" ? `${size}px` : undefined,
      }}
      {...props}
    />
  );
};

export default React.memo(Spacing);
