import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-4">
        <div className="mb-8">
          <div className="text-9xl font-bold text-gray-300 mb-4">404</div>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-8"></div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-red-600" />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-gray-600 mb-8">
            Oops! The page you're looking for doesn't exist. It might have been moved, 
            deleted, or you entered the wrong URL.
          </p>

          <div className="space-y-4">
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl w-full justify-center"
            >
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center px-6 py-3 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-300 hover:bg-gray-50 transition-colors duration-200 w-full justify-center"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>
          </div>
        </div>

        {/* Helpful Links */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Try These Pages</h3>
          <div className="space-y-2">
            <Link
              to="/about"
              className="block p-3 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200"
            >
              📝 About Page
            </Link>
            <Link
              to="/user"
              className="block p-3 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200"
            >
              👥 User Directory
            </Link>
            <Link
              to="/user/1"
              className="block p-3 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200"
            >
              👤 User Profile (Sample)
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;