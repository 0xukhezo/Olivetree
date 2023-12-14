// React
import React, { ReactElement } from "react";

interface ParagraphProps {
  title: ReactElement;
  text: ReactElement;
}

export default function Paragraph({ title, text }: ParagraphProps) {
  return (
    <div className="flex flex-col justify-center">
      <div className="gradient-container mb-[16px]">{title}</div>
      {text}
    </div>
  );
}
