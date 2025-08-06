import React from 'react';
import { Code, Palette, Zap, Globe, Users, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About This Application</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of modern React development practices, beautiful design, and seamless user experience.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
            <p className="text-gray-600 mb-6">
              This React Router application demonstrates best practices in modern web development. 
              It features a clean, responsive design with smooth navigation between pages, 
              API integration for dynamic content, and thoughtful user interface design.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Technologies</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                <Code className="w-6 h-6 text-blue-600 mr-3" />
                <span className="font-medium">React 18 with TypeScript</span>
              </div>
              <div className="flex items-center p-3 bg-green-50 rounded-lg">
                <Globe className="w-6 h-6 text-green-600 mr-3" />
                <span className="font-medium">React Router v6</span>
              </div>
              <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                <Palette className="w-6 h-6 text-purple-600 mr-3" />
                <span className="font-medium">Tailwind CSS</span>
              </div>
              <div className="flex items-center p-3 bg-orange-50 rounded-lg">
                <Zap className="w-6 h-6 text-orange-600 mr-3" />
                <span className="font-medium">Vite Build Tool</span>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Features Implemented</h3>
            <ul className="space-y-2 mb-8">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                Multi-page navigation with React Router
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                Dynamic user routing with URL parameters
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                API integration with JSONPlaceholder
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                Loading states and error handling
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                Responsive design with mobile support
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                Active navigation state highlighting
              </li>
            </ul>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">5+</h3>
            <p className="text-gray-600">Components Built</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">10</h3>
            <p className="text-gray-600">Sample Users</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">100%</h3>
            <p className="text-gray-600">Made with Love</p>
          </div>
        </div>

        {/* Contact Card */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Explore?</h2>
          <p className="text-blue-100 mb-6">
            Navigate through the application to see all features in action. 
            Check out the user pages to see dynamic routing and API integration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Source Code
            </a>
            <a
              href="mailto:contact@example.com"
              className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;