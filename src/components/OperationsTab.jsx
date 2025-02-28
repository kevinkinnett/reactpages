import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const OperationsTab = () => {
  const timeCommitmentData = [
    { name: 'On-site Capture', value: 30 },
    { name: 'Post-processing', value: 50 },
    { name: 'Client Communication', value: 10 },
    { name: 'Marketing & Admin', value: 10 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  return (
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
              <li>Requires 20 hours/week of business work</li>
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
  );
};

export default OperationsTab;