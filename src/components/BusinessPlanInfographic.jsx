import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Import these from lucide-react if you have it, or remove if not available
// If removing, replace the icon components with simple text or HTML entities
const Camera = () => <span>📷</span>;
const Banknote = () => <span>💵</span>;
const Clock = () => <span>⏱️</span>;
const Users = () => <span>👥</span>;
const Scale = () => <span>⚖️</span>;
const ChevronDown = () => <span>▼</span>;
const ChevronUp = () => <span>▲</span>;
const Info = () => <span>ℹ️</span>;

const BusinessPlanInfographic = () => {
  const [activeTab, setActiveTab] = useState('market');
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section]
    });
  };

  const revenueData = [
    { name: '6 Months', conservative: 12500, moderate: 27500, aggressive: 50000 },
    { name: '1 Year', conservative: 35000, moderate: 87500, aggressive: 175000 },
    { name: '5 Years', conservative: 80000, moderate: 300000, aggressive: 1000000 },
  ];

  const marketShareData = [
    { name: 'Real Estate', value: 45 },
    { name: 'Special Events', value: 25 },
    { name: 'Tourism', value: 15 },
    { name: 'Construction', value: 10 },
    { name: 'Other', value: 5 },
  ];

  const timeCommitmentData = [
    { name: 'On-site Capture', value: 30 },
    { name: 'Post-processing', value: 50 },
    { name: 'Client Communication', value: 10 },
    { name: 'Marketing & Admin', value: 10 },
  ];

  const startupCostsData = [
    { name: 'Equipment', value: 7500 },
    { name: 'Software', value: 1000 },
    { name: 'Insurance', value: 800 },
    { name: 'Marketing', value: 1000 },
    { name: 'Legal & Licensing', value: 500 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-6xl mx-auto">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-800 p-6 text-white">
        <h1 className="text-3xl font-bold">Advanced Imagery Company</h1>
        <h2 className="text-xl mt-2">North Georgia Business Plan</h2>
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
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {activeTab === 'market' && (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Target Market Segments</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={marketShareData}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {marketShareData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value}%`} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Market Insights</h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div 
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleSection('realEstate')}
                    >
                      <h4 className="font-bold text-blue-800">Real Estate Demand</h4>
                      {expandedSections.realEstate ? <ChevronUp /> : <ChevronDown />}
                    </div>
                    {expandedSections.realEstate && (
                      <div className="mt-2 text-sm">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>73% of homeowners prefer agents using professional photography</li>
                          <li>68% more deal closings with drone visuals</li>
                          <li>Market valued at $399M in 2023, projected $1.97B by 2033 (17.3% CAGR)</li>
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <div 
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleSection('events')}
                    >
                      <h4 className="font-bold text-green-800">Special Events</h4>
                      {expandedSections.events ? <ChevronUp /> : <ChevronDown />}
                    </div>
                    {expandedSections.events && (
                      <div className="mt-2 text-sm">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Wedding drone packages: $400-$1,000 for full-day coverage</li>
                          <li>Opportunity for 3D "digital twins" of venues</li>
                          <li>Event planners use models to virtually explore sites for planning</li>
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <div 
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleSection('other')}
                    >
                      <h4 className="font-bold text-yellow-800">Other Profitable Industries</h4>
                      {expandedSections.other ? <ChevronUp /> : <ChevronDown />}
                    </div>
                    {expandedSections.other && (
                      <div className="mt-2 text-sm">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Tourism & Historical Sites: VR tours of North GA attractions</li>
                          <li>Construction & Development: progress tracking with 3D models</li>
                          <li>Retail & Venues: immersive virtual store walkthrough experiences</li>
                          <li>Film & Gaming: realistic 3D environments for VFX in Atlanta's film industry</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-indigo-50 p-4 rounded-lg mt-6">
              <h3 className="text-lg font-bold text-indigo-800">Key Market Trends</h3>
              <p className="mt-2">Buyers and audiences now view virtual tours as a "must-have" rather than a novelty. Advanced technology like Gaussian splatting offers an opportunity to provide higher-quality visuals than standard 360° tours, tapping into clients willing to pay premium rates for top-tier results.</p>
            </div>
          </div>
        )}

        {activeTab === 'financial' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Revenue Projections</h3>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p>Projected revenue across different growth scenarios:</p>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={revenueData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis tickFormatter={(value) => `$${value/1000}k`} />
                  <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                  <Legend />
                  <Bar dataKey="conservative" name="Conservative" fill="#0088FE" />
                  <Bar dataKey="moderate" name="Moderate" fill="#00C49F" />
                  <Bar dataKey="aggressive" name="Aggressive" fill="#FFBB28" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="flex flex-col md:flex-row gap-8 mt-8">
              <div className="md:w-1/2">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Business Model Options</h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-800">One-Off Projects</h4>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                      <li>Real estate: $700-$1,500 per property model</li>
                      <li>Special events: $500-$2,000+ depending on scope</li>
                      <li>Immediate revenue for one-time client needs</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold text-green-800">Subscription / Retainer Services</h4>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                      <li>Monthly retainers: ~$2,000/month for set number of scans</li>
                      <li>Hosting/maintenance subscriptions for ongoing model access</li>
                      <li>More predictable income and long-term client relationships</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Startup Costs</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={startupCostsData}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      label={({ name, value }) => `${name}: $${value}`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {startupCostsData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `$${value}`} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="text-center text-sm text-gray-500">
                  Estimated total: $8,000-$15,000 initial investment
                </div>
              </div>
            </div>

            <div className="bg-indigo-50 p-4 rounded-lg mt-6">
              <h3 className="text-lg font-bold text-indigo-800">Financial Outlook Summary</h3>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li><span className="font-medium">First 6 Months:</span> Expect break-even or small net loss due to startup costs</li>
                <li><span className="font-medium">Year 1 (Moderate):</span> ~$80K revenue, ~$20K expenses, ~$60K pre-tax profit</li>
                <li><span className="font-medium">Year 5:</span> Potential for mid-to-high six figures with team expansion</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'operations' && (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Time Allocation</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={timeCommitmentData}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {timeCommitmentData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value}%`} />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="md:w-1/2">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Project Workflow</h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-800">Capture Phase</h4>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                      <li>Small property: 30-60 minutes drone flight</li>
                      <li>Interior 3D capture: additional 1-2 hours</li>
                      <li>Larger estates: several hours with multiple angles</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold text-green-800">Processing Phase</h4>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                      <li>Basic model: 2-3 hours with modern software/GPUs</li>
                      <li>Average home: 4-8 hours total post-processing</li>
                      <li>Complex property: 20+ hours for polished results</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Rest of the operations content */}
            {/* ... */}
          </div>
        )}

        {activeTab === 'competition' && (
          <div className="space-y-6">
            {/* Competition content */}
            {/* ... */}
          </div>
        )}

        {activeTab === 'legal' && (
          <div className="space-y-6">
            {/* Legal content */}
            {/* ... */}
          </div>
        )}
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