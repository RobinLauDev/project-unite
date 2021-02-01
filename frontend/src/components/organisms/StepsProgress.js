import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export function StepsProgress({ stepNameArray, selectedStep }) {
    const container = {
        hidden: {  },
        show: {
          transition: {
            ease: "easeInOut",
            staggerChildren: 0.13,     
            delayChildren: 0.65,
          }
        }
      }
      
      const dot = {
        hidden: { y: "-40px", opacity: 0 },
        show:  { y: "0px",  opacity: 1},
      }

      const description = {
        initial: {            
            opacity: 0,
          },
          animate: {
            opacity: 1,
          },
          transition: {
            ease: "easeInOut",
            duration: 1.5,
            delay: 2
          }
          
      }
    

  const dotArray = stepNameArray.map((item, index) => {
    const dotActive = index == selectedStep ? "dotActive" : "";
    const dotCompleted = index < selectedStep ? "dotCompleted" : "";

    
    return (
        <motion.div className={`dotCont ${dotActive} ${dotCompleted}`}
        variants={dot}
        >
          <span className="dot"></span>
          <AnimatePresence>
              <motion.h5 {...description}  className="dotDescription">{item}</motion.h5>
          </AnimatePresence>
        </motion.div>
    );
  });

  return (
    <motion.div className="dots"
    variants={container}
    initial="hidden"
    animate="show"
    >
      <div className="progressLineCont">
        <div className="progressLine"></div>
      </div>
      {dotArray}
    </motion.div>
  );
}


// <ReactCSSTransitionGroup
// transitionName="example"
// transitionAppear={false}
// transitionEnter={true}
// transitionLeave={true}>
// <div className="dots">
//     <div className="progressLineCont">
//         <div className="progressLine"></div>
//     </div>
//     <Dots />
// </div>
// </ReactCSSTransitionGroup>

// import ReactCSSTransitionGroup from "react-addons-css-transition-group";
