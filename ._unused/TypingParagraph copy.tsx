"use client";

import { useEffect, useRef, useState } from "react";

export default function TypingParagraph({ text, speed = 40 }: {
  text: string;
  speed?: number;
}) {
  const [visibleText, setVisibleText] = useState("");
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const timer = setInterval(() => {
      setVisibleText((prev) => prev + text[i-1]);
      i++;
      if (i >= text.length) clearInterval(timer);
    }, speed);

    return () => clearInterval(timer);
  }, [started, text, speed]);

  return (
    <p
      ref={ref}
      style={{
        fontSize: "1.75rem",
        whiteSpace: "pre-wrap",
      }}
    >
      {visibleText}
      {started && visibleText.length < text.length ? "▌" : ""}
    </p>
  );
};
