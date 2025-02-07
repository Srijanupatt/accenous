import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Dashboard = () => {
  const [showMore, setShowMore] = useState(false);

  const assetTypes = [
    { id: 'online-business', label: 'Online Businesses' },
    { id: 'amazon', label: 'Amazon Stores & KDP' },
    { id: 'saas', label: 'SaaS' },
    { id: 'ecommerce', label: 'Ecommerce' },
    { id: 'apps', label: 'AI Apps & Tools' },
    { id: 'social', label: 'Social Media Account' }
  ];

  const industries = [
    { id: 'tech', label: 'Technology' },
    { id: 'education', label: 'Education' },
    { id: 'health', label: 'Health & Wellness' },
    { id: 'ecommerce-retail', label: 'E-commerce & Retail' },
    { id: 'entertainment', label: 'Entertainment' }
  ];

  const listingStatus = [
    { id: 'buy', label: 'Buy (2,103)' },
    { id: 'off-market', label: 'Off-Market (69.6K)' },
    { id: 'invest', label: 'Invest (10)' }
  ];

  return (
    <div className="w-64 bg-white p-4 border-r min-h-screen">
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium mb-2">Filter By</h3>
          <div className="relative">
            <input
              type="text"
              placeholder="Enter keyword"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <button className="absolute right-2 top-2 text-blue-500 text-sm">
              Clear
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-2">Listing Status</h3>
          <div className="space-y-2">
            {listingStatus.map((status) => (
              <label key={status.id} className="flex items-center space-x-2">
                <input type="checkbox" className="rounded text-blue-500" />
                <span className="text-sm">{status.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-2">Revenue-Generating</h3>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded text-blue-500" />
              <span className="text-sm">Yes</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded text-blue-500" />
              <span className="text-sm">No</span>
            </label>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-2">Asset Type</h3>
          <div className="space-y-2">
            {assetTypes.map((type) => (
              <label key={type.id} className="flex items-center space-x-2">
                <input type="checkbox" className="rounded text-blue-500" />
                <span className="text-sm">{type.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-2">Industry</h3>
          <div className="space-y-2">
            {industries.map((industry) => (
              <label key={industry.id} className="flex items-center space-x-2">
                <input type="checkbox" className="rounded text-blue-500" />
                <span className="text-sm">{industry.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          {['Monthly User', 'Monthly Revenue', 'Price Range', 'Age', 'Seller Location'].map((section) => (
            <button
              key={section}
              className="flex items-center justify-between w-full py-2 text-sm"
              onClick={() => setShowMore(!showMore)}
            >
              {section}
              <ChevronDown className="w-4 h-4" />
            </button>
          ))}
        </div>

        <button className="text-blue-500 text-sm">Show More Filters</button>
      </div>
    </div>
  );
};

export default Dashboard;