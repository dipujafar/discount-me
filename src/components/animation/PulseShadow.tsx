"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { ReactNode } from "react";

interface PulseShadowProps {
  children: ReactNode;
  color?: string;
  className?: string;
}

const PulseShadow: React.FC<PulseShadowProps> = ({
  children,
  color,
  className,
}) => {
  return (
    <motion.div
      className={cn(
        `flex w-fit h-fit items-center justify-center rounded-2xl bg-[${color}]`,
        className
      )}
      style={{ boxShadow: `0px 0px 5px 2px ${color}` }}
      initial={{ boxShadow: `0px 0px 0px ${color}` }}
      animate={{
        boxShadow: [
          `0px 0px 5px 2px ${color}`,
          `0px 0px 6px 3px ${color}`,
          `0px 0px 7px 4px ${color}`,
          `0px 0px 8px 5px ${color}`,
          `0px 0px 9px 6px ${color}`,
          `0px 0px 10px 7px ${color}`,
          `0px 0px 12px 8px ${color}`,
          `0px 0px 13px 9px ${color}`,
          `0px 0px 14px 10px ${color}`,
          `0px 0px 15px 11px ${color}`,
          `0px 0px 14px 10px ${color}`,
          `0px 0px 13px 9px ${color}`,
          `0px 0px 12px 8px ${color}`,
          `0px 0px 11px 7px ${color}`,
          `0px 0px 10px 6px ${color}`,
          `0px 0px 9px 5px ${color}`,
          `0px 0px 8px 4px ${color}`,
          `0px 0px 7px 3px ${color}`,
          `0px 0px 6px 2px ${color}`,
          `0px 0px 5px 1px ${color}`,
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default PulseShadow;
