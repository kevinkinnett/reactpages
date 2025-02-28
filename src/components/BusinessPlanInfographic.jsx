import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Camera, Banknote, Clock, Users, Scale, ChevronDown, ChevronUp, Info } from 'lucide-react';

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
      <div className="flex border-b">
        <button
          onClick={() => setActiveTab('market')}
          className={`px-6 py-3 font-medium flex items-center ${activeTab === 'market' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-blue-500'}`}
        >
          <Camera size={20} className="mr-2" /> Market Research
        </button>
        <button
          onClick={() => setActiveTab('financial')}
          className={`px-6 py-3 font-medium flex items-center ${activeTab === 'financial' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-blue-500'}`}
        >
          <Banknote size={20} className="mr-2" /> Financial Projections
        </button>
        <button
          onClick={() => setActiveTab('operations')}
          className={`px-6 py-3 font-medium flex items-center ${activeTab === 'operations' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-blue-500'}`}
        >
          <Clock size={20} className="mr-2" /> Time & Operations
        </button>
        <button
          onClick={() => setActiveTab('competition')}
          className={`px-6 py-3 font-medium flex items-center ${activeTab === 'competition' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-blue-500'}`}
        >
          <Users size={20} className="mr-2" /> Competition
        </button>
        <button
          onClick={() => setActiveTab('legal')}
          className={`px-6 py-3 font-medium flex items-center ${activeTab === 'legal' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-blue-500'}`}
        >
          <Scale size={20} className="mr-2" /> Legal & Regulatory
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
                      {expandedSections.realEstate ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
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
                      {expandedSections.events ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
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
                      {expandedSections.other ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
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

            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Operational Models</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-800">Part-Time Operation</h4>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                    <li>Feasible early stage: ~$3,000/month potential</li>
                    <li>1 project per weekend + weeknight editing</li>
                    <li>Focus on smaller properties and events</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-green-800">Transition Phase</h4>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                    <li>Go full-time when side business matches primary income</li>
                    <li>Requires >20 hours/week of business work</li>
                    <li>Emergency fund from side-hustle income</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-bold text-yellow-800">Full-Time Operations</h4>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                    <li>3-5 projects per week is realistic solo</li>
                    <li>Shoot 3 days, process 2 days per week</li>
                    <li>Beyond 5 projects/week requires help</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-indigo-50 p-4 rounded-lg mt-6">
              <h3 className="text-lg font-bold text-indigo-800">Efficiency & Scaling Strategies</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div>
                  <h4 className="font-medium text-indigo-700">Workflow Optimization</h4>
                  <ul className="list-disc pl-5 text-sm">
                    <li>Standardized checklists for each project type</li>
                    <li>Autonomous drone flight modes for consistency</li>
                    <li>Better hardware reduces rendering times</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-indigo-700">Strategic Outsourcing</h4>
                  <ul className="list-disc pl-5 text-sm">
                    <li>Outsource post-processing to specialists</li>
                    <li>Hire part-time assistant for capture or editing</li>
                    <li>Delegate admin tasks as business grows</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'competition' && (
          <div className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-bold text-gray-800">Competitive Landscape Overview</h3>
              <p className="mt-2">The Atlanta/North Georgia market has various competitors offering pieces of the advanced imagery value chain, but few combine cutting-edge technologies (photogrammetry + Gaussian splatting + drone VR).</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-800">Traditional Real Estate Media Companies</h4>
                <div className="mt-2 space-y-2 text-sm">
                  <p className="font-medium">Services:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Basic listing photos and videos</li>
                    <li>Standard Matterport or Zillow 3D tours</li>
                  </ul>
                  <p className="font-medium mt-3">Pricing:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Matterport tours: ~$259 + $0.14/sqft</li>
                    <li>360° tours: ~$89 add-on</li>
                  </ul>
                  <p className="font-medium mt-3">Competitive Gap:</p>
                  <p>These firms focus on volume and quick turnaround, not high-fidelity. Advanced imaging can deliver superior quality at premium prices.</p>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold text-green-800">Drone Photography & Video Services</h4>
                <div className="mt-2 space-y-2 text-sm">
                  <p className="font-medium">Services:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Aerial photos and videos</li>
                    <li>Raw footage delivery</li>
                  </ul>
                  <p className="font-medium mt-3">Pricing:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>$200-$300 for basic drone photo shoot</li>
                    <li>Higher rates for video services</li>
                  </ul>
                  <p className="font-medium mt-3">Competitive Gap:</p>
                  <p>Most don't offer interactive 3D experiences or advanced photogrammetry capabilities that our business specializes in.</p>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-bold text-yellow-800">Specialized 3D Scanning Firms</h4>
                <div className="mt-2 space-y-2 text-sm">
                  <p className="font-medium">Services:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>LiDAR and industrial-grade scanning</li>
                    <li>Film/TV production services</li>
                  </ul>
                  <p className="font-medium mt-3">Target Market:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Large corporate clients</li>
                    <li>Film industry and high-budget productions</li>
                  </ul>
                  <p className="font-medium mt-3">Competitive Gap:</p>
                  <p>These high-end firms typically serve large-budget clients. Our business can occupy the middle market, offering advanced tech at more accessible prices.</p>
                </div>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-bold text-red-800">FPV/Creative Drone Videographers</h4>
                <div className="mt-2 space-y-2 text-sm">
                  <p className="font-medium">Services:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Dramatic property fly-throughs</li>
                    <li>Event highlight videos</li>
                  </ul>
                  <p className="font-medium mt-3">Competitive Gap:</p>
                  <p>While they create exciting footage, few create true interactive 3D models that clients can explore. Our business combines visual excitement with practical utility.</p>
                </div>
              </div>
            </div>

            <div className="bg-indigo-50 p-4 rounded-lg mt-6">
              <h3 className="text-lg font-bold text-indigo-800">Competitive Advantage Strategies</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                <div>
                  <h4 className="font-medium text-indigo-700">Education & Full-Service</h4>
                  <ul className="list-disc pl-5 text-sm">
                    <li>Educate clients on utilizing 3D models</li>
                    <li>Bundle multiple services into packages</li>
                    <li>Offer end-to-end solutions other competitors don't</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-indigo-700">Technology Leadership</h4>
                  <ul className="list-disc pl-5 text-sm">
                    <li>Continuously incorporate latest tech</li>
                    <li>Emphasize Gaussian splatting advantage</li>
                    <li>Custom-branded viewer platforms</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-indigo-700">Client Focus</h4>
                  <ul className="list-disc pl-5 text-sm">
                    <li>Personalized service over large firms</li>
                    <li>Quick turnaround times</li>
                    <li>Flexibility for special requests</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'legal' && (
          <div className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-bold text-gray-800">Legal & Regulatory Overview</h3>
              <p className="mt-2">Operating an advanced imagery company in Georgia requires compliance with various regulations including aviation laws, business licensing, and managing privacy/intellectual property concerns.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-800">FAA Drone Regulations</h4>
                <div className="mt-2 space-y-2 text-sm">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Part 107 Remote Pilot Certificate required</li>
                    <li>Certificate renewal every 24 months</li>
                    <li>400 ft altitude limit, visual line-of-sight required</li>
                    <li>Restrictions on flying over people/vehicles</li>
                    <li>Airspace authorization needed in some areas</li>
                    <li>Special waivers required for night operations</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold text-green-800">Business Licensing</h4>
                <div className="mt-2 space-y-2 text-sm">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Georgia business entity registration (LLC recommended)</li>
                    <li>Federal EIN (tax ID) required</li>
                    <li>Cobb County/Kennesaw business license</li>
                    <li>Georgia sales tax registration (digital goods taxable)</li>
                    <li>Home business regulations if operating from residence</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-bold text-yellow-800">Insurance & Liability</h4>
                <div className="mt-2 space-y-2 text-sm">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Commercial drone liability insurance ($1M+ coverage)</li>
                    <li>Equipment insurance for drone/camera gear</li>
                    <li>Liability limitation clauses in client contracts</li>
                    <li>Documentation of client permissions/releases</li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-bold text-red-800">Privacy & Property Rights</h4>
                <div className="mt-2 space-y-2 text-sm">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Written property owner permission for scanning</li>
                    <li>Avoid capturing neighboring properties without consent</li>
                    <li>Clear contracts defining model ownership and usage rights</li>
                    <li>Be mindful of copyright in buildings, art, music in events</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-indigo-50 p-4 rounded-lg mt-6">
              <h3 className="text-lg font-bold text-indigo-800">Compliance Checklist</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div>
                  <h4 className="font-medium text-indigo-700">Initial Setup</h4>
                  <ul className="list-disc pl-5 text-sm">
                    <li>Obtain FAA Part 107 certification</li>
                    <li>Register drones with the FAA</li>
                    <li>Form business entity and obtain licenses</li>
                    <li>Secure appropriate insurance coverage</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-indigo-700">Ongoing Compliance</h4>
                  <ul className="list-disc pl-5 text-sm">
                    <li>Maintain flight logs and equipment records</li>
                    <li>Use client contracts/releases for each project</li>
                    <li>Stay current with FAA rule changes</li>
                    <li>File required tax returns and renewals</li>
                  </ul>
                </div>
              </div>
            </div>
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