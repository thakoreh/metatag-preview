"use client";

import React, { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Meta Tags Generated", value: 48500, suffix: "+", display: "48,500+" },
  { label: "Happy Users", value: 12400, suffix: "+", display: "12,400+" },
  { label: "Websites Previewed", value: 32000, suffix: "+", display: "32,000+" },
  { label: "Countries", value: 140, suffix: "+", display: "140+" },
];

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          animate();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref}>
      <span style={{ fontSize: 32, fontWeight: 800, color: "var(--primary)" }}>
        {count.toLocaleString()}
        {suffix}
      </span>
    </div>
  );
}

export function StatsBar() {
  return (
    <section
      style={{
        padding: "60px 24px",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        background: "var(--card)",
      }}
    >
      <div
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 32,
          textAlign: "center",
        }}
        data-grid="stats"
      >
        {stats.map((stat) => (
          <div key={stat.label}>
            <AnimatedNumber target={stat.value} suffix={stat.suffix} />
            <div
              style={{
                fontSize: 14,
                color: "var(--body)",
                marginTop: 8,
                fontWeight: 500,
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
