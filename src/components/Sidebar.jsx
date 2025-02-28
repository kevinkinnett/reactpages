import React from 'react';

const Sidebar = ({ activeApp, setActiveApp, sidebarOpen }) => {
  const apps = [
    { 
      id: 'business-plan', 
      name: 'Business Plan Infographic', 
      icon: '📊'
    },
    { 
      id: 'stub-component', 
      name: 'Stubbed Component', 
      icon: '🧩'
    },
    { 
      id: 'future-app', 
      name: 'Future Application', 
      icon: '🚀'
    }
  ];

  return (
    <nav className="space-y-1 px-2">
      {apps.map((app) => (
        <button
          key={app.id}
          className={`
            flex items-center px-2 py-3 w-full rounded-md
            ${activeApp === app.id 
              ? 'bg-gray-900 text-white' 
              : 'text-gray-300 hover:bg-gray-700 hover:text-white'}
            ${sidebarOpen ? '' : 'justify-center'}
          `}
          onClick={() => setActiveApp(app.id)}
        >
          <span className="text-xl mr-3">{app.icon}</span>
          {sidebarOpen && <span className="text-sm font-medium">{app.name}</span>}
        </button>
      ))}
    </nav>
  );
};

export default Sidebar;