import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'RSS To Audio',
    description: 'Création d\'un site web permettant la conversion de FluxRSS en actualités audio.',
    fullDescription: 'Création d\'un site web permettant la conversion de FluxRSS en actualités audio, mises à jour quotidiennement. Utilisation de Python et du framework Flask pour le développement de l\'application web, et de MySQL pour la gestion de la base de données hébergée sur les serveurs AWS. Mise en œuvre de l\'API de OpenAI pour la fonctionnalité Text-to-Speech.',
    image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg',
    category: 'Python',
    technologies: ['Python', 'Requests', 'OpenAi TTS', 'SyncWebhook', 'Flask', 'MySQL'],
    features: [
      'Récupère et affiche les flux RSS de différentes source',
      'Permet d\'ajouter de supprimer et de mettre à jour les flux RSS',
      'Fournit une interface utilisateur web pour interagir avec l\'agrégateur',
      'Prend en charge la pagination pour une meilleure navigation des articles'
    ],
    github: 'https://github.com/Obstacleee/StreamVoice',
    demo: 'http://streamvoice.alwaysdata.net/'
  },
  {
    id: 2,
    title: 'Matcheur de CV et poste, IA School',
    description: 'Système de correspondance entre CV et postes à pourvoir.',
    fullDescription: 'Développement d\'un système de correspondance entre CV et postes à pourvoir, en utilisant Python et SQL pour la conversion des CV et l\'élaboration de l\'algorithme de sélection des candidatures appropriées. Utilisation de PHP pour la création de l\'interface web de l\'application.',
    image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg',
    category: 'Python',
    technologies: ['Python', 'OpenAI LLM', 'FastAPI', 'PHP'],
    features: [
      'Analyse et conversion des CV au format JSON',
      'Élaboration d\'un algorithme de sélection des candidatures appropriées',
      'Création d\'une interface web pour l\'application',
      'Utilisation de l\'API OpenAI pour le traitement du langage naturel'
    ],
    github: null,
    demo: null
  },
];