"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TypingScroll() {
  const textRef = useRef<HTMLDivElement>(null);

  const fullText =
    "これはスクロールで1文字ずつ出てくる段落です。じっくりスクロールして読んでください。";

  useEffect(() => {
    if (!textRef.current) return;

    // 初期は空にしておく
    textRef.current.innerText = "";

    const state = { chars: 0 };

    gsap.to(state, {
      chars: fullText.length,
      scrollTrigger: {
        trigger: textRef.current,
        start: "top center",
        end: "+=2000", // ← 1文字あたりのスクロール距離
        scrub: true,
        pin: false,
      },
      onUpdate: () => {
        if (textRef.current) {
          const chars = Math.floor(state.chars);
          textRef.current.innerText =
            fullText.slice(0, chars) + (chars < fullText.length ? "▌" : "");
          if (chars >= fullText.length) {
            textRef.current.style.opacity = "1";
          } else {
            textRef.current.style.opacity = "0.5";
          }
        }
      },
    });
  }, []);

  return (
    <div>
      <div
        ref={textRef}
        style={{
          fontSize: "1.5rem",
          fontFamily: "monospace",
          whiteSpace: "pre-wrap",
        }}
      ></div>
    </div>
  );
}
