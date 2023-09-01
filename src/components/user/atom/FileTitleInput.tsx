import { selectTitle, setTitle } from "@/redux/slice/upload";
import { cls } from "@/utils/style";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function FileTitleInput() {
  const title = useSelector(selectTitle);
  const dispatch = useDispatch();
  return (
    <input
      className={cls(
        "w-[calc(100%-26px)] h-[62px] rounded-[12px]",
        "pl-[16px] pr-[20px]",
        "border border-[#DFE3E9]",
        "focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary",
        "text-[18px] text-primary"
      )}
      value={title}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        dispatch(setTitle(e.target.value))
      }
    ></input>
  );
}

export default FileTitleInput;
