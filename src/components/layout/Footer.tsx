import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Obstacleee', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/lucas-delon/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:lucasdelonreb@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-white dark:bg-dark-900 border-t border-dark-200 dark:border-dark-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 text-primary-600 dark:text-primary-400">Lucas Delon</h3>
            <p className="text-dark-600 dark:text-dark-400 max-w-xs">
              Création de systèmes intelligents qui augmentent les capacités humaines et résolvent des problèmes complexes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:text-center"
          >
            <h3 className="text-lg font-semibold mb-4 text-dark-800 dark:text-dark-200">Liens rapide</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-dark-600 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Accueil</a></li>
              <li><a href="#about" className="text-dark-600 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">À  propos</a></li>
              <li><a href="#projects" className="text-dark-600 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Projets</a></li>
              <li><a href="#skills" className="text-dark-600 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Compétences</a></li>
              <li><a href="#certifications" className="text-dark-600 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Certifications</a></li>
              <li><a href="#contact" className="text-dark-600 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Contact</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:text-right"
          >
            <h3 className="text-lg font-semibold mb-4 text-dark-800 dark:text-dark-200">Me Contacter</h3>
            <div className="flex gap-4 md:justify-end">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark-600 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        <div className="mt-12 pt-6 border-t border-dark-200 dark:border-dark-800 text-center">
          <p className="text-dark-500 dark:text-dark-500 text-sm">
            © {currentYear} Lucas Delon. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;