import React, { useState } from 'react';
import { Home, Package, Phone, MessageCircle, ArrowLeft } from 'lucide-react';
import HomePage from './components/HomePage';
import PlansPage from './components/PlansPage';
import ContactPage from './components/ContactPage';
import PlanDetails from './components/PlanDetails';
import hm_logo from './assets/hm_logo.jpeg';
function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setActiveTab('plan-details');
  };

  const handleBackToPlans = () => {
    setSelectedPlan(null);
    setActiveTab('plans');
  };

  const renderContent = () => {
    if (activeTab === 'plan-details' && selectedPlan) {
      return <PlanDetails plan={selectedPlan} onBack={handleBackToPlans} />;
    }

    switch (activeTab) {
      case 'home':
        return <HomePage onNavigateToPlans={() => setActiveTab('plans')} />;
      case 'plans':
        return <PlansPage onPlanSelect={handlePlanSelect} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-orange-500 rounded-full flex items-center justify-center">
                <img src={hm_logo} />
              </div>
              <span className="text-xl font-bold text-gray-800">Healthy Handi</span>
            </div>

            {/* Navigation Items */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => setActiveTab('home')}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors duration-200 ${
                  activeTab === 'home'
                    ? 'text-green-600 bg-green-50'
                    : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                }`}
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </button>
              <button
                onClick={() => setActiveTab('plans')}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors duration-200 ${
                  activeTab === 'plans'
                    ? 'text-green-600 bg-green-50'
                    : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                }`}
              >
                <Package className="w-4 h-4" />
                <span>Plans</span>
              </button>
              <button
                onClick={() => setActiveTab('contact')}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors duration-200 ${
                  activeTab === 'contact'
                    ? 'text-green-600 bg-green-50'
                    : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                }`}
              >
                <Phone className="w-4 h-4" />
                <span>Contact</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <select
                value={activeTab}
                onChange={(e) => setActiveTab(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="home">Home</option>
                <option value="plans">Plans</option>
                <option value="contact">Contact</option>
              </select>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {renderContent()}
      </main>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/7013773104"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-50 group"
      >
        <MessageCircle className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
      </a>
    </div>
  );
}

export default App;
