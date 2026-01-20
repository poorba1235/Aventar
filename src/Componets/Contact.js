import React from "react";
import { MessageCircle, ExternalLink, Mail, Phone, Globe, Send,  Shield, Linkedin } from 'lucide-react';
import '../Styles/animation.css';

export default function Contact() {
  const contactLinks = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      link: "https://wa.me/94701553732",
      description: "Chat directly with me",
      color: "bg-gradient-to-br from-green-600 to-green-700"
    },

    {

       name: "LinkedIn",
      icon: Linkedin,
      link: "https://www.linkedin.com/in/poorna-malinhara-kuruppuarachchi-35743623a/",
      description: "Connect with me on LinkedIn",
      color: "bg-gradient-to-br from-blue-600 to-blue-700"
    },
    {
      name: "Fiverr",
      icon: ExternalLink,
      link: "https://fiverr.com/s/yvqqo4Z",
      description: "View my Fiverr profile",
      color: "bg-gradient-to-br from-green-500 to-green-600"
    },
    {
      name: "Email",
      icon: Mail,
      link: "mailto:kuruppuarachchi.poorna@gmail.com",
      description: "Send me an email",
      color: "bg-gradient-to-br from-blue-600 to-blue-700"
    },
    {
      name: "Phone",
      icon: Phone,
      link: "tel:+94701553732",
      description: "Call me directly",
      color: "bg-gradient-to-br from-purple-600 to-purple-700"
    }
  ];



  return (
    <div id="contact" className="bg-gray-950">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-gray-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              Let's <span className="text-blue-500">Connect</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to bring your ideas to life? Get in touch and let's start building something amazing together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column: Contact Form */}
            <div className="space-y-8">
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center space-x-3 mb-8">
                  <Send className="w-8 h-8 text-blue-500" />
                  <h3 className="text-3xl font-bold text-white">
                    Send a Message
                  </h3>
                </div>
                
                <form action="#" method="POST" className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-300 mb-2">
                        First name *
                      </label>
                      <input
                        type="text"
                        id="first-name"
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-300 mb-2">
                        Last name
                      </label>
                      <input
                        type="text"
                        id="last-name"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      placeholder="+94 701 553 732"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      rows="5"
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      placeholder="Tell me about your project, timeline, and budget..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-105 group"
                  >
                    <Send className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    <span className="text-lg">Send Message</span>
                  </button>
                </form>
              </div>

              {/* Quick Stats */}
         
            </div>

            {/* Right Column: Contact Information */}
            <div className="space-y-8">
              {/* Contact Values */}
              

              {/* Quick Contact Links */}
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-white flex items-center space-x-3">
                  <Globe className="w-8 h-8 text-blue-500" />
                  <span>Quick Connect</span>
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {contactLinks.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${item.color} text-white p-5 rounded-xl transition-all duration-300 hover:scale-105 group`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="bg-white/20 p-2 rounded-lg">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div className="text-left">
                          <h4 className="font-bold text-sm">{item.name}</h4>
                          <p className="text-xs opacity-90">{item.description}</p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                  <Shield className="w-6 h-6 text-blue-500" />
                  <span>Contact Details</span>
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
                    <div className="bg-blue-900/30 p-2 rounded-lg">
                      <Phone className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">Phone</p>
                      <a href="tel:+94701553732" className="text-white font-semibold hover:text-blue-400 transition">
                        +94 701 553 732
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
                    <div className="bg-blue-900/30 p-2 rounded-lg">
                      <Mail className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">Email</p>
                      <a href="mailto:kuruppuarachchi.poorna@gmail.com" className="text-white font-semibold hover:text-blue-400 transition">
                        kuruppuarachchi.poorna@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Response Time Indicator */}
                <div className="mt-6 p-4 bg-blue-900/20 rounded-lg border border-blue-800/50">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <p className="text-green-400 font-semibold text-sm">Available Now</p>
                  </div>
                  <p className="text-gray-300 text-xs">
                    Quick responses guaranteed. Typically respond within 2-4 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section - Matching About Page */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Ready to transform your ideas into reality? Let's discuss your project and find the perfect solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/94701553732"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all hover:scale-105 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href="https://fiverr.com/s/yvqqo4Z"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all hover:scale-105 flex items-center justify-center space-x-2"
              >
                <ExternalLink className="w-5 h-5" />
                <span>View Fiverr Profile</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}