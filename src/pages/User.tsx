import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { User as UserIcon, Mail, Phone, MapPin, Building, Globe, Loader, AlertCircle, ArrowLeft, ArrowRight } from 'lucide-react';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  company: {
    name: string;
    catchPhrase: string;
  };
}

const UserPage: React.FC = () => {
  const { userId } = useParams<{ userId?: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const currentUserId = userId ? parseInt(userId) : 1;

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${currentUserId}`);
        if (!response.ok) {
          throw new Error('User not found');
        }
        const userData = await response.json();
        setUser(userData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch user data');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [currentUserId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-cyan-100 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <Loader className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Loading User Data</h2>
          <p className="text-gray-600">Please wait while we fetch the user information...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center max-w-md">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Oops! Something went wrong</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <Link
            to="/user/1"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Try User 1
          </Link>
        </div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-cyan-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header with Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">User Profile</h1>
            <p className="text-gray-600">Viewing details for user #{currentUserId}</p>
          </div>
          
          <div className="flex items-center space-x-2 mt-4 sm:mt-0">
            <Link
              to={`/user/${Math.max(1, currentUserId - 1)}`}
              className={`inline-flex items-center px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                currentUserId === 1 
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
              }`}
              onClick={(e) => currentUserId === 1 && e.preventDefault()}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous
            </Link>
            <Link
              to={`/user/${Math.min(10, currentUserId + 1)}`}
              className={`inline-flex items-center px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                currentUserId === 10 
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
              }`}
              onClick={(e) => currentUserId === 10 && e.preventDefault()}
            >
              Next
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>

        {/* User Profile Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
            <div className="flex items-center">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-6">
                <UserIcon className="w-10 h-10 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">{user.name}</h2>
                <p className="text-blue-100 text-lg">@{user.username}</p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                <Mail className="w-6 h-6 text-blue-600 mr-4" />
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <a href={`mailto:${user.email}`} className="text-blue-600 hover:text-blue-800 transition-colors">
                    {user.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center p-4 bg-green-50 rounded-lg">
                <Phone className="w-6 h-6 text-green-600 mr-4" />
                <div>
                  <p className="font-medium text-gray-900">Phone</p>
                  <a href={`tel:${user.phone}`} className="text-green-600 hover:text-green-800 transition-colors">
                    {user.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center p-4 bg-purple-50 rounded-lg">
                <Globe className="w-6 h-6 text-purple-600 mr-4" />
                <div>
                  <p className="font-medium text-gray-900">Website</p>
                  <a 
                    href={`http://${user.website}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-800 transition-colors"
                  >
                    {user.website}
                  </a>
                </div>
              </div>

              <div className="flex items-center p-4 bg-orange-50 rounded-lg">
                <MapPin className="w-6 h-6 text-orange-600 mr-4" />
                <div>
                  <p className="font-medium text-gray-900">Address</p>
                  <p className="text-orange-600">
                    {user.address.street}, {user.address.suite}<br />
                    {user.address.city} {user.address.zipcode}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Company Information */}
          <div className="border-t border-gray-200 p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Company Information</h3>
            <div className="flex items-start p-4 bg-gray-50 rounded-lg">
              <Building className="w-6 h-6 text-gray-600 mr-4 mt-1" />
              <div>
                <p className="font-medium text-gray-900 text-lg">{user.company.name}</p>
                <p className="text-gray-600 italic">"{user.company.catchPhrase}"</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick User Navigation */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Browse Other Users</h3>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) => (
              <Link
                key={id}
                to={`/user/${id}`}
                className={`p-3 rounded-lg text-center font-medium transition-colors duration-200 ${
                  id === currentUserId
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                User {id}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;