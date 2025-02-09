import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { ChevronDown } from 'lucide-react';

import { useNavigate } from 'react-router-dom';

export default function Homepage() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const featuredStartups = [
    {
      logo: "/api/placeholder/200/200",
      name: "GreenSpace",
      description: "Innovative urban farming solutions transforming rooftops into productive spaces.",
      raise: "15",
      current: "10"
    },
    {
      logo: "/api/placeholder/200/200",
      name: "HealthHub",
      description: "Empowering patients with personalized telemedicine and remote monitoring solutions.",
      raise: "50",
      current: "32"
    },
    {
      logo: "/api/placeholder/200/200",
      name: "EcomEdge",
      description: "AI-driven ecommerce tool optimizing product listings, inventory, and sales growth.",
      raise: "25",
      current: "17"
    },
    {
      logo: "/api/placeholder/200/200",
      name: "EcoRider",
      description: "Eco-friendly electric bikes designed for urban commutes with a compact footprint.",
      raise: "20",
      current: "18"
    }
  ];

  const categories = [
    {
      title: "Tech & Software",
      description: "Cutting-edge solutions in software development, AI, and digital experiences.",
      logos: Array(9).fill("/api/placeholder/100/100")
    },
    {
      title: "Health & Wellness",
      description: "Discover startups focused on healthcare, wellness, and innovative solutions for a healthier lifestyle.",
      logos: Array(9).fill("/api/placeholder/100/100")
    },
    {
      title: "E-commerce & Retail",
      description: "Innovative e-commerce and retail startups offering smart retail solutions.",
      logos: Array(9).fill("/api/placeholder/100/100")
    }
  ];

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
    <div className="min-h-screen bg-purple-50">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
          <span className="font-bold text-xl">Startup Hub</span>
        </div>
        
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Services</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
        </div>
        
        <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="flex items-center justify-center">
          <img 
            src="/api/placeholder/500/400" 
            alt="Team illustration" 
            className="w-full max-w-md"
          />
        </div>

        <div>
          <span className="inline-block px-4 py-1 bg-purple-100 rounded-full text-sm text-purple-600">
            Welcome to Startup Hub
          </span>
          
          <h1 className="text-4xl md:text-5xl font-bold my-6">
            Launch Your Next Big Idea Today
          </h1>
          
          <p className="text-gray-600 mb-8">
            Join our community of innovators and entrepreneurs. Get the resources
            and support you need to turn your vision into reality.
          </p>

          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <div className="text-3xl font-bold text-blue-600">100+</div>
              <div className="text-gray-600">Active Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">50k+</div>
              <div className="text-gray-600">Community Members</div>
            </div>
          </div>

          <button 
            onClick={() => navigate('/dashboard')}
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 flex items-center space-x-2"
          >
            <span>Join Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Featured Startups Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-2">Promising Ventures At Your Fingertips</h2>
          <p className="text-gray-600">
            Discover Our Featured Startups
          </p>
          <p className="text-gray-500 text-sm">
            Explore a handpicked selection of high-growth start-ups, carefully curated for their innovation,
            impact, and growth potential.
          </p>
        </div>

        <div className="relative">
          <div className="flex overflow-hidden">
            <div 
              className="flex transition-transform duration-300" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {featuredStartups.map((startup, index) => (
                <div key={index} className="w-full min-w-full md:min-w-[50%] lg:min-w-[25%] p-4">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col h-full">
                    <div className="w-full h-32 bg-gray-50 rounded-lg mb-4 overflow-hidden">
                      <img src={startup.logo} alt={startup.name} className="w-full h-full object-contain p-4" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{startup.name}</h3>
                    <p className="text-gray-600 text-sm flex-grow mb-4">{startup.description}</p>
                    <div className="flex justify-between items-center text-sm">
                      <div>
                        <div className="text-gray-500">RAISE</div>
                        <div className="font-semibold">₹{startup.raise} Lakhs</div>
                      </div>
                      <div>
                        <div className="text-gray-500">CURRENT INVESTMENT</div>
                        <div className="font-semibold">₹{startup.current} Lakhs</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
            onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
            onClick={() => setCurrentSlide(Math.min(featuredStartups.length - 1, currentSlide + 1))}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Categories Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-2">Browse Start-ups by Category</h2>
            <p className="text-gray-500 text-sm">
              Easily navigate through different start-up categories to discover opportunities that match your
              investment focus. From tech innovations to sustainable solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-semibold text-lg mb-3">{category.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                <div className="grid grid-cols-3 gap-4">
                  {category.logos.map((logo, logoIndex) => (
                    <div key={logoIndex} className="bg-gray-50 p-2 rounded-lg">
                      <img src={logo} alt="Company logo" className="w-full h-12 object-contain" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

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
    </div>
  );
}