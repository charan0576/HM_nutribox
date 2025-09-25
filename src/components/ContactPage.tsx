import React from 'react';
import { Phone, Mail, MapPin, Clock, User } from 'lucide-react';
import akhil from '../assets/akhil.jpg';
import sai from '../assets/sai.jpg';
import muni from '../assets/muni.jpg';
const ContactPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Get in touch with our team for any questions about our delivery plans or services
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Contact Information */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                <p className="text-gray-600 leading-relaxed">+91 7013773104</p>
                <p className="text-gray-600 leading-relaxed">+91 7386016059</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                <p className="text-gray-600 leading-relaxed">dollamunibabu502@gmail.com</p>
                <p className="text-gray-600 leading-relaxed">munibabudolla@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
                <p className="text-gray-600 leading-relaxed">
                  Police station area,Near pedda church<br />
                  Roypeta<br />
                  Narsapur<br />
                  West Godavari, Andhrapradesh - 534275
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Business Hours</h3>
                <p className="text-gray-600 leading-relaxed">
                  Monday - Saturday: Delivery Between 7:00 AM - 8:30 AM<br />
                  Sunday: Holiday<br />
                  <span className="text-sm text-gray-500">Delivery: Monday - Saturday</span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="font-semibold text-gray-800 mb-4">Quick Contact</h3>
            <a
              href="https://wa.me/7013773104"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
            >
              <Phone className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Meet Our Team</h2>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <img
                src={akhil}
                alt="D Akhil - Founder"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-gray-800">D Akhil</h3>
                <p className="text-green-600 font-medium">Founder & CEO</p>
                
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src={sai}
                alt="k Kumar sai - Co-Founder"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-gray-800">k Kumar sai</h3>
                <p className="text-blue-600 font-medium">Co-Founder</p>
                
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src={muni}
                alt="D Muni Babu - Quality Manager"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-gray-800">D Muni Babu</h3>
                <p className="text-purple-600 font-medium">Manager</p>
                
              </div>
            </div>

            
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-orange-50 rounded-xl">
            <h3 className="font-semibold text-gray-800 mb-3">Why Choose FreshBowl?</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                <span>Local family-owned business since 2025</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                <span>Direct partnerships with organic farms</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                <span>Over 50+ satisfied customers</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                <span>Same-day fresh sourcing guarantee</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Location Map Placeholder */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Visit Our Store</h2>
        <div className="bg-gradient-to-r from-green-100 to-orange-100 rounded-xl h-64 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-gray-500 mx-auto mb-4" />
            <p className="text-gray-600 font-medium">Interactive Map Coming Soon</p>
            
          </div>
        </div>
        <div className="mt-6 grid md:grid-cols-3 gap-4 text-center">
          <div className="p-4 bg-green-50 rounded-lg">
            <Clock className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <p className="font-medium text-gray-800">Store Hours</p>
            <p className="text-sm text-gray-600">Mon-Sat: 7 AM - 8:30 AM</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <Phone className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <p className="font-medium text-gray-800">Call Us</p>
            <p className="text-sm text-gray-600">+91 7013773104</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <MapPin className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <p className="font-medium text-gray-800">Parking</p>
            <p className="text-sm text-gray-600">Free customer parking</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;