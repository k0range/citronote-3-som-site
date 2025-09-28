"use client";

import { useEffect, useRef, useState } from "react";
import { ReactTyped } from "react-typed";

export default function TypingParagraph({ text, speed = 30 }: {
  text: string;
  speed?: number;
}) {
  return (
    <div className="">
      <ReactTyped strings={[text]} typeSpeed={30} loop={false} className="text-[1.75rem]" />
    </div>
  );
};
