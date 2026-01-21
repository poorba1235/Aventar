import { ExternalLink, Code2, Smartphone, Database, Cloud, Cpu, Globe, Shield, MessageSquare, Zap, BarChart, ShoppingBag, HeartPulse, Home, Car, GraduationCap } from 'lucide-react';
import React, { useState, useMemo, useCallback } from 'react';

// Lazy load images for better performance
const LazyImage = ({ src, alt, ...props }) => {
  const [loaded, setLoaded] = useState(false);
  
  return (
    <div className="relative h-48 overflow-hidden bg-gray-800">
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gray-700" />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-transform duration-500 ${
          loaded ? 'opacity-100' : 'opacity-0'
        } ${props.className || ''}`}
        {...props}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
    </div>
  );
};

export default function Portfolio() {
  const projectCategories = [
    {
      id: 'all',
      name: 'All',
      icon: Code2,
      count: 12,
    },
    {
      id: 'web',
      name: 'Web',
      icon: Globe,
      count: 4,
    },
    {
      id: 'mobile',
      name: 'Mobile',
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
      name: 'Cloud',
      icon: Cloud,
      count: 3,
    },
    {
      id: 'api',
      name: 'API',
      icon: Database,
      count: 2,
    },
  ];

  const projects = [
    // Web Applications
    {
      title: 'Real Estate CRM Platform',
      category: 'Web App',
      type: 'web',
      description: 'Comprehensive property management system for real estate agencies.',
      tech: ['React', 'Node.js', 'PostgreSQL'],
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
      demo: '#',
      github: '#',
      features: ['Property Management', 'Client Portal', 'Automated Email', 'Analytics'],
      icon: Home,
    },
    {
      title: 'Healthcare Management System',
      category: 'Full-Stack',
      type: 'web',
      description: 'HIPAA-compliant healthcare platform for patient management.',
      tech: ['Vue.js', 'Express', 'MongoDB'],
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg',
      demo: '#',
      github: '#',
      features: ['Patient Portal', 'Video Consultations', 'E-Prescriptions', 'Billing'],
      icon: HeartPulse,
    },
    {
      title: 'Corporate Learning Platform',
      category: 'LMS',
      type: 'web',
      description: 'Enterprise-grade learning management system.',
      tech: ['Next.js', 'Prisma', 'PostgreSQL'],
      image: 'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg',
      demo: '#',
      github: '#',
      features: ['Course Builder', 'Progress Tracking', 'Certificates', 'Payments'],
      icon: GraduationCap,
    },
    {
      title: 'Travel Booking System',
      category: 'Travel Tech',
      type: 'web',
      description: 'End-to-end travel booking platform.',
      tech: ['React', 'NestJS', 'MySQL'],
      image: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg',
      demo: '#',
      github: '#',
      features: ['Multi-Vendor', 'Real-time', 'Payments', 'Admin Dashboard'],
      icon: Car,
    },
    // Mobile Applications
    {
      title: 'Fitness Tracking App',
      category: 'Mobile App',
      type: 'mobile',
      description: 'Cross-platform fitness app with workout tracking.',
      tech: ['React Native', 'Firebase', 'GraphQL'],
      image: 'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg',
      demo: '#',
      github: '#',
      features: ['Workout Plans', 'Progress', 'Social Feed', 'Nutrition'],
      icon: HeartPulse,
    },
    {
      title: 'E-Wallet Mobile App',
      category: 'Fintech',
      type: 'mobile',
      description: 'Secure digital wallet for money transfers.',
      tech: ['React Native', 'Node.js', 'MongoDB'],
      image: 'https://images.pexels.com/photos/4386471/pexels-photo-4386471.jpeg',
      demo: '#',
      github: '#',
      features: ['Secure Payments', 'QR', 'Crypto', 'Budget'],
      icon: Shield,
    },
    // AI & ML Projects
    {
      title: 'AI Customer Support Bot',
      category: 'AI Chatbot',
      type: 'ai',
      description: 'Intelligent chatbot with NLP for customer service.',
      tech: ['Python', 'TensorFlow', 'OpenAI'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
      demo: '#',
      github: '#',
      features: ['NLP', 'Multi-language', 'Sentiment', 'Tickets'],
      icon: MessageSquare,
    },
    {
      title: 'Predictive Analytics Dashboard',
      category: 'Data Science',
      type: 'ai',
      description: 'Real-time analytics for business intelligence.',
      tech: ['Python', 'Pandas', 'Scikit-learn'],
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg',
      demo: '#',
      github: '#',
      features: ['Real-time', 'Predictions', 'Visualization', 'Reports'],
      icon: BarChart,
    },
    {
      title: 'Image Recognition System',
      category: 'Computer Vision',
      type: 'ai',
      description: 'Object detection and image classification.',
      tech: ['Python', 'TensorFlow', 'OpenCV'],
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg',
      demo: '#',
      github: '#',
      features: ['Object Detection', 'Classification', 'Real-time', 'Training'],
      icon: Cpu,
    },
    // E-Commerce Projects
    {
      title: 'Premium E-Commerce Platform',
      category: 'E-Commerce',
      type: 'ecommerce',
      description: 'Online marketplace with multi-vendor support.',
      tech: ['React', 'Node.js', 'PostgreSQL'],
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
      demo: '#',
      github: '#',
      features: ['Multi-vendor', 'Inventory', 'Payments', 'Dashboard'],
      icon: ShoppingBag,
    },
    {
      title: 'Custom CMS for E-Commerce',
      category: 'E-Commerce',
      type: 'ecommerce',
      description: 'Custom CMS for e-commerce businesses.',
      tech: ['Next.js', 'Strapi', 'PostgreSQL'],
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg',
      demo: '#',
      github: '#',
      features: ['Product Mgmt', 'SEO', 'Content Editor', 'Analytics'],
      icon: ShoppingBag,
    },
    // Cloud Solutions
    {
      title: 'Cloud-Based CRM Platform',
      category: 'Cloud',
      type: 'cloud',
      description: 'Scalable CRM on AWS with microservices.',
      tech: ['React', 'AWS Lambda', 'DynamoDB'],
      image: 'https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg',
      demo: '#',
      github: '#',
      features: ['Microservices', 'Scalable', 'Real-time', 'Analytics'],
      icon: Cloud,
    },
    {
      title: 'Serverless Backend System',
      category: 'Cloud',
      type: 'cloud',
      description: 'Serverless backend infrastructure.',
      tech: ['AWS Lambda', 'DynamoDB', 'API Gateway'],
      image: 'https://images.pexels.com/photos/355948/pexels-photo-355948.jpeg',
      demo: '#',
      github: '#',
      features: ['Serverless', 'Auto-scaling', 'High Availability', 'Cost'],
      icon: Cloud,
    },
    // API Development
    {
      title: 'Payment Gateway API',
      category: 'API',
      type: 'api',
      description: 'Secure payment processing API.',
      tech: ['Node.js', 'Express', 'MongoDB'],
      image: 'https://images.pexels.com/photos/2115217/pexels-photo-2115217.jpeg',
      demo: '#',
      github: '#',
      features: ['Multi-currency', 'Fraud Detection', 'Webhooks', 'Logging'],
      icon: Database,
    },
    {
      title: 'Third-Party Integration API',
      category: 'API',
      type: 'api',
      description: 'API for third-party services integration.',
      tech: ['Python', 'FastAPI', 'PostgreSQL'],
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
      demo: '#',
      github: '#',
      features: ['RESTful', 'Rate Limiting', 'Docs', 'WebSocket'],
      icon: Database,
    },
  ];

  const stats = [
    { label: 'Projects', value: '12+' },
    { label: 'Satisfaction', value: '98%' },
    { label: 'On-Time', value: '95%' },
    { label: 'Technologies', value: '15+' },
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showAll, setShowAll] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Memoize filtered projects for better performance
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') {
      return showAll ? projects : projects.slice(0, 6);
    }
    return projects.filter(project => project.type === selectedCategory);
  }, [selectedCategory, showAll, projects]);

  const handleCategoryClick = useCallback((categoryId) => {
    setIsLoading(true);
    setSelectedCategory(categoryId);
    setShowAll(true);
    
    // Simulate loading state for smoother UX
    setTimeout(() => setIsLoading(false), 100);
  }, []);

  const handleLoadMore = useCallback(() => {
    setIsLoading(true);
    setShowAll(true);
    setTimeout(() => setIsLoading(false), 100);
  }, []);

  return (
    <div className="bg-gray-950">
      {/* Hero Section */}
      <section className="relative py-12 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-gray-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
              Project <span className="text-blue-500">Portfolio</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8 md:mb-12 px-4">
              Discover our diverse range of successful projects spanning web applications, mobile apps, AI solutions, and cloud infrastructure.
            </p>

            {/* Stats - Mobile Optimized */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto mb-8 md:mb-12 px-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 text-center">
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-500 mb-1 sm:mb-2">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters - Mobile Scrollable */}
      <section className="py-4 sm:py-6 md:py-8 bg-gray-900 sticky top-0 z-10 backdrop-blur-md bg-gray-900/90">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex overflow-x-auto pb-2 sm:pb-0 hide-scrollbar space-x-2 sm:space-x-3">
            {projectCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`flex-shrink-0 flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-lg transition-all whitespace-nowrap ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span className="text-sm sm:text-base">{category.name}</span>
                <span className="text-xs bg-gray-700 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 md:py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {filteredProjects.map((project, index) => (
                  <div
                    key={index}
                    className="group bg-gray-900 border border-gray-800 rounded-lg sm:rounded-xl overflow-hidden hover:border-blue-500 transition-all duration-300 hover:scale-[1.02]"
                  >
                    {/* Project Image */}
                    <LazyImage
                      src={project.image}
                      alt={project.title}
                      className="group-hover:scale-105"
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 right-3">
                      <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full flex items-center space-x-1">
                        <project.icon className="w-3 h-3" />
                        <span>{project.category}</span>
                      </span>
                    </div>

                    {/* Project Content */}
                    <div className="p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 group-hover:text-blue-400 transition-colors line-clamp-1">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-2">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded border border-gray-700 whitespace-nowrap"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Features */}
                      <div className="mb-4">
                        <h4 className="text-xs sm:text-sm font-medium text-gray-300 mb-2">Features:</h4>
                        <ul className="grid grid-cols-2 gap-1.5 sm:gap-2">
                          {project.features.slice(0, 4).map((feature, idx) => (
                            <li key={idx} className="flex items-center text-xs text-gray-400">
                              <Zap className="w-3 h-3 text-blue-500 mr-1 flex-shrink-0" />
                              <span className="truncate">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center space-x-4 pt-3 sm:pt-4 border-t border-gray-800">
                        <a
                          href={project.demo}
                          className="flex items-center space-x-2 text-blue-500 hover:text-blue-400 transition-colors text-sm"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                        </a>
                        <a
                          href={project.github}
                          className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm"
                        >
                          <Code2 className="w-4 h-4" />
                          <span>Code</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More Button */}
              {!showAll && selectedCategory === 'all' && projects.length > 6 && (
                <div className="text-center mt-8 sm:mt-12">
                  <button
                    onClick={handleLoadMore}
                    className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-all hover:scale-105 active:scale-95"
                  >
                    Load More Projects
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Project Types Showcase */}
      <section className="py-12 md:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Our Expertise Across Domains
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              We deliver comprehensive solutions across various domains and technologies
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 px-4">
            {[
              { icon: Globe, label: 'Web Dev', count: '50+' },
              { icon: Smartphone, label: 'Mobile Apps', count: '20+' },
              { icon: Cpu, label: 'AI Solutions', count: '15+' },
              { icon: Cloud, label: 'Cloud', count: '30+' },
            ].map((item, index) => (
              <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-lg sm:rounded-xl p-4 sm:p-6 text-center hover:border-blue-500 transition-colors">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-1 sm:mb-2">{item.label}</h3>
                <p className="text-blue-400 text-xs sm:text-sm">{item.count} Projects</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 text-center mx-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              Have a Project Idea?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
              Let's discuss how we can turn your vision into a successful digital solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block bg-white text-blue-600 px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-100 transition-all hover:scale-105 active:scale-95"
              >
                Start Your Project
              </a>
              <a
                href="/portfolio"
                className="inline-block bg-blue-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-600 transition-all hover:scale-105 active:scale-95"
              >
                View All Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Custom CSS for scrollbar */}
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-1 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
        }
        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
      `}</style>
    </div>
  );
}
