import { Target, Lightbulb, Heart, TrendingUp } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower businesses with innovative digital solutions that drive growth, efficiency, and success in the modern marketplace.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay at the forefront of technology, continuously learning and adapting to deliver cutting-edge solutions.',
    },
    {
      icon: Heart,
      title: 'Client Commitment',
      description: 'Your success is our success. We build lasting partnerships through transparency, communication, and dedication.',
    },
    {
      icon: TrendingUp,
      title: 'Quality Focus',
      description: 'Excellence is not negotiable. Every project receives meticulous attention to detail and rigorous quality standards.',
    },
  ];

  return (
    <div className="bg-gray-950">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-gray-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              About <span className="text-blue-500">Our Team</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A collective of passionate professionals dedicated to delivering exceptional digital solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white">
                Building Digital Excellence Since Day One
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                With over three years of combined industry and freelance experience, our team has established itself as a trusted partner for businesses seeking scalable, secure, and high-performance digital solutions.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Our journey began on platforms like Fiverr, where we honed our skills and built a reputation for delivering quality work. Today, we've grown into a collaborative team that tackles complex projects with expertise spanning full-stack development, AI integration, cloud architecture, and beyond.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                We believe in the power of collaboration. Every project benefits from diverse perspectives, specialized skills, and a shared commitment to excellence. This team-based approach ensures that your project receives comprehensive attention from planning through deployment.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-8 text-center">
                <p className="text-5xl font-bold text-white mb-2">3+</p>
                <p className="text-blue-100">Years of Experience</p>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 text-center border border-gray-700">
                <p className="text-5xl font-bold text-white mb-2">100+</p>
                <p className="text-gray-300">Projects Completed</p>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 text-center border border-gray-700">
                <p className="text-5xl font-bold text-white mb-2">50+</p>
                <p className="text-gray-300">Satisfied Clients</p>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-8 text-center">
                <p className="text-5xl font-bold text-white mb-2">10+</p>
                <p className="text-blue-100">Core Services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Principles that guide every decision and drive our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-gray-900 border border-gray-800 hover:border-blue-500 rounded-xl p-8 transition-all hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-colors">
                      <value.icon className="w-6 h-6 text-blue-500" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Ready to transform your ideas into reality? Our team is here to help you succeed.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all hover:scale-105"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
