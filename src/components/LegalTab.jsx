import React from 'react';

const LegalTab = () => {
  return (
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
  );
};

export default LegalTab;