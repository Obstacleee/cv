import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { certificationsData } from '../../data/certificationsData';

const Certifications = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', 'Python', 'AI', 'Cybersecurity'];

  const filteredCertifications = activeFilter === 'All'
    ? certificationsData
    : certificationsData.filter(cert => cert.category === activeFilter);

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-dark-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary-600 dark:text-primary-400">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mb-8"></div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm md:text-base transition-all ${
                activeFilter === category
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-400 hover:bg-dark-200 dark:hover:bg-dark-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCertifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white dark:bg-dark-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative p-6">
                <div className="mb-4">
                  <img
                    src={cert.logo}
                    alt={cert.organization}
                    className="h-12 object-contain mb-4"
                  />
                  <h3 className="text-xl font-bold text-dark-800 dark:text-dark-200 mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    {cert.organization}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-sm text-dark-500 dark:text-dark-400">
                  <div className="flex items-center">
                    <Award size={16} className="mr-1" />
                    <span>{cert.category}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100"
                >
                  <p className="text-white bg-primary-600 mb-4 p-2 ">{cert.description}</p>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors"
                    >
                      Voir le certificat
                      <ExternalLink size={16} className="ml-1" />
                    </a>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;