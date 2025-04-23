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
    name: 'Data Visualization with Python',
    organization: 'Kaggle',
    category: 'Python',
    date: 'mars 2024',
    description: 'Professional certification demonstrating practical machine learning skills with TensorFlow.',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRZ5JAPSmxplcu-YyshqQea-KR7lx_LdH2TQ&s',
    credentialUrl: 'https://www.kaggle.com/learn/certification/lucasdelon/data-visualization'
  },
  {
    id: 2,
    name: 'Introduction to Generative AI',
    organization: 'Google Cloud',
    category: 'AI',
    date: 'mars 2024',
    description: 'Professional certification demonstrating practical machine learning skills with TensorFlow.',
    logo: 'https://cdn.qwiklabs.com/RshPhz3CtNIya%2F8v2wDfRsaWLitOB3yRV73Oqq1iAtQ%3D',
    credentialUrl: 'https://www.cloudskillsboost.google/public_profiles/e064d324-6f05-4254-a564-8a4f21090d3d/badges/8323617?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share'
  },
  {
    id: 3,
    name: 'Introduction to Large Language Models',
    organization: 'Google Cloud',
    category: 'AI',
    date: 'mars 2024',
    description: 'Professional certification demonstrating practical machine learning skills with TensorFlow.',
    logo: 'https://cdn.qwiklabs.com/RshPhz3CtNIya%2F8v2wDfRsaWLitOB3yRV73Oqq1iAtQ%3D',
    credentialUrl: 'https://www.cloudskillsboost.google/public_profiles/e064d324-6f05-4254-a564-8a4f21090d3d/badges/8323642?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share'
  },
  {
    id: 4,
    name: 'Introduction to Responsible AI',
    organization: 'Google Cloud',
    category: 'AI',
    date: 'mars 2024',
    description: 'Professional certification demonstrating practical machine learning skills with TensorFlow.',
    logo: 'https://cdn.qwiklabs.com/RshPhz3CtNIya%2F8v2wDfRsaWLitOB3yRV73Oqq1iAtQ%3D',
    credentialUrl: 'https://www.cloudskillsboost.google/public_profiles/e064d324-6f05-4254-a564-8a4f21090d3d/badges/8323664?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share'
  },
  {
    id: 5,
    name: 'MOOC SecNumacadémie',
    organization: 'SecNumacadémie',
    category: 'Cybersecurity',
    date: 'mars 2024',
    description: 'Professional certification demonstrating practical machine learning skills with TensorFlow.',
    logo: 'https://fr.outscale.com/wp-content/uploads/2019/12/SecNumCloud-1.png',
    credentialUrl: ''
  },
  {
    id: 6,
    name: 'Python',
    organization: 'Kaggle',
    category: 'Python',
    date: 'mars 2024',
    description: 'Professional certification demonstrating practical machine learning skills with TensorFlow.',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRZ5JAPSmxplcu-YyshqQea-KR7lx_LdH2TQ&s',
    credentialUrl: 'https://www.kaggle.com/learn/certification/lucasdelon/python'
  },
  {
    id: 7,
    name: 'Pandas',
    organization: 'Kaggle',
    category: 'Python',
    date: 'févr. 2024',
    description: 'Professional certification demonstrating practical machine learning skills with TensorFlow.',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRZ5JAPSmxplcu-YyshqQea-KR7lx_LdH2TQ&s',
    credentialUrl: 'https://www.kaggle.com/learn/certification/lucasdelon/pandas'
  },
];