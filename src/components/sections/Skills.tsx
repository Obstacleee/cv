import React from 'react';
import { motion } from 'framer-motion';
import SkillSection from '../ui/SkillSection';
import SkillsCanvas from '../3d/SkillsCanvas';
import { skillsData } from '../../data/skillsData';

const Skills = () => {

  return (
    <section id="skills" className="py-20 bg-dark-50 dark:bg-dark-950 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative z-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary-600 dark:text-primary-400">
            Compétences Techniques et Outils
          </h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mb-8"></div>
          <p className="text-dark-700 dark:text-dark-300 max-w-3xl mx-auto text-lg">
           Mes compétences techniques et outils que j'utilise pour créer des solutions innovantes. Je suis passionné par l'apprentissage continu et l'exploration de nouvelles technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="space-y-16">
            {skillsData.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <SkillSection skillGroup={skillGroup} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] hidden md:block"
          >
            <SkillsCanvas />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 pt-16 border-t border-dark-200 dark:border-dark-800"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {['TensorFlow', 'PyTorch', 'Keras', 'scikit-learn', 'OpenCV', 'NLTK', 'Hugging Face', 'Flask', 'FastAPI', 'Docker', 'AWS', 'Google Cloud'].map((tech, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-dark-800 rounded-lg p-4 flex items-center justify-center h-24 shadow-md hover:shadow-lg transition-shadow"
              >
                <span className="text-dark-700 dark:text-dark-300 font-medium text-center">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;