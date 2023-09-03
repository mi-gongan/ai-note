import CheckIcon from "@/components/icon/CheckIcon";
import { selectCategory, setCategory } from "@/redux/slice/upload";
import { cls } from "@/utils/style";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const categories = [
  "Lecture",
  "Class",
  "Lab",
  "Project",
  "1:1 Conversation",
  "Other",
];
function CategoryChooseBox() {
  const categoryName = useSelector(selectCategory);
  const dispatch = useDispatch();
  return (
    <div className="flex gap-[10px] flex-wrap">
      {categories.map((category) => {
        return (
          <div
            key={category}
            className={cls(
              "flex items-center gap-4",
              "h-[44px] rounded-[5px]",
              "md:w-[calc(50%-20px)] w-[calc(100%-20px)]",
              "pl-[16px] pr-[20px]",
              "border",
              categoryName === category
                ? "bg-[#F6F7FA] border-primary"
                : "border-[#DFE3E9]",
              "text-[14px] text-primary font-[600]",
              "cursor-pointer"
            )}
            onClick={() => {
              if (categoryName === category) {
                dispatch(setCategory(null));
              } else {
                dispatch(setCategory(category));
              }
            }}
          >
            <CheckIcon selected={categoryName === category} />
            {category}
          </div>
        );
      })}
    </div>
  );
}

export default CategoryChooseBox;
