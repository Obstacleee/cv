interface Certification {
  id: number;
  name: string;
  organization: string;
  category: string;
  date: string;
  description: string;
  logo: string;
  credentialUrl?: string;
}

export const certificationsData: Certification[] = [
  {
    id: 1,
    name: 'TensorFlow Developer Certificate',
    organization: 'Google',
    category: 'AI/ML',
    date: 'Dec 2023',
    description: 'Professional certification demonstrating practical machine learning skills with TensorFlow.',
    logo: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg',
    credentialUrl: 'https://www.credential.net/'
  },
  {
    id: 2,
    name: 'AWS Machine Learning Specialty',
    organization: 'Amazon Web Services',
    category: 'Cloud',
    date: 'Nov 2023',
    description: 'Advanced certification for designing and implementing ML solutions on AWS.',
    logo: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg',
    credentialUrl: 'https://www.credential.net/'
  },
  {
    id: 3,
    name: 'Deep Learning Specialization',
    organization: 'DeepLearning.AI',
    category: 'AI/ML',
    date: 'Oct 2023',
    description: 'Comprehensive specialization in deep learning and neural networks.',
    logo: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg',
    credentialUrl: 'https://www.credential.net/'
  },
  {
    id: 4,
    name: 'Professional Data Engineer',
    organization: 'Google Cloud',
    category: 'Data Science',
    date: 'Sep 2023',
    description: 'Certification for designing and building data processing systems.',
    logo: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
    credentialUrl: 'https://www.credential.net/'
  },
  {
    id: 5,
    name: 'Azure AI Engineer Associate',
    organization: 'Microsoft',
    category: 'AI/ML',
    date: 'Aug 2023',
    description: 'Certification for implementing AI solutions using Azure Cognitive Services and ML.',
    logo: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
    credentialUrl: 'https://www.credential.net/'
  },
  {
    id: 6,
    name: 'Full Stack Development',
    organization: 'Meta',
    category: 'Development',
    date: 'Jul 2023',
    description: 'Professional certification in modern full-stack web development.',
    logo: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg',
    credentialUrl: 'https://www.credential.net/'
  }
];