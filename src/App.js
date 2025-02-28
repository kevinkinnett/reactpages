import React, { useState } from 'react';
import './App.css';
import BusinessPlanInfographic from './components/BusinessPlanInfographic';
import StubbedComponent from './components/StubbedComponent';
import FutureApplication from './components/FutureApplication';
import Layout from './components/Layout';
import Sidebar from './components/Sidebar';

function App() {
  const [activeApp, setActiveApp] = useState('business-plan');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const renderActiveApp = () => {
    switch (activeApp) {
      case 'business-plan':
        return <BusinessPlanInfographic />;
      case 'stub-component':
        return <StubbedComponent />;
      case 'future-app':
        return <FutureApplication />;
      default:
        return <BusinessPlanInfographic />;
    }
  };

  return (
    <Layout>
      {{
        sidebar: <Sidebar 
                  activeApp={activeApp} 
                  setActiveApp={setActiveApp} 
                  sidebarOpen={sidebarOpen} 
                />,
        content: <div className="p-4 bg-gray-100 min-h-screen">
                  {renderActiveApp()}
                </div>
      }}
    </Layout>
  );
}

export default App;