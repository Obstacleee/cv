import React, {useState} from 'react';
// Ajoute ces imports en haut du fichier
import {AnimatePresence, m, motion} from 'framer-motion';
import {Github, Linkedin, Mail, MapPin, Phone, Send} from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [formStatus, setFormStatus] = useState({
        submitted: false,
        success: false,
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        setFormStatus({
            submitted: true,
            success: true,
            message: 'Message envoyé.'
        });

        // Reset form after submission
        setTimeout(() => {
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            });
            setFormStatus({
                submitted: false,
                success: false,
                message: '',
            });
        }, 5000);
    };

    const contacts = [
        {
            icon: Mail,
            title: 'Email',
            value: 'Lucasdelonreb@gmail.com',
            link: 'mailto:Lucasdelonreb@gmail.com',
        },
        {
            icon: MapPin,
            title: 'Localisation',
            value: 'Toulouse, France',
            link: 'https://www.google.com/maps/@43.6071777,1.4804994,1500m',
        },
        {
            icon: Phone,
            title: 'Téléphone',
            value: '+33 7 86 75 25 66',
            link: 'tel:+33786752566',
        },
    ];

    const socialLinks = [
        {icon: Github, href: 'https://github.com/Obstacleee', label: 'GitHub'},
        {icon: Linkedin, href: 'https://www.linkedin.com/in/lucas-delon/', label: 'LinkedIn'},
    ];

    return (
        <>
            <AnimatePresence mode="wait">
                {formStatus.submitted && (
                    <motion.div
                        key="overlay"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        className="fixed inset-0 z-500 bg-black/90 backdrop-blur-md flex items-center justify-center"
                        style={{pointerEvents: 'auto'}}
                    >
                        <motion.div
                            initial={{scale: 0.5, rotate: -15}}
                            animate={{scale: 1, rotate: 0}}
                            exit={{scale: 0.5, opacity: 0}}
                            transition={{type: 'spring', stiffness: 120}}
                            className="text-center"
                        >
                            {/* Icone check animée */}
                            <svg
                                className="w-32 h-32 mx-auto text-green-400 mb-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <motion.path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                    initial={{pathLength: 0}}
                                    animate={{pathLength: 1}}
                                    transition={{duration: 0.5, delay: 0.2}}
                                />
                            </svg>
                            <motion.div
                                initial={{y: 20, opacity: 0}}
                                animate={{y: 0, opacity: 1}}
                                transition={{delay: 0.5}}
                                className="space-y-4"
                            >
                                <h3 className="text-4xl font-bold text-white mb-2">
                                    Message envoyé !
                                </h3>
                                <p className="text-xl text-white/80">{formStatus.message}</p>
                                <motion.div
                                    className="h-1 bg-white/20 rounded-full mt-8 mx-auto"
                                    style={{width: '200px'}}
                                >
                                    <motion.div
                                        className="h-full bg-green-400 rounded-full"
                                        initial={{scaleX: 0, originX: 0}}
                                        animate={{scaleX: 1, originX: 0}}
                                        transition={{duration: 4.8, ease: "linear"}}
                                    />
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <section id="contact" className="py-20 bg-white dark:bg-dark-900">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{opacity: 0, y: -20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.6}}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary-600 dark:text-primary-400">
                            Me contacter
                        </h2>
                        <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mb-8"></div>
                        <p className="text-dark-700 dark:text-dark-300 max-w-3xl mx-auto text-lg">
                            Votre message est important pour moi. N'hésitez pas à me contacter pour toute question ou
                            projet potentiel. Je suis impatient de discuter avec vous !
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <motion.div
                            initial={{opacity: 0, x: -30}}
                            whileInView={{opacity: 1, x: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.6}}
                        >
                            <h3 className="text-2xl font-bold mb-8 text-dark-800 dark:text-dark-200">
                                Information de contact
                            </h3>

                            <div className="space-y-8 mb-12">
                                {contacts.map((contact, index) => {
                                    const Icon = contact.icon;
                                    return (
                                        <div key={index} className="flex items-start">
                                            <div className="bg-primary-50 dark:bg-dark-800 p-3 rounded-lg mr-4">
                                                <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400"/>
                                            </div>
                                            <div>
                                                <h4 className="text-dark-800 dark:text-dark-200 font-medium">{contact.title}</h4>
                                                <a
                                                    href={contact.link}
                                                    className="text-dark-600 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                                                >
                                                    {contact.value}
                                                </a>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <h3 className="text-2xl font-bold mb-6 text-dark-800 dark:text-dark-200">
                                Suivez-moi
                            </h3>

                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-dark-100 dark:bg-dark-800 p-3 rounded-full text-dark-600 dark:text-dark-400 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 transition-all"
                                            aria-label={social.label}
                                        >
                                            <Icon size={20}/>
                                        </a>
                                    );
                                })}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{opacity: 0, x: 30}}
                            whileInView={{opacity: 1, x: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.6}}
                        >
                            <h3 className="text-2xl font-bold mb-8 text-dark-800 dark:text-dark-200">
                                Envoyer un message
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-dark-700 dark:text-dark-300 mb-2">
                                            Votre Nom
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg bg-dark-50 dark:bg-dark-800 border border-dark-200 dark:border-dark-700 text-dark-800 dark:text-dark-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
                                            placeholder="Jean Dupont"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-dark-700 dark:text-dark-300 mb-2">
                                            Votre adresse e-mail
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg bg-dark-50 dark:bg-dark-800 border border-dark-200 dark:border-dark-700 text-dark-800 dark:text-dark-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
                                            placeholder="Jean@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-dark-700 dark:text-dark-300 mb-2">
                                        Sujet
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-dark-50 dark:bg-dark-800 border border-dark-200 dark:border-dark-700 text-dark-800 dark:text-dark-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
                                        placeholder="Demande de renseignements"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-dark-700 dark:text-dark-300 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 rounded-lg bg-dark-50 dark:bg-dark-800 border border-dark-200 dark:border-dark-700 text-dark-800 dark:text-dark-200 focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                                        placeholder="Je souhaite en savoir plus sur..."
                                    ></textarea>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center"
                                    >
                                        <Send className="w-4 h-4 mr-2"/>
                                        Envoyer
                                    </button>
                                </div>


                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;