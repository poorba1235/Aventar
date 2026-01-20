import { ExternalLink, Code2, Smartphone, Database, Cloud, Cpu, Globe, Shield, MessageSquare, Zap,  BarChart, ShoppingBag, HeartPulse, Home, Car, GraduationCap } from 'lucide-react';
import React, { useState } from 'react';


export default function Portfolio() {
  const projectCategories = [
    {
      id: 'all',
      name: 'All Projects',
      icon: Code2,
      count: 12,
    },
    {
      id: 'web',
      name: 'Web Applications',
      icon: Globe,
      count: 4,
    },
    {
      id: 'mobile',
      name: 'Mobile Apps',
      icon: Smartphone,
      count: 2,
    },
    {
      id: 'ai',
      name: 'AI & ML',
      icon: Cpu,
      count: 3,
    },
    {
      id: 'ecommerce',
      name: 'E-Commerce',
      icon: ShoppingBag,
      count: 2,
    },
    {
      id: 'cloud',
      name: 'Cloud Solutions',
      icon: Cloud,
      count: 3,
    },
    {
      id: 'api',
      name: 'API Development',
      icon: Database,
      count: 2,
    },
  ];

  const projects = [
    // Web Applications
    {
      title: 'Real Estate CRM Platform',
      category: 'Web Application',
      type: 'web',
      description: 'Comprehensive property management system for real estate agencies with client management, property listings, and automated communications.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
      demo: '#',
      github: '#',
      features: ['Property Management', 'Client Portal', 'Automated Email', 'Analytics Dashboard'],
      icon: Home,
    },
    {
      title: 'Healthcare Management System',
      category: 'Full-Stack Application',
      type: 'web',
      description: 'HIPAA-compliant healthcare platform for appointment scheduling, patient records, and telemedicine consultations.',
      tech: ['Vue.js', 'Express', 'MongoDB', 'Socket.io', 'Docker'],
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg',
      demo: '#',
      github: '#',
      features: ['Patient Portal', 'Video Consultations', 'E-Prescriptions', 'Billing System'],
      icon: HeartPulse,
    },
    {
      title: 'Corporate Learning Platform',
      category: 'Web Application',
      type: 'web',
      description: 'Enterprise-grade LMS with course management, progress tracking, and certification system for corporate training.',
      tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe', 'Vercel'],
      image: 'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg',
      demo: '#',
      github: '#',
      features: ['Course Builder', 'Progress Tracking', 'Certificate Generation', 'Payment Integration'],
      icon: GraduationCap,
    },
    {
      title: 'Travel Booking System',
      category: 'Web Application',
      type: 'web',
      description: 'End-to-end travel booking platform with hotel reservations, flight booking, and itinerary management.',
      tech: ['React', 'NestJS', 'MySQL', 'Redis', 'Docker'],
      image: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg',
      demo: '#',
      github: '#',
      features: ['Multi-Vendor System', 'Real-time Bookings', 'Payment Gateway', 'Admin Dashboard'],
      icon: Car,
    },

    // Mobile Applications
    {
      title: 'Fitness Tracking App',
      category: 'Mobile Application',
      type: 'mobile',
      description: 'Cross-platform fitness app with workout tracking, nutrition logging, and social community features.',
      tech: ['React Native', 'Firebase', 'GraphQL', 'Expo'],
      image: 'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg',
      demo: '#',
      github: '#',
      features: ['Workout Plans', 'Progress Tracking', 'Social Feed', 'Nutrition Logging'],
      icon: HeartPulse,
    },
    {
      title: 'E-Wallet Mobile App',
      category: 'Mobile Application',
      type: 'mobile',
      description: 'Secure digital wallet application for money transfers, bill payments, and cryptocurrency trading.',
      tech: ['React Native', 'Node.js', 'MongoDB', 'WebSocket', 'Blockchain'],
      image: 'https://images.pexels.com/photos/4386471/pexels-photo-4386471.jpeg',
      demo: '#',
      github: '#',
      features: ['Secure Transactions', 'QR Payments', 'Crypto Trading', 'Budget Tracking'],
      icon: Shield,
    },

    // AI & ML Projects
    {
      title: 'AI Customer Support Bot',
      category: 'AI Chatbot',
      type: 'ai',
      description: 'Intelligent chatbot with NLP for 24/7 customer service, ticket routing, and sentiment analysis.',
      tech: ['Python', 'TensorFlow', 'OpenAI API', 'FastAPI', 'Redis'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
      demo: '#',
      github: '#',
      features: ['Natural Language Processing', 'Multi-language Support', 'Sentiment Analysis', 'Ticket Management'],
      icon: MessageSquare,
    },
    {
      title: 'Predictive Analytics Dashboard',
      category: 'AI & Data Science',
      type: 'ai',
      description: 'Real-time predictive analytics platform for business intelligence and data-driven decision making.',
      tech: ['Python', 'Pandas', 'Scikit-learn', 'React', 'D3.js'],
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg',
      demo: '#',
      github: '#',
      features: ['Real-time Analytics', 'Predictive Models', 'Data Visualization', 'Automated Reports'],
      icon: BarChart,
    },
    {
      title: 'Image Recognition System',
      category: 'Computer Vision',
      type: 'ai',
      description: 'Computer vision system for object detection and image classification with high accuracy.',
      tech: ['Python', 'TensorFlow', 'OpenCV', 'Flask', 'Docker'],
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg',
      demo: '#',
      github: '#',
      features: ['Object Detection', 'Image Classification', 'Real-time Processing', 'Custom Training'],
      icon: Cpu,
    },

    // E-Commerce Projects
    {
      title: 'Premium E-Commerce Platform',
      category: 'E-Commerce Solution',
      type: 'ecommerce',
      description: 'Advanced online marketplace with multi-vendor support, real-time inventory, and secure payments.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
      demo: '#',
      github: '#',
      features: ['Multi-vendor System', 'Real-time Inventory', 'Secure Payments', 'Admin Dashboard'],
      icon: ShoppingBag,
    },
    {
      title: 'Custom CMS for E-Commerce',
      category: 'E-Commerce',
      type: 'ecommerce',
      description: 'Custom content management system built specifically for e-commerce businesses.',
      tech: ['Next.js', 'Strapi', 'PostgreSQL', 'Cloudinary', 'Vercel'],
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg',
      demo: '#',
      github: '#',
      features: ['Product Management', 'SEO Optimization', 'Content Editor', 'Analytics'],
      icon: ShoppingBag,
    },

    // Cloud Solutions
    {
      title: 'Cloud-Based CRM Platform',
      category: 'Cloud Solution',
      type: 'cloud',
      description: 'Scalable customer relationship management system hosted on AWS with microservices architecture.',
      tech: ['React', 'AWS Lambda', 'DynamoDB', 'API Gateway', 'S3'],
      image: 'https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg',
      demo: '#',
      github: '#',
      features: ['Microservices Architecture', 'Scalable Infrastructure', 'Real-time Sync', 'Data Analytics'],
      icon: Cloud,
    },
    {
      title: 'Serverless Backend System',
      category: 'Cloud Architecture',
      type: 'cloud',
      description: 'Completely serverless backend infrastructure for high-performance applications.',
      tech: ['AWS Lambda', 'DynamoDB', 'API Gateway', 'Cognito', 'S3'],
      image: 'https://images.pexels.com/photos/355948/pexels-photo-355948.jpeg',
      demo: '#',
      github: '#',
      features: ['Serverless Functions', 'Auto-scaling', 'High Availability', 'Cost Optimization'],
      icon: Cloud,
    },

    // API Development
    {
      title: 'Payment Gateway API',
      category: 'API Development',
      type: 'api',
      description: 'Secure payment processing API with multi-currency support and fraud detection.',
      tech: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Docker'],
      image: 'https://images.pexels.com/photos/2115217/pexels-photo-2115217.jpeg',
      demo: '#',
      github: '#',
      features: ['Multi-currency', 'Fraud Detection', 'Webhook Support', 'Detailed Logging'],
      icon: Database,
    },
    {
      title: 'Third-Party Integration API',
      category: 'API Development',
      type: 'api',
      description: 'Comprehensive API for integrating with major third-party services and platforms.',
      tech: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Celery'],
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
      demo: '#',
      github: '#',
      features: ['RESTful Design', 'Rate Limiting', 'API Documentation', 'WebSocket Support'],
      icon: Database,
    },
  ];

  const stats = [
    { label: 'Total Projects', value: '12+' },
    { label: 'Client Satisfaction', value: '98%' },
    { label: 'On-Time Delivery', value: '95%' },
    { label: 'Technologies Used', value: '15+' },
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = selectedCategory === 'all' 
    ? (showAll ? projects : projects.slice(0, 6))
    : projects.filter(project => project.type === selectedCategory);

  return (
    <div className="bg-gray-950">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-gray-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              Project <span className="text-blue-500">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
              Discover our diverse range of successful projects spanning web applications, mobile apps, AI solutions, and cloud infrastructure.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
                  <p className="text-3xl font-bold text-blue-500 mb-2">{stat.value}</p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-12 bg-gray-900 sticky top-0 z-10 backdrop-blur-md bg-gray-900/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {projectCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setShowAll(true);
                }}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
                <span className="text-xs bg-gray-700 px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500 transition-all duration-300 hover:scale-105"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-gray-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full flex items-center space-x-1">
                      <project.icon className="w-3 h-3" />
                      <span>{project.category}</span>
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-300 mb-2">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {project.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs text-gray-400">
                          <Zap className="w-3 h-3 text-blue-500 mr-1" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-gray-800">
                    <a
                      href={project.demo}
                      className="flex items-center space-x-2 text-blue-500 hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Live Demo</span>
                    </a>
                    <a
                      href={project.github}
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <Code2 className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {!showAll && selectedCategory === 'all' && projects.length > 6 && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAll(true)}
                className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-all hover:scale-105"
              >
                Load More Projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Project Types Showcase */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Expertise Across Domains
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We deliver comprehensive solutions across various domains and technologies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Globe, label: 'Web Development', count: '50+ Projects' },
              { icon: Smartphone, label: 'Mobile Apps', count: '20+ Apps' },
              { icon: Cpu, label: 'AI Solutions', count: '15+ Projects' },
              { icon: Cloud, label: 'Cloud Services', count: '30+ Deployments' },
            ].map((item, index) => (
              <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center hover:border-blue-500 transition-colors">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.label}</h3>
                <p className="text-blue-400 text-sm">{item.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Have a Project Idea?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can turn your vision into a successful digital solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all hover:scale-105"
              >
                Start Your Project
              </a>
         
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}