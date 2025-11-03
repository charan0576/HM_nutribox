import React from 'react';
import { Leaf, Truck, Clock, Shield, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import hm_logo from '../assets/hm_logo.jpeg';
const HomePage = ({ onNavigateToPlans }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="w-24 h-24  flex items-center justify-center mx-auto mb-6">
          <img 
  src={hm_logo} 
  style={{ borderRadius: "50%" }} 
  alt="logo"
/>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          Healthy<span className="text-green-600"> Handi</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Premium quality dry fruits, fresh fruits,Sprouts and vegetables delivered to your doorstep daily
        </p>
        <div className="mb-8">
          <button
            onClick={onNavigateToPlans}
            className="bg-gradient-to-r from-green-500 to-orange-500 hover:from-green-600 hover:to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View Our Plans
          </button>
        </div>
        <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Fresh Produce</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Handpicked fresh fruits and vegetables sourced directly from farms
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Daily Delivery</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Fresh deliveries Monday to Saturday right to your doorstep
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Flexible Plans</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Choose from 3 different plans tailored to your family's needs
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Quality Assured</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Premium quality dry fruits, nuts, and organic produce guaranteed
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose FreshBowl?</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Premium Quality:</strong> We source the finest dry fruits, nuts, fresh fruits, and vegetables from trusted suppliers
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Daily Fresh Delivery:</strong> Six days a week delivery ensures you always have fresh produce at home
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Customized Plans:</strong> Three different subscription plans to match your family size and preferences
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-3"></div>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Health Focused:</strong> Carefully curated selection promoting healthy eating and nutrition
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Fresh fruits"
              className="w-full h-32 object-cover rounded-lg"
            />
            <img
              src="https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Dry fruits"
              className="w-full h-32 object-cover rounded-lg"
            />
            <img
              src="https://imgs.search.brave.com/-TKpWYRE8LnGhJ8qQG9pxYgmcFANvj9Ma5tZfenJ0JQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcw/NDI4NTY3L3Bob3Rv/L2ZyZXNoLXNveS1i/ZWFuLXNwcm91dHMt/aW4td2lja2VyLWJh/c2tldC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9RWZVVFFV/MmFoakY1S1Jwa29S/M0FNUHVzdlJYREVY/X3NoRlNlazhaWV8t/TT0"
              alt="sprouts"
              className="w-full h-32 object-cover rounded-lg"
            />
            <img
              src="https://imgs.search.brave.com/KpS4OcchDUpziWBWgtodymQIi7LYJQa2j1_ofOnmecc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bW9uaWNhbmVkZWZm/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxOS8xMi9yb2Fz/dGVkLWJlZXRzLWFu/ZC1zd2VldC1wb3Rh/dG9lcy01MDB4NTAw/LmpwZy53ZWJw"
              alt="Healthy bowl"
              className="w-full h-32 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Follow Us</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Stay connected with us on social media for health tips, recipes, and updates
        </p>
        <div className="flex justify-center space-x-6">
          
          <a
            href="https://www.instagram.com/hm_nutribox?igsh=b2o2djQzNmhwNTh0"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center transition-all duration-300 group"
          >
            <Instagram className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
          </a>
          
          
        </div>
      </div>
    </div>
  );
};

export default HomePage;
