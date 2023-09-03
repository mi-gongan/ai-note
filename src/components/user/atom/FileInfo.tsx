import { TestFileType, deleteFile } from "@/redux/slice/upload";
import { getByteSize } from "@/utils/number";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { useDispatch } from "react-redux";

interface FileInfoProps {
  file: File | TestFileType;
}

function FileInfo({ file }: FileInfoProps) {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="md:h-[40px] h-[20px]" />
      <div className="text-primary font-[700] md:text-[28px] text-[24px]">
        My files
      </div>
      <div className="flex items-center md:mr-[50px] mr-[20px] ">
        <div className="flex-1 text-primary font-[400] md:text-[20px] text-[14px]">
          {file.name.length > 20 ? file.name.slice(0, 20) + "..." : file.name}
        </div>
        <div className="flex gap-2 items-center">
          <div className="text-[#9A9B9C] md:text-[15px] text-[12px]">
            {getByteSize(file.size)}
          </div>
          <div onClick={() => dispatch(deleteFile())}>
            <Icon
              icon="ic:round-close"
              color="#b6b6b6"
              width="20"
              height="20"
            />
          </div>
        </div>
      </div>
      <div className="md:h-[80px] h-[60px]" />
    </div>
  );
}

export default FileInfo;
