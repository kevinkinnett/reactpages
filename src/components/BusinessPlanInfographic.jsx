import React, { useState } from 'react';
import MarketTab from './BusinessPlanInfographic/MarketTab';
import FinancialTab from './BusinessPlanInfographic/FinancialTab';
import OperationsTab from './BusinessPlanInfographic/OperationsTab';
import CompetitionTab from './BusinessPlanInfographic/CompetitionTab';
import LegalTab from './BusinessPlanInfographic/LegalTab';
import AudioTab from './BusinessPlanInfographic/AudioTab';

// Simple icon components
const Camera = () => <span>📷</span>;
const Banknote = () => <span>💵</span>;
const Clock = () => <span>⏱️</span>;
const Users = () => <span>👥</span>;
const Scale = () => <span>⚖️</span>;
const Music = () => <span>🎵</span>;

const BusinessPlanInfographic = () => {
  const [activeTab, setActiveTab] = useState('market');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'market':
        return <MarketTab />;
      case 'financial':
        return <FinancialTab />;
      case 'operations':
        return <OperationsTab />;
      case 'competition':
        return <CompetitionTab />;
      case 'legal':
        return <LegalTab />;
      case 'audio':
        return <AudioTab />;
      default:
        return <MarketTab />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-6xl mx-auto">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-800 p-6 text-white">
        <h1 className="text-3xl font-bold">Advanced Imagery Company</h1>
        <h2 className="text-xl mt-2">North Georgia Business Plan</h2>
        <div className="mt-3 flex items-center">
          <a 
            href="https://sanewsbotdeveus2.blob.core.windows.net/my-podcast/reactpages/Business%20Plan%20-%20Google%20Docs.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-blue-200 flex items-center underline"
          >
            <span className="mr-1">📄</span> View Complete Business Plan PDF
          </a>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b overflow-x-auto">
        <button
          onClick={() => setActiveTab('market')}
          className={`px-6 py-3 font-medium flex items-center ${activeTab === 'market' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-blue-500'}`}
        >
          <Camera /> <span className="ml-2">Market Research</span>
        </button>
        <button
          onClick={() => setActiveTab('financial')}
          className={`px-6 py-3 font-medium flex items-center ${activeTab === 'financial' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-blue-500'}`}
        >
          <Banknote /> <span className="ml-2">Financial</span>
        </button>
        <button
          onClick={() => setActiveTab('operations')}
          className={`px-6 py-3 font-medium flex items-center ${activeTab === 'operations' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-blue-500'}`}
        >
          <Clock /> <span className="ml-2">Operations</span>
        </button>
        <button
          onClick={() => setActiveTab('competition')}
          className={`px-6 py-3 font-medium flex items-center ${activeTab === 'competition' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-blue-500'}`}
        >
          <Users /> <span className="ml-2">Competition</span>
        </button>
        <button
          onClick={() => setActiveTab('legal')}
          className={`px-6 py-3 font-medium flex items-center ${activeTab === 'legal' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-blue-500'}`}
        >
          <Scale /> <span className="ml-2">Legal</span>
        </button>
        <button
          onClick={() => setActiveTab('audio')}
          className={`px-6 py-3 font-medium flex items-center ${activeTab === 'audio' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-blue-500'}`}
        >
          <Music /> <span className="ml-2">Audio</span>
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {renderTabContent()}
      </div>

      {/* Footer */}
      <div className="bg-gray-50 p-6 mt-4">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Strategic Recommendations</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-bold text-blue-600">Short-Term (0-6 months)</h4>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
              <li>Target high-end real estate agents for initial clients</li>
              <li>Create compelling demos of advanced 3D tours</li>
              <li>Complete all legal requirements before launch</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-bold text-green-600">Mid-Term (6-12 months)</h4>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
              <li>Network at realtor and event planner meetings</li>
              <li>Build portfolio with diverse project types</li>
              <li>Refine workflow for maximum efficiency</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-bold text-purple-600">Long-Term (1-5 years)</h4>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
              <li>Expand team with trained specialists</li>
              <li>Develop proprietary viewing platform</li>
              <li>Pursue larger corporate and recurring contracts</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessPlanInfographic;