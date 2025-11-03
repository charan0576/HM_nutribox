import React from 'react';
import { ArrowLeft, Calendar, Package, Sprout } from 'lucide-react';
import hm_logo from '../assets/hm_logo.jpeg';
const PlanDetails = ({ plan, onBack }) => {
  const weeklySchedule = {
    regular: {
      Monday: {
        dryFruits: ['2-variety among(Cashew nuts, Almonds, Pistachios, Watermelon seeds, Pumpkin seeds, Sunflower seeds, Figs, Walnuts, Dates, Raisins)'],
        fruits: ['2-variety among(Dragon fruit, Watermelon, Kiwi, Apple, Muskmelon, Orange, Papaya, Banana, Guava, Grapes, Custard apple, Lychee, Sapota, Green apple, Star fruit, Mango, Pineapple, Pomegranate)'],
        vegetables: ['1-variety among(Carrot, Keera, Beetroot, Sweet corn, Sweet potato)'],
        sproutes: ['1-variety among(Sprouts, Chickpeas, Groundnuts, Field beans, Green gram)']
      },
      Tuesday: {
        dryFruits: ['2-variety among(Cashew nuts, Almonds, Pistachios, Watermelon seeds, Pumpkin seeds, Sunflower seeds, Figs, Walnuts, Dates, Raisins)'],
        fruits: ['2-variety among(Dragon fruit, Watermelon, Kiwi, Apple, Muskmelon, Orange, Papaya, Banana, Guava, Grapes, Custard apple, Lychee, Sapota, Green apple, Star fruit, Mango, Pineapple, Pomegranate)'],
        vegetables: ['1-variety among(Carrot, Keera, Beetroot, Sweet corn, Sweet potato)'],
        sproutes: ['1-variety among(Sprouts, Chickpeas, Groundnuts, Field beans, Green gram)']
      },
      Wednesday: {
        dryFruits: ['2-variety among(Cashew nuts, Almonds, Pistachios, Watermelon seeds, Pumpkin seeds, Sunflower seeds, Figs, Walnuts, Dates, Raisins)'],
        fruits: ['2-variety among(Dragon fruit, Watermelon, Kiwi, Apple, Muskmelon, Orange, Papaya, Banana, Guava, Grapes, Custard apple, Lychee, Sapota, Green apple, Star fruit, Mango, Pineapple, Pomegranate)'],
        vegetables: ['1-variety among(Carrot, Keera, Beetroot, Sweet corn, Sweet potato)'],
        sproutes: ['1-variety among(Sprouts, Chickpeas, Groundnuts, Field beans, Green gram)']
      },
      Thursday: {
        dryFruits: ['2-variety among(Cashew nuts, Almonds, Pistachios, Watermelon seeds, Pumpkin seeds, Sunflower seeds, Figs, Walnuts, Dates, Raisins)'],
        fruits: ['2-variety among(Dragon fruit, Watermelon, Kiwi, Apple, Muskmelon, Orange, Papaya, Banana, Guava, Grapes, Custard apple, Lychee, Sapota, Green apple, Star fruit, Mango, Pineapple, Pomegranate)'],
        vegetables: ['1-variety among(Carrot, Keera, Beetroot, Sweet corn, Sweet potato)'],
        sproutes: ['1-variety among(Sprouts, Chickpeas, Groundnuts, Field beans, Green gram)']
      },
      Friday: {
        dryFruits: ['2-variety among(Cashew nuts, Almonds, Pistachios, Watermelon seeds, Pumpkin seeds, Sunflower seeds, Figs, Walnuts, Dates, Raisins)'],
        fruits: ['2-variety among(Dragon fruit, Watermelon, Kiwi, Apple, Muskmelon, Orange, Papaya, Banana, Guava, Grapes, Custard apple, Lychee, Sapota, Green apple, Star fruit, Mango, Pineapple, Pomegranate)'],
        vegetables: ['1-variety among(Carrot, Keera, Beetroot, Sweet corn, Sweet potato)'],
        sproutes: ['1-variety among(Sprouts, Chickpeas, Groundnuts, Field beans, Green gram)']
      },
      Saturday: {
        dryFruits: ['2-variety among(Cashew nuts, Almonds, Pistachios, Watermelon seeds, Pumpkin seeds, Sunflower seeds, Figs, Walnuts, Dates, Raisins)'],
        fruits: ['2-variety among(Dragon fruit, Watermelon, Kiwi, Apple, Muskmelon, Orange, Papaya, Banana, Guava, Grapes, Custard apple, Lychee, Sapota, Green apple, Star fruit, Mango, Pineapple, Pomegranate)'],
        vegetables: ['1-variety among(Carrot, Keera, Beetroot, Sweet corn, Sweet potato)'],
        sproutes: ['1-variety among(Sprouts, Chickpeas, Groundnuts, Field beans, Green gram)']
      }
    },
    golden: {
      Monday: {
        dryFruits: ['1-variety among(Cashew nuts, Almonds, Pistachios, Watermelon seeds, Pumpkin seeds, Sunflower seeds, Figs, Walnuts, Dates, Raisins)'],
        fruits: ['5-variety among(Dragon fruit, Watermelon, Kiwi, Apple, Muskmelon, Orange, Papaya, Banana, Guava, Grapes, Custard apple, Lychee, Sapota, Green apple, Star fruit, Mango, Pineapple, Pomegranate)'],
        vegetables: ['2-variety among(Carrot, Keera, Beetroot, Sweet corn, Sweet potato)'],
        sproutes: ['1-variety among(Sprouts, Chickpeas, Groundnuts, Field beans, Green gram)']
      },
      Tuesday: {
        dryFruits: ['1-variety among(Cashew nuts, Almonds, Pistachios, Watermelon seeds, Pumpkin seeds, Sunflower seeds, Figs, Walnuts, Dates, Raisins)'],
        fruits: ['5-variety among(Dragon fruit, Watermelon, Kiwi, Apple, Muskmelon, Orange, Papaya, Banana, Guava, Grapes, Custard apple, Lychee, Sapota, Green apple, Star fruit, Mango, Pineapple, Pomegranate)'],
        vegetables: ['2-variety among(Carrot, Keera, Beetroot, Sweet corn, Sweet potato)'],
        sproutes: ['1-variety among(Sprouts, Chickpeas, Groundnuts, Field beans, Green gram)']
      },
      Wednesday: {
        dryFruits: ['1-variety among(Cashew nuts, Almonds, Pistachios, Watermelon seeds, Pumpkin seeds, Sunflower seeds, Figs, Walnuts, Dates, Raisins)'],
        fruits: ['5-variety among(Dragon fruit, Watermelon, Kiwi, Apple, Muskmelon, Orange, Papaya, Banana, Guava, Grapes, Custard apple, Lychee, Sapota, Green apple, Star fruit, Mango, Pineapple, Pomegranate)'],
        vegetables: ['2-variety among(Carrot, Keera, Beetroot, Sweet corn, Sweet potato)'],
        sproutes: ['1-variety among(Sprouts, Chickpeas, Groundnuts, Field beans, Green gram)']
      },
      Thursday: {
        dryFruits: ['1-variety among(Cashew nuts, Almonds, Pistachios, Watermelon seeds, Pumpkin seeds, Sunflower seeds, Figs, Walnuts, Dates, Raisins)'],
        fruits: ['5-variety among(Dragon fruit, Watermelon, Kiwi, Apple, Muskmelon, Orange, Papaya, Banana, Guava, Grapes, Custard apple, Lychee, Sapota, Green apple, Star fruit, Mango, Pineapple, Pomegranate)'],
        vegetables: ['2-variety among(Carrot, Keera, Beetroot, Sweet corn, Sweet potato)'],
        sproutes: ['1-variety among(Sprouts, Chickpeas, Groundnuts, Field beans, Green gram)']
      },
      Friday: {
        dryFruits: ['1-variety among(Cashew nuts, Almonds, Pistachios, Watermelon seeds, Pumpkin seeds, Sunflower seeds, Figs, Walnuts, Dates, Raisins)'],
        fruits: ['5-variety among(Dragon fruit, Watermelon, Kiwi, Apple, Muskmelon, Orange, Papaya, Banana, Guava, Grapes, Custard apple, Lychee, Sapota, Green apple, Star fruit, Mango, Pineapple, Pomegranate)'],
        vegetables: ['2-variety among(Carrot, Keera, Beetroot, Sweet corn, Sweet potato)'],
        sproutes: ['1-variety among(Sprouts, Chickpeas, Groundnuts, Field beans, Green gram)']
      },
      Saturday: {
        dryFruits: ['1-variety among(Cashew nuts, Almonds, Pistachios, Watermelon seeds, Pumpkin seeds, Sunflower seeds, Figs, Walnuts, Dates, Raisins)'],
        fruits: ['5-variety among(Dragon fruit, Watermelon, Kiwi, Apple, Muskmelon, Orange, Papaya, Banana, Guava, Grapes, Custard apple, Lychee, Sapota, Green apple, Star fruit, Mango, Pineapple, Pomegranate)'],
        vegetables: ['2-variety among(Carrot, Keera, Beetroot, Sweet corn, Sweet potato)'],
        sproutes: ['1-variety among(Sprouts, Chickpeas, Groundnuts, Field beans, Green gram)']
      }
    },
    diamond: {
      Monday: {
        dryFruits: ['3-variety among(Cashew nuts, Almonds, Pistachios, Watermelon seeds, Pumpkin seeds, Sunflower seeds, Figs, Walnuts, Dates, Raisins)'],
        fruits: ['4-variety among(Dragon fruit, Watermelon, Kiwi, Apple, Muskmelon, Orange, Papaya, Banana, Guava, Grapes, Custard apple, Lychee, Sapota, Green apple, Star fruit, Mango, Pineapple, Pomegranate)'],
        vegetables: ['2-variety among(Carrot, Keera, Beetroot, Sweet corn, Sweet potato)'],
        sproutes: ['1-variety among(Sprouts, Chickpeas, Groundnuts, Field beans, Green gram)']
      },
      Tuesday: {
       dryFruits: ['3-variety among(Cashew nuts, Almonds, Pistachios, Watermelon seeds, Pumpkin seeds, Sunflower seeds, Figs, Walnuts, Dates, Raisins)'],
        fruits: ['4-variety among(Dragon fruit, Watermelon, Kiwi, Apple, Muskmelon, Orange, Papaya, Banana, Guava, Grapes, Custard apple, Lychee, Sapota, Green apple, Star fruit, Mango, Pineapple, Pomegranate)'],
        vegetables: ['2-variety among(Carrot, Keera, Beetroot, Sweet corn, Sweet potato)'],
        sproutes: ['1-variety among(Sprouts, Chickpeas, Groundnuts, Field beans, Green gram)']
      },
      Wednesday: {
        dryFruits: ['3-variety among(Cashew nuts, Almonds, Pistachios, Watermelon seeds, Pumpkin seeds, Sunflower seeds, Figs, Walnuts, Dates, Raisins)'],
        fruits: ['4-variety among(Dragon fruit, Watermelon, Kiwi, Apple, Muskmelon, Orange, Papaya, Banana, Guava, Grapes, Custard apple, Lychee, Sapota, Green apple, Star fruit, Mango, Pineapple, Pomegranate)'],
        vegetables: ['2-variety among(Carrot, Keera, Beetroot, Sweet corn, Sweet potato)'],
        sproutes: ['1-variety among(Sprouts, Chickpeas, Groundnuts, Field beans, Green gram)']
      },
      Thursday: {
        dryFruits: ['3-variety among(Cashew nuts, Almonds, Pistachios, Watermelon seeds, Pumpkin seeds, Sunflower seeds, Figs, Walnuts, Dates, Raisins)'],
        fruits: ['4-variety among(Dragon fruit, Watermelon, Kiwi, Apple, Muskmelon, Orange, Papaya, Banana, Guava, Grapes, Custard apple, Lychee, Sapota, Green apple, Star fruit, Mango, Pineapple, Pomegranate)'],
        vegetables: ['2-variety among(Carrot, Keera, Beetroot, Sweet corn, Sweet potato)'],
        sproutes: ['1-variety among(Sprouts, Chickpeas, Groundnuts, Field beans, Green gram)']
      },
      Friday: {
        dryFruits: ['3-variety among(Cashew nuts, Almonds, Pistachios, Watermelon seeds, Pumpkin seeds, Sunflower seeds, Figs, Walnuts, Dates, Raisins)'],
        fruits: ['4-variety among(Dragon fruit, Watermelon, Kiwi, Apple, Muskmelon, Orange, Papaya, Banana, Guava, Grapes, Custard apple, Lychee, Sapota, Green apple, Star fruit, Mango, Pineapple, Pomegranate)'],
        vegetables: ['2-variety among(Carrot, Keera, Beetroot, Sweet corn, Sweet potato)'],
        sproutes: ['1-variety among(Sprouts, Chickpeas, Groundnuts, Field beans, Green gram)']
      },
      Saturday: {
        dryFruits: ['3-variety among(Cashew nuts, Almonds, Pistachios, Watermelon seeds, Pumpkin seeds, Sunflower seeds, Figs, Walnuts, Dates, Raisins)'],
        fruits: ['4-variety among(Dragon fruit, Watermelon, Kiwi, Apple, Muskmelon, Orange, Papaya, Banana, Guava, Grapes, Custard apple, Lychee, Sapota, Green apple, Star fruit, Mango, Pineapple, Pomegranate)'],
        vegetables: ['2-variety among(Carrot, Keera, Beetroot, Sweet corn, Sweet potato)'],
        sproutes: ['1-variety among(Sprouts, Chickpeas, Groundnuts, Field beans, Green gram)']
      }
    },
    
  };

  const schedule = weeklySchedule[plan.id];
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex items-center mb-8">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Plans</span>
        </button>
      </div>

      {/* Plan Header */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{plan.name} - Weekly Schedule</h1>
            <p className="text-xl text-gray-600">₹{plan.price}/month • Monday to Saturday Delivery</p>
          </div>
          <div className={`w-20 h-20  flex items-center justify-center`}>
            <img src={hm_logo} style={{ borderRadius: "15%" }} 
  alt="logo" />
          </div>
        </div>
      </div>

      {/* Weekly Schedule */}
      <div className="grid gap-6">
        {days.map((day, index) => (
          <div key={day} className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className={`bg-gradient-to-r ${plan.color} p-6`}>
              <div className="flex items-center space-x-3">
                <Calendar className="w-6 h-6 text-white" />
                <h2 className="text-2xl font-bold text-white">{day}</h2>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Dry Fruits */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Dry Fruits & Nuts</span>
                  </h3>
                  <ul className="space-y-2">
                    {schedule[day].dryFruits.map((item, idx) => (
                      <li key={idx} className="text-gray-600 flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-orange-300 rounded-full"></div>
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Fruits */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Fresh Fruits</span>
                  </h3>
                  <ul className="space-y-2">
                    {schedule[day].fruits.map((item, idx) => (
                      <li key={idx} className="text-gray-600 flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-red-300 rounded-full"></div>
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* sproutes */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Sproutes</span>
                  </h3>
                  <ul className="space-y-2">
                    {schedule[day].sproutes.map((item, idx) => (
                      <li key={idx} className="text-gray-600 flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-300 rounded-full"></div>
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>


                {/* Vegetables */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Fresh Vegetables</span>
                  </h3>
                  <ul className="space-y-2">
                    {schedule[day].vegetables.map((item, idx) => (
                      <li key={idx} className="text-gray-600 flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-300 rounded-full"></div>
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 bg-white rounded-2xl shadow-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to Start Your {plan.name}?</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Contact us via WhatsApp to subscribe to this plan and start receiving fresh, quality produce daily.
        </p>
        <a
          href={`https://wa.me/918984576999`}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center space-x-2 bg-gradient-to-r ${plan.color} text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-all duration-300`}
        >
          <Package className="w-5 h-5" />
          <span>Subscribe to {plan.name}</span>
        </a>
      </div>
    </div>
  );
};

export default PlanDetails;
