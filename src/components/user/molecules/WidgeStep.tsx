import React from "react";
import ModalTitle from "../atom/ModalTitle";
import Spacing from "@/components/common/Spacing";
import ModalSubText from "../atom/ModalSubText";
import StepControl from "./StepControl";
import WidgetChooseBox from "../atom/WidgetChooseBox";
import { selectWidget } from "@/redux/slice/upload";
import { useSelector } from "react-redux";

interface WidgetStepProps {
  onNext: () => void;
  onPrev: () => void;
}

function WidgetStep({ onNext, onPrev }: WidgetStepProps) {
  const selectWidgetList = useSelector(selectWidget);
  return (
    <>
      <ModalTitle text="Create your custom dashboard\nby selecting the widgets you want" />
      <Spacing size={10} />
      <ModalSubText text="Create your own AI note with the combination of desired widgets" />
      <div className="md:h-[30px] h-[20px]" />
      <WidgetChooseBox />
      <div className="md:h-[40px] h-[40px]" />
      <StepControl
        onNext={onNext}
        onPrev={onPrev}
        disabled={selectWidgetList.length === 0}
        isLast={true}
      />
    </>
  );
}

export default WidgetStep;
