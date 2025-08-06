import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Info, Users } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-gray-800">ReactRouter App</h1>
            </div>
          </div>
          
          <div className="flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`
              }
            >
              <Home className="w-4 h-4 mr-2" />
              Home
            </NavLink>
            
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`
              }
            >
              <Info className="w-4 h-4 mr-2" />
              About
            </NavLink>
            
            <NavLink
              to="/user"
              className={({ isActive }) =>
                `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`
              }
            >
              <Users className="w-4 h-4 mr-2" />
              Users
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;