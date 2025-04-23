import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import HeroCanvas from '../3d/HeroCanvas';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <Suspense fallback={<div className="w-full h-full bg-gradient-to-br from-primary-50 to-accent-50 dark:from-dark-900 dark:to-dark-950"></div>}>
          <HeroCanvas />
        </Suspense>
      </div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left mb-12 md:mb-0 z-10"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-400 dark:to-accent-400">
              Lucas Delon
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg sm:text-xl text-dark-700 dark:text-dark-300 mb-8 max-w-xl mx-auto md:mx-0"
          >
            Développeur IA et Web | Passionné par la technologie et l'innovation. Je crée des solutions numériques qui transforment les idées en réalité.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <a 
              href="#projects" 
              className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0"
            >
              Voir mes Projets
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 border-2 border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-dark-800 rounded-lg transform hover:-translate-y-1 active:translate-y-0"
            >
               Contactez-moi
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="md:w-1/2 flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white dark:border-dark-700 shadow-xl">
            <img 
              src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" 
              alt="Lucas Delon Profile"
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center text-dark-500 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
          <span className="text-sm mb-2">Défiler</span>
          <ArrowDown size={20} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;