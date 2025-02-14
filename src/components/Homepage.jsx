import React, { useState } from 'react';
import { ArrowRight, ChevronDown, Search, Filter, Grid2X2, LayoutList, Twitter, Facebook, Linkedin, Instagram, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import featuredStartups from './featuredStartups.json';
 import investors from  './investors.json';
// import filters from './filters.json';
import investments from './investments.json';
import heroImage from '../assets/image1.png';
import Clarizone from '../assets/Clarizone Logo.png';
export default function Homepage() {
  const navigate = useNavigate();
  const [viewType, setViewType] = useState('grid');
  const [currentSlide, setCurrentSlide] = useState(0);



  const categories = [
    {
      title: 'Tech & Software',
     companies: Array(9).fill('/api/placeholder/60/60'),
      description: 'Cutting-edge solutions in software development, AI, and digital transformation to help shape the digital experience.',
    },
    {
      title: 'Health & Wellness',
      description: 'Discover startups focused on healthcare, wellness, and innovative solutions for a healthier lifestyle.',
      companies: Array(9).fill('/api/placeholder/60/60')
    },
    {
      title: 'E-commerce & Retail',
      description: 'Innovative e-commerce and retail startups offering unique shopping experiences and smart retail solutions.',
      companies: Array(9).fill('/api/placeholder/60/60')
    }
  ];

  const filters = [
    {
      title: 'Listing Status',
      options: [
        { id: 'buy', label: 'Buy (3/63)' },
        { id: 'off-market', label: 'Off-Market (69/64)'},
        { id: 'invest', label: 'Invest (10)'},
      ]
    },
    {
      title: 'Revenue-Generating',
      options: [
        { id: 'yes', label: 'Yes' },
        { id: 'no', label: 'No' },
      ]
    },
    {
      title: 'Asset Type',
      options: [
        { id: 'online-business', label: 'Online Businesses' },
        { id: 'amazon', label: 'Amazon Stores & MOP' },
        { id: 'saas', label: 'SaaS' },
        { id: 'ecommerce', label: 'E-commerce' },
        { id: 'apps', label: 'AI Apps & Tools' },
        { id: 'social', label: 'Social Media Account' },
      ]
    },
    {
      title: 'Industry',
      options: [
        { id: 'technology', label: 'Technology' },
        { id: 'education', label: 'Education' },
        { id: 'health', label: 'Health & Wellness'},
        { id: 'ecommerce-retail', label: 'E-commerce & Retail'},
        { id: 'entertainment', label: 'Entertainment'},
      ]
    }
  ];
const handleSlideChange = (direction) => {
    if (direction === 'next') {
      setCurrentSlide((prev) => (prev + 1) % featuredStartups.length);
    } else {
      setCurrentSlide((prev) => (prev - 1 + featuredStartups.length) % featuredStartups.length);
    }
};

  return (
    <div className="min-h-screen bg-purple-50">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <div>
            <img src={Clarizone} alt="Clarizone Logo" />
          </div>
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
          <img src={heroImage} alt="Team illustration" className="w-full max-w-md" />
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
      <div className="max-w-7xl mx-auto px-3 py-2 mb-10 mt-5">
        <h1 className="text-3xl font-bold text-center mb-2">Discover Our Featured Startups</h1>
        <p className="text-center text-gray-600 mb-8">
          Explore a handpicked selection of high-growth startups, carefully curated for their innovation,
          impact, and growth potential.
        </p>

        {/* Carousel */}
        <div className="relative">
          <div className="flex gap-6 overflow-hidden">
           
 

{featuredStartups.map((startup,index) => (
  <div 
    key={startup.name} 
    className={`w-full min-w-[280px] bg-white rounded-lg shadow-lg p-4 transition-transform duration-300 transform ${
      index === currentSlide ? 'scale-100' : 'scale-95'
    }`}
  >
    <div className="h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
      <img src={startup.logo} alt={startup.name} className="w-24 h-24 object-contain" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{startup.name}</h3>
    <p className="text-gray-600 text-sm mb-4 h-20">{startup.description}</p>
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>RAISE</span>
        <span>CURRENT</span>
      </div>
      <div className="flex justify-between font-semibold">
        <span>{startup.raise}</span>
        <span>{startup.current}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-blue-600 rounded-full h-2"
          style={{ width: `${startup.progress}%` }}
        />
      </div>
      <div className="text-right text-sm text-blue-600 font-semibold">
        {startup.progress}%
      </div>
    </div>
  </div>
))}
          </div>
          <button 
            onClick={() => handleSlideChange('prev')}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={() => handleSlideChange('next')}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Carousel dots */}
        <div className="flex justify-center gap-2 mt-6">
          {featuredStartups.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold text-center mb-2">Browse Start-ups by Category</h2>
        <p className="text-center text-gray-600 mb-8">
          Easily navigate through different start-up categories to discover opportunities that match your
          investment focus. From tech innovations to sustainable solutions.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div key={category.title} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
              <p className="text-gray-600 text-sm mb-6">{category.description}</p>
              <div className="grid grid-cols-3 gap-4">
                {category.companies.map((logo, index) => (
                  <div
                    key={index}
                    className="aspect-square bg-gray-50 rounded-lg flex items-center justify-center p-2 hover:bg-gray-950-100 transition-colors duration-200"
                  >
                    <img src={logo} alt="Company logo" className="w-full h-full object-contain" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Investment Explorer Section */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-8">
          <h2 className="text-blue-900 font-bold">Find Investment Opportunities</h2>
          <h1 className="text-2xl font-bold mb-2">Explore Innovative Start-ups and Products</h1>
          <p className="text-gray-600">
            Explore a curated selection of promising startups across diverse industries. Find high-growth potential, 
            emerging innovations, and early-stage investments favored by visionary investors.
          </p>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold">Filter By</h2>
              <button className="text-blue-600 text-sm hover:text-blue-700">Clear</button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="font-medium mb-2 block">Keyword</label>
                <input
                  type="text"
                  placeholder="Enter keyword..."
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {filters.map((section, sectionIndex) => (
            <div key={sectionIndex} className="border-t pt-4">
              <h3 className="font-medium mb-3 flex justify-between items-center cursor-pointer hover:text-blue-600">
                {section.title}
                <ChevronDown size={16} />
              </h3>
              <div className="space-y-2">
                {section.options.map((option) => (
                  <label key={option.id} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm">{option.label}</span>
                  </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <input
                    type="text"
                    placeholder="Search start-ups..."
                    className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <button 
                  className="border rounded-lg p-2 hover:bg-gray-50"
                  onClick={() => setViewType('grid')}
                >
                  <Grid2X2 size={20} className={viewType === 'grid' ? 'text-blue-600' : 'text-gray-400'} />
                </button>
                <button 
                  className="border rounded-lg p-2 hover:bg-gray-50"
                  onClick={() => setViewType('list')}
                >
                  <LayoutList size={20} className={viewType === 'list' ? 'text-blue-600' : 'text-gray-400'} />
                </button>
              </div>
              <div className="flex items-center space-x-4">
                <select className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Default</option>
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
                <button className="flex items-center space-x-2 border rounded-lg px-4 py-2 hover:bg-gray-50">
                  <Filter size={16} />
                  <span>Hide Filters</span>
                </button>
              </div>
            </div>

            {/* Investment Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {investments.map((investment) => (
                <div key={investment.id} className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                  {/* Logo Section */}
                  <div className="bg-teal-700 p-6 flex items-center justify-center">
                    <img
                      src={investment.logo}
                      alt={investment.name}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-3">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-md">{investment.name}</h3>
                        <p className="text-blue-600 text-xs">{investment.category}</p>
                      </div>
                      <span className="text-xs px-1 py-0.5 bg-gray-100 rounded">Non-Profit</span>
                    </div>
                    
                    <p className="text-gray-600 text-xs mb-3 line-clamp-2">{investment.description}</p>
                    
                    <div className="space-y-1 mb-3">
                      {Object.entries({
                        'Monetization:': investment.monetization,
                        'Revenue:': investment.Revenue || investment.revenue,
                        'Age:': investment.age,
                        'Industry:': investment.industry,
                        'Type:': investment.type
                      }).map(([label, value]) => (
                        value && (
                          <div key={label} className="flex items-center text-xs">
                            <span className="w-20 text-gray-500">{label}</span>
                            <span className="flex-1 truncate">{value}</span>
                          </div>
                        )
                      ))}
                    </div>
                    
                    <div className="text-md font-bold mb-2">{investment.value}</div>
                    
                    <div className="flex space-x-2">
                      <button className="flex-1 px-2 py-1.5 border rounded-md text-xs hover:bg-gray-50">
                        Save
                      </button>
                      <button className="flex-1 px-2 py-1.5 bg-blue-600 text-white rounded-md text-xs hover:bg-blue-700">
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Investors Section */}
        <div className="mt-16">
          <h3 className="text-sm text-blue-600 font-semibold">Real Stories From The People</h3>
          <h1 className="text-3xl font-bold my-2 text-gray-900">Trusted by Visionaries, Entrepreneurs, and Investors Worldwide</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            From buyers finding their perfect investment to vendors expanding their reach, each story reflects our commitment to empowering business growth.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {investors.map((investors, index) => (
              <div key={index} className="p-4 bg-purple-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <p className="text-gray-700 italic mb-4">"{investors.text}"</p>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900">{investors.name}</h4>
                  <p className="text-sm text-gray-500">{investors.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center space-x-4 mt-8">
          <button className="px-3 py-2 rounded-full bg-gray-200 hover:bg-gray-300 transition">
            &larr;
          </button>
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className={`inline-flex justify-center items-center rounded-full px-3 py-2 ${
                page === 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {page}
            </button>
          ))}
          <button className="px-3 py-2 rounded-full bg-gray-200 hover:bg-gray-300 transition">
            &rarr;
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#EEF1FF] px-4 py-8 mt-16">
        <div className="max-w-7xl mx-auto">
          {/* Upper Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
            <h2 className="text-3xl font-bold text-gray-900">
              Connecting Start-Ups With Investors<br />
              To Fuel Innovation Globally.
            </h2>
            <div className="flex space-x-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">
                Join Our Community
              </button>
              <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800">
                Contact Us
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 my-8"></div>

          {/* Lower Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <img src={Clarizone} alt="Clarizone Logo" />
            </div>

            <div className="flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">How It Works</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Plans & Pricing</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Features</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Products</a>
            </div>

            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-950 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}