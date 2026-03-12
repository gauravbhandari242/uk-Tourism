import React, { useState, useEffect } from "react";

function ScrollProgress() {

  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    const totalHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrollPosition = window.scrollY;

    setScroll((scrollPosition / totalHeight) * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-yellow-400 z-[9999]"
      style={{ width: `${scroll}%` }}
    />
  );
}

export default ScrollProgress;
