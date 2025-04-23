import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award } from 'lucide-react';
import AboutScene from '../3d/AboutScene';

const About = () => {
  // Education and work details
  const education = [
    {
      degree: 'Ph.D. in Machine Learning',
      institution: 'Stanford University',
      year: '2018 - 2022',
      description: 'Specialized in reinforcement learning and neural networks, with focus on generative models.',
    },

  ];

  const experience = [
    {
      position: 'Senior AI Engineer',
      company: 'DeepTech AI',
      year: '2022 - Present',
      description: 'Lead AI research team developing cutting-edge computer vision and NLP solutions.',
    },

  ];

  const awards = [
    {
      title: 'Best Paper Award',
      organization: 'NeurIPS Conference',
      year: '2022',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 bg-dark-50 dark:bg-dark-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary-600 dark:text-primary-400">À propos</h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mb-8"></div>
          <p className="text-dark-700 dark:text-dark-300 max-w-3xl mx-auto text-lg">
            TEXTE RESUMER
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[400px] w-full rounded-xl overflow-hidden bg-gradient-to-br from-primary-100 to-accent-100 dark:from-dark-800 dark:to-dark-900 shadow-lg"
          >
            <AboutScene />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 text-dark-800 dark:text-dark-200">
                Text 1
              </h3>
              <p className="text-dark-600 dark:text-dark-400 mb-6">
                  Text 2
              </p>
              <p className="text-dark-600 dark:text-dark-400">
                Text 3
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
              <div className="bg-white dark:bg-dark-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <GraduationCap className="w-10 h-10 text-primary-600 dark:text-primary-400 mb-4" />
                <h4 className="font-semibold text-lg mb-2">Education</h4>
                <p className="text-dark-600 dark:text-dark-400 text-sm">{education[0].degree}</p>
              </div>

              <div className="bg-white dark:bg-dark-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <Briefcase className="w-10 h-10 text-accent-600 dark:text-accent-400 mb-4" />
                <h4 className="font-semibold text-lg mb-2">Actuellement </h4>
                <p className="text-dark-600 dark:text-dark-400 text-sm">{experience[0].year.endsWith('Actuellement') ? experience[0].company: 'Libre'} </p>
              </div>

            </motion.div>
          </motion.div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-dark-800 rounded-xl shadow-lg p-8"
          >
            <GraduationCap className="w-12 h-12 text-primary-600 dark:text-primary-400 mb-6" />
            <h3 className="text-xl font-bold mb-6 text-dark-800 dark:text-dark-200">
                Formation académique
            </h3>
            <ul className="space-y-6">
              {education.map((edu, index) => (
                <li key={index} className="border-l-2 border-primary-500 pl-4 pb-4">
                  <h4 className="font-semibold text-dark-800 dark:text-dark-200">{edu.degree}</h4>
                  <p className="text-dark-600 dark:text-dark-400 text-sm">{edu.institution}</p>
                  <p className="text-primary-600 dark:text-primary-400 text-sm">{edu.year}</p>
                  <p className="text-dark-500 dark:text-dark-500 text-sm mt-2">{edu.description}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-dark-800 rounded-xl shadow-lg p-8"
          >
            <Briefcase className="w-12 h-12 text-accent-600 dark:text-accent-400 mb-6" />
            <h3 className="text-xl font-bold mb-6 text-dark-800 dark:text-dark-200">Expérience professionnel</h3>
            <ul className="space-y-6">
              {experience.map((exp, index) => (
                <li key={index} className="border-l-2 border-accent-500 pl-4 pb-4">
                  <h4 className="font-semibold text-dark-800 dark:text-dark-200">{exp.position}</h4>
                  <p className="text-dark-600 dark:text-dark-400 text-sm">{exp.company}</p>
                  <p className="text-accent-600 dark:text-accent-400 text-sm">{exp.year}</p>
                  <p className="text-dark-500 dark:text-dark-500 text-sm mt-2">{exp.description}</p>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-4 border-t border-dark-200 dark:border-dark-700">
              <a
                  href="#"
                  className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors font-medium flex items-center"
              >
                Téléccharger mon CV
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4V16M12 16L8 12M12 16L16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5 20H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;