import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const ChevronDown = () => <span>▼</span>;
const ChevronUp = () => <span>▲</span>;

const MarketTab = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section]
    });
  };

  const marketShareData = [
    { name: 'Real Estate', value: 45 },
    { name: 'Special Events', value: 25 },
    { name: 'Tourism', value: 15 },
    { name: 'Construction', value: 10 },
    { name: 'Other', value: 5 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  return (
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
  );
};

export default MarketTab;