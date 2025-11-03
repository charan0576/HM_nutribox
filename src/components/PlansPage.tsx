import React from 'react';
import { Check, Star, Crown, Gem, Award } from 'lucide-react';


const PlansPage = ({ onPlanSelect }) => {
  const plans = [
    {
      id: 'regular',
      name: 'Jr.pack',
      price: 1600(for childrens),
      icon: Check,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      features: [
        'Basic dry fruits selection',
        '13 seasonal fruits',
        '3 fresh vegetables',
        'Monday to Saturday delivery',
        '4 fresh sproutes'
      ]
    },
    {
      id: 'golden',
      name: 'Standar pack',
      price: 2400(for one persons),
      icon: Star,
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      popular: true,
      features: [
        'Premium dry fruits selection',
        '13 seasonal fruits',
        '3 fresh vegetables',
        'Monday to Saturday delivery',
        'Premium packaging',
        '4 fresh sproutes'
      ]
    },
    {
      id: 'diamond',
      name: 'Jumbo pack',
      price: 4000(for two persons),
      icon: Gem,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      features: [
        'Luxury dry fruits selection',
        '13 exotic fruits',
        '3 organic vegetables',
        'Monday to Saturday delivery',
        'Luxury packaging',
        '4 fresh sproutes',
        'Nutritionist consultation'
      ]
    },
    
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Choose Your Plan</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Select the perfect plan for your family's fresh produce needs
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan) => {
          const IconComponent = plan.icon;
          return (
            <div
              key={plan.id}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${plan.borderColor} ${plan.bgColor} overflow-hidden group cursor-pointer`}
              onClick={() => onPlanSelect(plan)}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 text-sm font-medium rounded-bl-lg">
                  Most Popular
                </div>
              )}
              
              <div className="p-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                
                <div className="mb-6">
                  <span className="text-3xl font-bold text-gray-800">₹{plan.price}</span>
                  <span className="text-gray-500 ml-1">/month</span>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-600 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => onPlanSelect(plan)}
                  className={`w-full bg-gradient-to-r ${plan.color} text-white py-3 rounded-lg font-medium hover:opacity-90 transition-all duration-300 group-hover:scale-105`}
                >
                  View Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-12 text-center">
        <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">All Plans Include</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Check className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Quality Guarantee</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                100% fresh and quality assured products
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Check className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Flexible Delivery</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Monday to Saturday delivery schedule
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Check className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Easy Cancellation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Cancel or modify anytime with no penalty
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlansPage;
