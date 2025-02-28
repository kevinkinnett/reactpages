import React from 'react';

const FutureApplication = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-white">
          <h1 className="text-3xl font-bold">Future Application</h1>
          <p className="mt-2 opacity-90">Coming soon to our platform</p>
        </div>
        
        <div className="p-6">
          <div className="flex justify-center mb-8">
            <div className="text-9xl">🚀</div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Launch Countdown</h2>
              <div className="mt-3 flex space-x-4 justify-center">
                {['30', '12', '45', '10'].map((num, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="bg-gray-200 rounded-lg w-16 h-16 flex items-center justify-center text-2xl font-bold">
                      {num}
                    </div>
                    <div className="text-xs mt-1 text-gray-500">
                      {['Days', 'Hours', 'Minutes', 'Seconds'][i]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="border-t border-b py-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Features Preview</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { icon: '📱', title: 'Mobile Access', desc: 'Access from any device' },
                  { icon: '⚡', title: 'Real-time Updates', desc: 'Stay synchronized' },
                  { icon: '📊', title: 'Advanced Analytics', desc: 'Visualize your data' }
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <h4 className="font-medium text-gray-800">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Get Early Access</h3>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                We'll notify you when this application is ready for testing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureApplication;