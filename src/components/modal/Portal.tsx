"use client";

import { PropsWithChildren, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function Portal({ children }: PropsWithChildren) {
  const id = "modal-root";
  const [root, setRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setRoot(document.getElementById(id));
  }, []);
  return root && createPortal(children, root);
}
