import React from 'react';
import { motion } from 'framer-motion';

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: "0%",
  },
  end: {
    y: "100%",
  },
};

const loadingCircleTransition = {
  duration: 0.5,
  repeat: Infinity,
  repeatType: "reverse",
  ease: "easeInOut",
};

const loadingTextVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-white dark:bg-dark-900 flex items-center justify-center z-[200]">
      <div className="text-center">
        <motion.div
          variants={loadingContainerVariants}
          initial="start"
          animate="end"
          className="flex justify-center space-x-4 mb-8"
        >
          {[1, 2, 3].map((index) => (
            <motion.span
              key={index}
              variants={loadingCircleVariants}
              transition={loadingCircleTransition}
              className="w-4 h-4 rounded-full bg-primary-500 dark:bg-primary-400"
              style={{
                display: "block",
              }}
            />
          ))}
        </motion.div>

        <motion.div
          variants={loadingTextVariants}
          initial="initial"
          animate="animate"
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold text-dark-800 dark:text-dark-200">
            Chargement de votre expérience...
          </h2>
          <p className="text-dark-600 dark:text-dark-400">
            Augmentation de la vitesse de votre expérience en cours...
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingScreen;