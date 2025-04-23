import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Neural Image Classifier',
    description: 'A deep learning model for image classification with high accuracy on custom datasets.',
    fullDescription: 'This project implements a state-of-the-art convolutional neural network for image classification. It achieves over 95% accuracy on custom datasets and includes fine-tuning capabilities for transfer learning from pre-trained models.',
    image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg',
    category: 'Computer Vision',
    technologies: ['Python', 'TensorFlow', 'Keras', 'CNN'],
    features: [
      'Custom dataset support',
      'Transfer learning',
      'Model explainability',
      'Real-time inference API'
    ],
    github: 'https://github.com/',
    demo: 'https://demo.example.com/'
  },
  {
    id: 2,
    title: 'Advanced NLP Chatbot',
    description: 'A conversational AI chatbot built with transformer models for natural language understanding.',
    fullDescription: 'This conversational AI uses transformer-based architecture to provide natural and contextually relevant responses. It features multi-turn conversation memory, entity recognition, and intent classification.',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg',
    category: 'NLP',
    technologies: ['Python', 'PyTorch', 'Hugging Face', 'Transformers'],
    features: [
      'Context-aware responses',
      'Multi-language support',
      'Sentiment analysis',
      'Customizable personality'
    ],
    github: 'https://github.com/',
    demo: 'https://demo.example.com/'
  },
  {
    id: 3,
    title: 'Reinforcement Learning Agent',
    description: 'An AI agent trained using reinforcement learning to perform complex tasks in simulated environments.',
    fullDescription: 'This project demonstrates reinforcement learning algorithms for training agents in complex environments. The agent learns optimal policies through interaction with the environment, using techniques like Q-learning and policy gradients.',
    image: 'https://images.pexels.com/photos/244132/pexels-photo-244132.jpeg',
    category: 'Reinforcement Learning',
    technologies: ['Python', 'TensorFlow', 'OpenAI Gym', 'PPO'],
    features: [
      'Multiple environment support',
      'Hyperparameter optimization',
      'Policy visualization',
      'Performance benchmarking'
    ],
    github: 'https://github.com/',
    demo: 'https://demo.example.com/'
  },
  {
    id: 4,
    title: 'Time Series Forecasting',
    description: 'Advanced time series forecasting model for financial and economic data prediction.',
    fullDescription: 'This project implements multiple time series forecasting techniques including ARIMA, Prophet, and deep learning models like LSTM and Transformer-based architectures. It provides accurate predictions for financial and economic indicators.',
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg',
    category: 'Data Science',
    technologies: ['Python', 'PyTorch', 'Prophet', 'LSTM'],
    features: [
      'Multiple algorithm comparison',
      'Anomaly detection',
      'Uncertainty quantification',
      'Interactive visualization'
    ],
    github: 'https://github.com/',
    demo: null
  },
  {
    id: 5,
    title: 'Object Detection System',
    description: 'Real-time object detection system for video streams with tracking capabilities.',
    fullDescription: 'This computer vision system performs real-time object detection and tracking in video streams. It utilizes YOLO architecture for detection and implements multiple tracking algorithms to maintain object identity across frames.',
    image: 'https://images.pexels.com/photos/5206297/pexels-photo-5206297.jpeg',
    category: 'Computer Vision',
    technologies: ['Python', 'OpenCV', 'YOLO', 'DeepSORT'],
    features: [
      'Real-time processing',
      'Multiple object tracking',
      'Custom class detection',
      'Activity recognition'
    ],
    github: 'https://github.com/',
    demo: 'https://demo.example.com/'
  },
  {
    id: 6,
    title: 'Sentiment Analysis API',
    description: 'API service for real-time sentiment analysis of text data from multiple sources.',
    fullDescription: 'This NLP service provides sentiment analysis capabilities through a scalable API. It analyzes text from multiple sources including social media, customer reviews, and support conversations to extract sentiment and key topics.',
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg',
    category: 'NLP',
    technologies: ['Python', 'BERT', 'FastAPI', 'Docker'],
    features: [
      'Multi-language support',
      'Aspect-based sentiment analysis',
      'Emotion detection',
      'Trend analysis dashboard'
    ],
    github: 'https://github.com/',
    demo: null
  }
];