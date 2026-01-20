import {
    Bot,
    Briefcase,
    Cloud,
    Code2,
    Globe,
    PaletteIcon,
    Plug,
    Smartphone,
    TrendingUp
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Web Application Development',
      description: 'Build modern, responsive web applications with cutting-edge technologies like React, Vue, and Angular. Deliver seamless user experiences across all devices.',
    },
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'End-to-end development solutions covering frontend, backend, databases, and deployment. Complete project lifecycle management from concept to production.',
    },
    {
      icon: Bot,
      title: 'AI-Powered Chatbots',
      description: 'Intelligent conversational interfaces that enhance customer engagement, automate support, and provide 24/7 assistance using advanced NLP and machine learning.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Application Development',
      description: 'Native and cross-platform mobile apps for iOS and Android. Create engaging mobile experiences that keep users connected on the go.',
    },
    {
      icon: Cloud,
      title: 'Cloud-Based Solutions ',
      description: 'Scalable, secure cloud infrastructure. Leverage serverless computing, containerization, and managed services for optimal performance and cost efficiency.',
    },
    {
      icon: Plug,
      title: 'API Development & Integration',
      description: 'Design and build robust RESTful and GraphQL APIs. Seamlessly integrate third-party services and create microservices architectures.',
    },
    {
      icon: TrendingUp,
      title: 'SEO & Digital Marketing',
      description: 'Drive organic traffic and improve search rankings. Comprehensive digital marketing strategies including content optimization and analytics.',
    },
    {
      icon: PaletteIcon,
      title: 'Graphic Design',
      description: 'Creative visual solutions including branding, UI/UX design, marketing materials, and digital assets that capture attention and convey your message.',
    },
   
    {
      icon: Briefcase,
      title: 'Custom Business Solutions',
      description: 'Tailored software solutions designed specifically for your unique business needs. From CRM systems to workflow automation and beyond.',
    },
  ];

  return (
    <div className="bg-gray-950">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-gray-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              Our <span className="text-blue-500">Services</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive digital solutions to transform your business and accelerate growth.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gray-900 border border-gray-800 hover:border-blue-500 rounded-xl p-8 transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Tailored Solutions for Every Business Need
              </h2>
              <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                We understand that every business is unique. That's why we don't believe in one-size-fits-all solutions. Our team works closely with you to understand your specific challenges, goals, and requirements.
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                From initial consultation to final deployment and beyond, we're committed to delivering solutions that not only meet but exceed your expectations. Our collaborative approach ensures transparency and keeps you involved throughout the development process.
              </p>
              <a
                href="/contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105"
              >
                Discuss Your Project
              </a>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Discovery & Planning</h3>
                <p className="text-gray-400">
                  We start by understanding your vision, analyzing requirements, and creating a detailed project roadmap.
                </p>
              </div>
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Design & Development</h3>
                <p className="text-gray-400">
                  Our team designs intuitive interfaces and builds robust, scalable solutions using industry best practices.
                </p>
              </div>
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Testing & Deployment</h3>
                <p className="text-gray-400">
                  Rigorous testing ensures quality, followed by smooth deployment and comprehensive training for your team.
                </p>
              </div>
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Support & Maintenance</h3>
                <p className="text-gray-400">
                  Ongoing support and maintenance to keep your solutions running smoothly and evolving with your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Let's discuss how our services can help your business thrive in the digital age.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105"
          >
            Request a Quote
          </a>
        </div>
      </section>
    </div>
  );
}
