import React from "react";
import { Hr } from '../molecules/Hr';
import { AnimatePresence, motion } from "framer-motion";

export function InputElementWithDescription({ description, children, noHr, error }) {
  return (
        <motion.div className="input-container"
            // initial={{opacity: 0}}
            // animate={{opacity:1}}
            // exit={{opacity: 0}}
            // transition={{
            //     ease: "easeInOut",
            //     duration: 2
            //   }}
        >
          <div className="input-description">
            <h4>{description}</h4>
            <Hr noHr={noHr ? "invisible" : ""}/>
          </div>
    
          {children}
          {error !== undefined && error.length > 0 && (
            <span className="errorSpan">{error}</span>
          )}
        </motion.div>
  );
}
