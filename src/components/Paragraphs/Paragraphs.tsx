import React, { ReactElement } from "react";

interface ParagraphsProps {
  title: ReactElement;
  text: ReactElement;
}

export default function Paragraphs({ title, text }: ParagraphsProps) {
  return (
    <div className="flex flex-col justify-center">
      <div className="gradient-container mb-[16px]">{title}</div>
      {text}
    </div>
  );
}
