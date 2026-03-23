import { useState, useEffect } from "react";

export function TypeWriter({ texts }) {
  const [i, setI] = useState(0);
  const [shown, setShown] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const tgt = texts[i];
    let t;
    if (!del) {
      if (shown.length < tgt.length)
        t = setTimeout(() => setShown(tgt.slice(0, shown.length + 1)), 75);
      else t = setTimeout(() => setDel(true), 2200);
    } else {
      if (shown.length > 0)
        t = setTimeout(() => setShown(shown.slice(0, -1)), 38);
      else {
        setDel(false);
        setI((n) => (n + 1) % texts.length);
      }
    }
    return () => clearTimeout(t);
  }, [shown, del, i, texts]);

  return (
    <>
      {shown}
      <span
        style={{
          color: "var(--pink)",
          opacity: del ? 0.5 : 1,
          transition: "opacity 0.2s",
        }}
      >
        |
      </span>
    </>
  );
}
