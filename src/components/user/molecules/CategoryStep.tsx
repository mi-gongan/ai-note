import React from "react";
import ModalTitle from "../atom/ModalTitle";
import Spacing from "@/components/common/Spacing";
import ModalSubText from "../atom/ModalSubText";
import StepControl from "./StepControl";
import FileTitleInput from "../atom/FileTitleInput";
import CategoryChooseBox from "../atom/CategoryChooseBox";
import { useSelector } from "react-redux";
import { selectCategory, selectTitle } from "@/redux/slice/upload";

interface CategoryStepProps {
  onNext: () => void;
  onPrev: () => void;
}

function CategoryStep({ onNext, onPrev }: CategoryStepProps) {
  const title = useSelector(selectTitle);
  const category = useSelector(selectCategory);
  return (
    <>
      <ModalTitle text="Enter the title and category of the note" />
      <Spacing size={10} />
      <ModalSubText text="For a more accurate note summary, please be sure to select a category!" />
      <div className="md:h-[30px] h-[20px]" />
      <div className="text-[20px] font-[600]">Title</div>
      <Spacing size={14} />
      <FileTitleInput />
      <Spacing size={40} />
      <div className="text-[20px] font-[600]">
        What is the category of the note?
      </div>
      <Spacing size={14} />
      <CategoryChooseBox />
      <div className="md:h-[80px] h-[60px]" />
      <StepControl
        onNext={onNext}
        onPrev={onPrev}
        disabled={title === "" || category === null}
      />
    </>
  );
}

export default CategoryStep;
