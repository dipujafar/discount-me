"use client";

import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

const gradientColors: string[] = [
  "linear-gradient(45deg, #FAF1EB, #e3eafa)",
  "linear-gradient(45deg, #e6ebfc, #F4EBE5)",
  "linear-gradient(45deg, #F7F1F1, #e7ebfc)",
  "linear-gradient(45deg, #EFF2F8, #FAF2EE)",
];

const AnimatedBg = ({ children }: { children: ReactNode }) => {
  const [bgIndex, setBgIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % gradientColors.length);
    }, 3000); // Change color every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      style={{
        background: gradientColors[bgIndex],
        transition: "background 0.5s ease",
      }}
      animate={{ background: gradientColors[bgIndex] }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="bg-[#e3eafa]"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedBg;
