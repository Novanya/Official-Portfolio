import React, { useState, useEffect } from "react";
import "./TypeWriter.css";

export default function TypeWriter({ words, speed = 150, pause = 1500 }) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingTimeout;

    const handleTyping = () => {
      const current = index % words.length;
      const fullText = words[current];

      setText((prev) =>
        isDeleting
          ? fullText.substring(0, prev.length - 1)
          : fullText.substring(0, prev.length + 1),
      );

      let typingSpeed = isDeleting ? speed / 2 : speed;

      if (!isDeleting && text === fullText) {
        typingSpeed = pause;
        setIsDeleting(true);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => prev + 1);
        typingSpeed = speed;
      }

      typingTimeout = setTimeout(handleTyping, typingSpeed);
    };

    typingTimeout = setTimeout(handleTyping, speed);

    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, index, words, speed, pause]);

  return <span className="typewriter">{text}</span>;
}
