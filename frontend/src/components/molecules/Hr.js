import React from "react";
import { motion } from "framer-motion";

export const Hr = ({ noHr, animated, key }) => {
  return (
    <motion.hr
      key={key}
      initial={animated && { width: 0 }}
      exit={
        animated && {
          width: "0%",
          transition: {
            ease: "easeInOut",
            delay: 1.2,
            duration: 0.9,
          },
        }
      }
      animate={{
        width: "100%",
        transition: {
          ease: "easeInOut",
          duration: 0.9,
        },
      }}
      className={noHr}
    ></motion.hr>
  );
};
