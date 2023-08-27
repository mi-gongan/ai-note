"use client";

import { Reorder } from "framer-motion";
import React, { useState } from "react";

function LeftNavigation() {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([0, 1, 2, 3]);

  return (
    <>
      {open ? (
        <div className="w-20 h-[100vh] bg-white border-black border-2">
          <div></div>
          <div
            onClick={() => {
              setOpen(false);
            }}
            data-testid="navigation-close-button"
          >
            닫기
          </div>
          <Reorder.Group values={items} onReorder={setItems} axis="y">
            {items.map((item) => (
              <Reorder.Item
                key={item}
                value={item}
                className={`border border-y-black h-20`}
              >
                {item}
              </Reorder.Item>
            ))}
          </Reorder.Group>
        </div>
      ) : (
        <div className="w-9 h-[100vh] bg-white border-black border-2">
          <div
            onClick={() => {
              setOpen(true);
            }}
            data-testid="navigation-open-button"
          >
            열기
          </div>
        </div>
      )}
    </>
  );
}

export default LeftNavigation;
