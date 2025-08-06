import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Zap, Shield } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-blue-600">ReactRouter App</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A modern multi-page React application showcasing React Router, API integration, 
            and beautiful UI design. Navigate seamlessly between pages and explore user data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/user"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Explore Users
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-200">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast & Modern</h3>
            <p className="text-gray-600">
              Built with the latest React technologies and optimized for performance and user experience.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-200">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Star className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Beautiful Design</h3>
            <p className="text-gray-600">
              Carefully crafted UI with attention to detail, smooth animations, and responsive design.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-200">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Type Safe</h3>
            <p className="text-gray-600">
              Built with TypeScript for better development experience and fewer runtime errors.
            </p>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Navigation</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              to="/user/1"
              className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="font-semibold text-blue-600">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">View User 1</h3>
                <p className="text-gray-600 text-sm">Leanne Graham</p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 ml-auto" />
            </Link>

            <Link
              to="/user/2"
              className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <span className="font-semibold text-green-600">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">View User 2</h3>
                <p className="text-gray-600 text-sm">Ervin Howell</p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 ml-auto" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;