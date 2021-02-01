import React from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useClickOutside } from "../../hooks/useClickOutside";
import { animationTransitions } from "../../animations/animationTransitions";


export const Menu = ({ dispatch, routeMap }) => {
  const ref = useClickOutside(() => dispatch());

  return (
    <AnimatePresence>
      <motion.div
        className="menu-wrapper"
        ref={ref}
        variants={animationTransitions.parent}
        initial="hidden"
        animate="show"
        exit="hidden"
        key="modal"
      >
        <div className="menu">
          <ul>  
            {
                routeMap.map(item=>{
                    if(item.isMenuItem)
                        return (
                            <motion.div variants={animationTransitions.child1}>
                            <Link to={item.url} onClick={dispatch}>
                                <motion.li variants={animationTransitions.child2}>
                                {item.name}
                                </motion.li>
                            </Link>
                            </motion.div>
                        )
                })
            }
          </ul>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
