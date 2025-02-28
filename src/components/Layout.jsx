import React, { useState } from 'react';

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} flex flex-col bg-gray-800 text-white transition-all duration-300 ease-in-out`}>
        {/* Toggle button */}
        <button 
          onClick={toggleSidebar}
          className="p-4 border-b border-gray-700 text-center"
        >
          {sidebarOpen ? '◀️ Hide' : '▶️'}
        </button>
        
        {/* Sidebar content */}
        <div className="flex-1 overflow-y-auto py-4">
          {children.sidebar}
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        {children.content}
      </div>
    </div>
  );
};

export default Layout;