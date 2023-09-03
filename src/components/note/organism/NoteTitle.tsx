import React from "react";

interface NoteTitleProps {
  title?: string;
  category?: string;
}

function NoteTitle({ title, category }: NoteTitleProps) {
  return (
    <div className="text-primary text-[32px] font-[700] min-h-[40px]">
      {title !== undefined ? <>{title}</> : <>...</>}
    </div>
  );
}

export default NoteTitle;
