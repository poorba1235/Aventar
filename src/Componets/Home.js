import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Users, Clock, Zap, Award, TrendingUp } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: Award,
      title: '3+ Years Experience',
      description: 'Proven track record in delivering high-quality digital solutions across industries.',
    },
    {
      icon: Users,
      title: 'Team-Based Delivery',
      description: 'Collaborative approach with experienced professionals working together.',
    },
    {
      icon: Shield,
      title: 'Client-Focused Solutions',
      description: 'Tailored strategies that align with your business goals and requirements.',
    },
    {
      icon: Zap,
      title: 'Scalable & Secure Architecture',
      description: 'Built with modern technologies ensuring growth and protection.',
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'Committed to meeting deadlines without compromising quality.',
    },
    {
      icon: TrendingUp,
      title: 'Continuous Innovation',
      description: 'Staying ahead with latest technologies and industry best practices.',
    },
  ];

  return (
    <div className="bg-gray-950">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-gray-950 to-gray-950" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTIxMjEiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTMwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptLTMwIDBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00ek0zNiA2NGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6bS0zMCAwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHpNNiAzNGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              All Services in <span className="text-blue-500">One Place</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We provide scalable, secure, and high-performance digital solutions tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link
                to="/contact"
                className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center space-x-2 hover:scale-105"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-gray-700 hover:border-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <p className="text-4xl font-bold text-blue-500">3+</p>
              <p className="text-gray-400">Years Experience</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-blue-500">100+</p>
              <p className="text-gray-400">Projects Delivered</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-blue-500">50+</p>
              <p className="text-gray-400">Happy Clients</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-blue-500">10+</p>
              <p className="text-gray-400">Services Offered</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We combine experience, expertise, and innovation to deliver exceptional results for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-gray-800/50 hover:bg-gray-800 border border-gray-700 hover:border-blue-500 rounded-xl p-8 transition-all hover:scale-105"
              >
                <feature.icon className="w-12 h-12 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Let's discuss how we can help transform your ideas into reality.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
