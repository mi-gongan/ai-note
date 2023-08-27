"use client";

import React, { useState } from "react";
import { Reorder, useDragControls } from "framer-motion";

function Box() {
  const controls = useDragControls();
  const [items, setItems] = useState([
    {
      id: 0,
      name: "sumin",
      width: "w-24",
      height: "h-24",
    },
    {
      id: 1,
      name: "inbum",
      width: "w-24",
      height: "h-24",
    },
    {
      id: 2,
      name: "uzu",
      width: "w-24",
      height: "h-24",
    },
  ]);

  return (
    <Reorder.Group values={items} onReorder={setItems} as="div" axis="y">
      {items.map((item) => (
        <Reorder.Item
          key={item.id}
          value={item}
          // dragListener={false}
          // dragControls={controls}
          className={`bg-red-500 ${item.width} ${item.height}`}
          as="div"
        >
          {item.name}
          {/* <div
            className="reorder-handle bg-blue-500"
            onPointerDown={(e) => {
              // e.stopPropagation();
              console.log(e);
              controls.start(e);
            }}
          >
            zzzz
          </div> */}
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
}

export default Box;
