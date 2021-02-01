export const animationTransitions = {
  parent: {
    show: {
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.1,
        when: "beforeChildren",
        staggerChildren: 0.09,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.02,
      },
    },
  },

  child1: {
    show: {
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.1,
      },
      y: 0,
    },
    hidden: {
      opacity: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.1,
      },
      y: "-30px",
    },
  },
 
  child2: {
    show: {
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
      },
      y: 0,
    },
    hidden: {
      opacity: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
      },
      y: "-30px",
    },
  },
  
};
   