import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const FinancialTab = () => {
  const revenueData = [
    { name: '6 Months', conservative: 12500, moderate: 27500, aggressive: 50000 },
    { name: '1 Year', conservative: 35000, moderate: 87500, aggressive: 175000 },
    { name: '5 Years', conservative: 80000, moderate: 300000, aggressive: 1000000 },
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
  );
};

export default FinancialTab;