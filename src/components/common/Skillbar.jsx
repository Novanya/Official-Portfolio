import { useState, useEffect, useRef } from "react";

export function SkillBar({ name, pct, fillBg, glow }) {
  const [w, setW] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setW(pct);
      },
      { threshold: 0.2 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [pct]);

  return (
    <div className="skill-row" ref={ref}>
      <div className="skill-meta">
        <span style={{ fontSize: "0.88rem" }}>{name}</span>
        <span className="skill-pct">{pct}%</span>
      </div>
      <div className="skill-track">
        <div
          className="skill-fill"
          style={{
            width: `${w}%`,
            background: fillBg,
            boxShadow: `0 0 10px ${glow}`,
          }}
        />
      </div>
    </div>
  );
}
