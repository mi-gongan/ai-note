import CheckIcon from "@/components/icon/CheckIcon";
import { selectWidget, setWidget } from "@/redux/slice/upload";
import { cls } from "@/utils/style";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const widgetList = [
  {
    id: 0,
    title: "Summary Note 📑",
    description:
      "AI summary notes provide concise summaries to facilitate effective learning of essential information.",
  },
  {
    id: 1,
    title: "Chat bot 🤖",
    description:
      "While studying, ask the Ai chatbot if you don't know something.",
  },
  {
    id: 2,
    title: "Past exam questions 📂",
    description:
      "Analyze the content of the files and find related past exam questions.",
  },
  {
    id: 3,
    title: "Handwritten Note 📝",
    description: "You can write as you wish.",
  },
];

function WidgetChooseBox() {
  const selectWidgetList = useSelector(selectWidget);
  const dispatch = useDispatch();
  return (
    <div
      className={cls(
        "mr-[36px] grid gap-[15px]",
        "md:grid-cols-3 sm:grid-cols-2 grid-cols-1"
      )}
    >
      {widgetList.map((widget, index) => {
        return (
          <div
            key={index}
            className={cls(
              "flex flex-col gap-[10px]",
              "h-[208px] rounded-[24px]",
              "py-[20px] px-[14px]",
              "border",
              selectWidgetList.includes(widget.id)
                ? "bg-[#F6F7FA] border-primary"
                : "border-[#DFE3E9]",
              "text-[14px] text-primary font-[600]",
              "cursor-pointer"
            )}
            onClick={() => {
              if (selectWidgetList.includes(widget.id)) {
                dispatch(
                  setWidget(
                    selectWidgetList.filter((item) => item !== widget.id)
                  )
                );
              } else {
                dispatch(setWidget([...selectWidgetList, widget.id]));
              }
            }}
          >
            <CheckIcon selected={selectWidgetList.includes(widget.id)} />
            <div className="text-[20px] text-primary">{widget.title}</div>
            <div className="text-[14px] text-[#C1C2C8]">
              {widget.description}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default WidgetChooseBox;
