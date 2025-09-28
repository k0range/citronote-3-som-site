import { useEffect, useRef, useState } from "react";

export default function Timeline({ events }) {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const value = (viewportCenter - rect.top) / rect.height;
      setProgress(Math.min(Math.max(value, 0), 1));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 初期位置
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative pl-12">
      {/* 縦バー */}
      <div className="absolute left-5 top-0 h-full w-px bg-white opacity-50">
        <div
          className="absolute top-0 left-0 w-full bg-white"
          style={{ height: `${progress * 100}%` }}
        />
      </div>

      {/* イベント */}
      {events.map((ev, i) => (
        <div key={i} className="relative mb-12">
          {/* dot */}
          <div className="absolute -left-1.5 top-2 w-4 h-4 rounded-full bg-blue-500 border-2 border-white" />
          {/* box */}
          <div className="ml-8 p-4 bg-white rounded-lg shadow">
            <h3 className="font-semibold">{ev.title}</h3>
            <p className="text-gray-600">{ev.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
