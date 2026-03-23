import { useState, useEffect } from "react";
import { Reveal } from "./Reveal";

export function Counter({ to, suffix = "" }) {
  const [v, setV] = useState(0);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVis(true);
      },
      { threshold: 0.5 },
    );
    const el = document.getElementById("counter");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!vis) return;
    let cur = 0;
    const step = to / 45;
    const t = setInterval(() => {
      cur += step;
      if (cur >= to) {
        setV(to);
        clearInterval(t);
      } else setV(Math.floor(cur));
    }, 28);
    return () => clearInterval(t);
  }, [vis, to]);

  return (
    <span id="counter">
      {v}
      {suffix}
    </span>
  );
}
