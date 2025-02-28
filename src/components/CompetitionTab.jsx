import React from 'react';

const CompetitionTab = () => {
  return (
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
  );
};

export default CompetitionTab;