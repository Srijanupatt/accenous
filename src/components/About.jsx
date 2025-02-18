import React, { useState } from 'react';
import { ArrowRight, ChevronDown, Search, Filter, Grid2X2, LayoutList,Twitter, Facebook, Linkedin, Instagram } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import heroImage from '../assets/image1.png';
import logo from '../assets/healthify.png';
import image2 from '../assets/image 26.png';
import  ecoliving from '../assets/image 28.png';
import GreenHive from '../assets/image 27.png';
import Clarizone from '../assets/Clarizone Logo.png';


export default function Homepage() {
  const navigate = useNavigate();
  const [viewType, setViewType] = useState('grid');

  const filters = [
    {
      title: 'Listing Status',
      options: [
        { id: 'buy', label: 'Buy (3/63)', checked: true },
        { id: 'off-market', label: 'Off-Market (69/64)', checked: false },
        { id: 'invest', label: 'Invest (10)', checked: false },
      ]
    },
    {
      title: 'Revenue-Generating',
      options: [
        { id: 'yes', label: 'Yes', checked: true },
        { id: 'no', label: 'No', checked: false },
      ]
    },
    {
      title: 'Asset Type',
      options: [
        { id: 'online-business', label: 'Online Businesses', checked: true },
        { id: 'amazon', label: 'Amazon Stores & MOP', checked: false },
        { id: 'saas', label: 'SaaS', checked: false },
        { id: 'ecommerce', label: 'E-commerce', checked: false },
        { id: 'apps', label: 'AI Apps & Tools', checked: false },
        { id: 'social', label: 'Social Media Account', checked: false },
      ]
    },
    {
      title: 'Industry',
      options: [
        { id: 'technology', label: 'Technology', checked: true },
        { id: 'education', label: 'Education', checked: false },
        { id: 'health', label: 'Health & Wellness', checked: false },
        { id: 'ecommerce-retail', label: 'E-commerce & Retail', checked: false },
        { id: 'entertainment', label: 'Entertainment', checked: false },
      ]
    }
  ];

  const investments = [
    {
      id: 1,
      name: 'Healthify',
      category: 'Health & Wellness',
      logo: logo,
      description: 'A health and wellness platform providing personalized fitness and diet plans. Connect with licensed nutritionists and the community.',
      monetization: 'Subscription and Affiliate Sales',
      Revenue: '₹8,43,250 per month',
      age: '5 Years',
      industry: 'Health & Wellness',
      type: 'SaaS Platform',
      value: '₹1,03,75,000'
    },
    {
      id: 2,
      name: 'EduMarket | Education',
      category: 'Education',
       logo: image2,
      description: 'Online learning marketplace helping educators connect with students and sell courses at scale.',
      monetization: 'Subscriptions and Services',
      revenue: '₹4,53,200 per month',
      age: '4 Years',
      industry: 'Education',
      type: 'Marketplace',
      value: '₹26,55,148'
    },{
      i:3,
      name: 'GreenHive Tech|Sustainability',
      logo : GreenHive,
      description: 'An eco focused startup that provides ,loT-based home gardening ,to reduce waste ,promote sustainable living.',
      monetization: 'Subscriptions and Services',
      revenue: '₹4,92,000 per month',
      age: '3 Years',
      industry: 'Education',
      type: 'Marketplace',
      value: '₹69,86,000'
    },
    {
      id:3,
      name: 'Ecoliving Hub | Marketplace',

      logo: ecoliving ,
      description: 'offering a curated section of products like eco friendly packaging ,organic apparel,and zero waste essentials ,this platfrom promptes a sustainable lifestyle',
      monetization: 'Sales ans Subscription MOdel',
      Net_Profit: '₹3,98,000 per month',
      age: '3 Years',
      industry: 'Eco-products',
      type: 'Marketplace',
      value: '₹69,86,000'
     
    }
    
  ];
  const testimonials = [
    {
      name: 'Priya Mehta',
      title: 'Founder of EcoGen Solutions',
      text: 'Clarizone has been a game-changer for us. Finding investors who believe in sustainable solutions was challenging, but this platform made the process so seamless and efficient.'
    },
    {
      name: 'Arun Gupta',
      title: 'Angel Investor, BrightFutures Network',
      text: "Clarizone has become my go-to platform for finding innovative start-ups. The intuitive features and detailed insights made my decision-making faster and more. It's not just a marketplace, it's a partner in growth!"
    },
    {
      name: 'Elena Martinez',
      title: 'Co-Founder of EduTech Spark',
      text: "Listing my start-up on Clarizone connected me with serious buyers faster than I could have imagined. The platform made everything easy and stress-free."
    },
    {
      name: 'Michael Brown',
      title: 'CEO of FitnessTrack Innovations',
      text: "Clarizone's tools have helped me secure partnerships and boost sales. From inquiries to transactions, the entire process has been easy and effective."
    },
    {
      name: 'Daniel Chen',
      title: 'Venture Capitalist at NextGen Capital',
      text: "Clarizone has a truly impressive range of start-up options and features that streamline the investment process. The detailed analytics and transparent information made it easy to make informed decisions."
    },
    {
      name: 'Sarah Williams',
      title: 'Small Business Owner, GreenBox Essentials',
      text: "As a new vendor, Clarizone helped me connect with customers looking for eco-friendly products like ours. The visibility we gained and the straightforward setup were incredible. It's more than just a platform."
    }
  ];
  
  
    const featuredStartups = [
      {
        name: 'Greenspace',
        logo: '/api/placeholder/200/200',
        description: 'Sustainable urban farming solutions transforming rooftops into productive green spaces',
        raise: '₹15 Lakhs',
        current: '₹10 Lakhs',
        progress: 85
      },
      {
        name: 'HealthHub',
        logo: '/api/placeholder/200/200',
        description: 'Empowering patients with personalized telemedicine and remote health monitoring',
        raise: '₹50 Lakhs',
        current: '₹24 Lakhs',
        progress: 80
      },
      {
        name: 'EcomEdge',
        logo: '/api/placeholder/200/200',
        description: 'E-commerce-focused retail optimizing product listings, inventory, and customer insights',
        raise: '₹25 Lakhs',
        current: '₹17 Lakhs',
        progress: 88
      },
      {
        name: 'EcoRider',
        logo: '/api/placeholder/200/200',
        description: 'Eco-friendly electric bikes designed for urban commutes with a compact design',
        raise: '₹20 Lakhs',
        current: '₹8 Lakhs',
        progress: 40
      }
    ];
  
    const categories = [
      {
        title: 'Tech & Software',
        description: 'Cutting-edge solutions in software development, AI, and digital transformation to help shape the digital experience.',
        companies: Array(9).fill('/api/placeholder/60/60')
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



  return (
    <div className="min-h-screen bg-purple-50">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <div >
          <img   src={Clarizone} alt="" />
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
          <img 
  src={heroImage}
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

      {/* Investment Explorer Section */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-8">
          <h2 className="text-blue-900 font-bold">Find invesment Opportunoties </h2>
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
              <button className="text-blue-600 text-sm">Clear</button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="font-medium mb-2 block">Keyword</label>
                <input
                  type="text"
                  placeholder="Enter keyword..."
                  className="w-full p-2 border rounded-lg"
                />
              </div>

              {filters.map((section) => (
                <div key={section.title} className="border-t pt-4">
                  <h3 className="font-medium mb-3 flex justify-between items-center">
                    {section.title}
                    <ChevronDown size={16} />
                  </h3>
                  <div className="space-y-2">
                    {section.options.map((option) => (
                      <label key={option.id} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={option.checked}
                          className="rounded border-gray-300"
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
                    className="pl-10 pr-4 py-2 border rounded-lg w-64"
                  />
                </div>
                <button 
                  className="border rounded-lg p-2"
                  onClick={() => setViewType('grid')}
                >
                  <Grid2X2 size={20} className={viewType === 'grid' ? 'text-blue-600' : 'text-gray-400'} />
                </button>
                <button 
                  className="border rounded-lg p-2"
                  onClick={() => setViewType('list')}
                >
                  <LayoutList size={20} className={viewType === 'list' ? 'text-blue-600' : 'text-gray-400'} />
                </button>
              </div>
              <div className="flex items-center space-x-4">
                <select className="border rounded-lg px-4 py-2">
                  <option>Default</option>
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
                <button className="flex items-center space-x-2 border rounded-lg px-4 py-2">
                  <Filter size={16} />
                  <span>Hide Filters</span>
                </button>
              </div>
            </div>

            {/* Compact Investment Cards Grid */}
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {investments.map((investment) => (
                <div key={investment.id} className="border rounded-lg overflow-hidden bg-white shadow-sm">
                  {/* Compact Logo Section */}
                  <div className="bg-teal-700 p-6 flex items-center justify-center">
                    <img
                      src={investment.logo}
                      alt={investment.name}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  
                  {/* Compact Content Section */}
                  <div className="p-3">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-md">{investment.name}</h3>
                        <p className="text-blue-600 text-xs">{investment.category}</p>
                     
                      </div>
                      <span className="text-xs px-1 py-0.5  bg-gray-100 rounded">Non-Profit</span>
                    </div>
                    
                    <p className="text-gray-600 text-xs mb-3 line-clamp-2">{investment.description}</p>
                    
                    <div className="space-y-1 mb-3">
                      {Object.entries({
                        'Monetization:': investment.monetization,
                        'NetProfot:': investment.revenue,
                        'Age:': investment.age,
                        'Industry:': investment.industry,
                        'Type:': investment.type
                      }).map(([label, value]) => (
                        <div key={label} className="flex items-center text-xs">
                          <span className="w-20 text-gray-500">{label}</span>
                          <span className="flex-1 truncate">{value}</span>
                        </div>
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
        <div>
        <h3 className="text-sm text-blue-600 font-semibold">Real Stories From The People</h3>
      <h1 className="text-3xl font-bold my-2 text-gray-900">Trusted by Visionaries, Entrepreneurs, and Investors Worldwide</h1>
      <p className="text-gray-600 max-w-2xl mx-auto mb-8">
        From buyers finding their perfect investment to vendors expanding their reach, each story reflects our commitment to empowering business growth.
      </p>
      </div>
    <div className="flex items-center justify-center space-x-4 p-4">
     
       <button className="px-3 py-2 rounded-full bg-gray-200  hover:bg-gray-300 transition">
        &larr;
      </button>
       {[1,2,3,4,5].map((page)=>(
         
         <button key={page}  className={`inline-flex jusitfy-center items-center rounded-full px-3 py-2 ${page === 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}` }> {page}</button>
        ))}
          {/* Right Arrow */}
      <button className="px-3 py-2 rounded-full bg-gray-200  hover:bg-gray-300 transition">
        &rarr;
      </button>
         </div>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {testimonials.map((t, index) => (
          <div key={index} className="p-4 bg-purple-50 rounded-lg shadow-sm">
            <p className="text-gray-700 italic mb-4">"{t.text}"</p>
            <div className="text-left">
              <h4 className="font-semibold text-gray-900">{t.name}</h4>
              <p className="text-sm text-gray-500">{t.title}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Footer Section */}
{/* Footer Section */}
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

    {/* Divider Line */}
    <div className="relative">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-200"></div>
      </div>
      <div className="relative flex justify-center">
        <div className="bg-[#EEF1FF] px-4">
        
        </div>
      </div>
    </div>

    {/* Lower Footer */}
    <div className="pt-8">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-2">
          <div text-blue-600>
          <img   src={Clarizone} alt="" />
          
          </div>
         
          
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-8">
          <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">How It Works</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Plans & Pricing</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Features</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Products</a>
        </div>

        {/* Social Icons */}
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
  </div>
</footer>
      </div>
    </div>
  );
  }
import React, { useState } from 'react';
import { ArrowRight, ChevronDown, Search, Filter, Grid2X2, LayoutList, Twitter, Facebook, Linkedin, Instagram, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import featuredStartups from './featuredStartups.json';
import investors from './investors.json';
import filters from './filters.json';
import filters1 from './filter2.json';
import investments from './investments.json';
import heroImage from '../assets/image1.png';
import categories from './categories.json';
import Clarizone from '../assets/Clarizone Logo.png';

export default function Homepage() {
  const navigate = useNavigate();

  const [viewType, setViewType] = useState('grid');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    'Listing Status': [],
    'Revenue-Generating': [],
    'Asset Type': [],
    'Industry': [],
     });

  const handleFilterChange = (filterTitle, optionId, isChecked) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterTitle]: isChecked 
        ? [...prev[filterTitle], optionId]
        : prev[filterTitle].filter(id => id !== optionId)
    }));
  };

  const clearFilters = () => {
    setSelectedFilters({
      'Listing Status': [],
      'Revenue-Generating': [],
      'Asset Type': [],
      'Industry': [],
      'monthlyUser':[],
     
    });
  };

  return (
    <div className="min-h-screen bg-purple-50">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        <img src={Clarizone} alt="Clarizone Logo" className="w-28 md:w-40"  />
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Services</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
        </div>
        <button className="bg-blue-600 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full hover:bg-blue-700 text-xs md:text-base">
          Get Started
        </button>
      </nav>
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-16 grid md:grid-cols-2 gap-6 md:gap-8 items-center">
        <img src={heroImage} alt="Team illustration" className="w-full max-w-[300px] mx-auto md:max-w-md md:order-1" />
        <div className="text-center md:text-left">
          <span className="inline-block px-3 py-1 bg-purple-100 rounded-full text-xs md:text-sm text-purple-600">
            Welcome to Startup Hub
          </span>
          <h1 className="text-3xl md:text-5xl font-bold my-4 md:my-6">
            Launch Your Next Big Idea Today
          </h1>
          <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base">
            Join our community of innovators and entrepreneurs.
          </p>
          <div className="grid grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-8">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-blue-600">100+</div>
              <div className="text-gray-600 text-xs md:text-sm">Active Projects</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-blue-600">50k+</div>
              <div className="text-gray-600 text-xs md:text-sm">Community Members</div>
            </div>
          </div>
          <button 
            onClick={() => navigate('/dashboard')}
            className="bg-blue-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-full hover:bg-blue-700 flex items-center space-x-2 mx-auto md:mx-0"
          >
            <span>Join Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      {/* Featured Startups Section */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
        <h1 className="text-xl md:text-3xl font-bold text-center mb-4">Featured Startups</h1>
        <div className="relative px-8">
          <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
            {featuredStartups.map((startup, index) => (
              <div key={startup.name} className="w-full min-w-full md:min-w-[400px] snap-center bg-white rounded-lg shadow-lg p-4 mx-2">
                <div className="h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <img src={startup.logo} alt={startup.name} className="w-24 h-24 object-contain" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{startup.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{startup.description}</p>
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
                    <div className="bg-blue-600 rounded-full h-2" style={{ width: ${startup.progress}% }} />
                  </div>
                  <div className="text-right text-sm text-blue-600 font-semibold">
                    {startup.progress}%
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {featuredStartups.map((_, index) => (
              <button
                key={index}
                className={w-2 h-2 rounded-full ${index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'}}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Browse Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <div key={category.title} className="bg-white rounded-lg shadow-lg p-4 md:p-6">
              <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
              <p className="text-gray-600 text-sm mb-6">{category.description}</p>
              <div className="grid grid-cols-3 gap-4">
                {category.companies.map((logo, index) => (
                  <div key={index} className="aspect-square bg-gray-50 rounded-lg flex items-center justify-center">
                    <img src={logo} alt="Company logo" className="w-3/4 h-3/4 object-contain" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Investment Explorer Section */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          {/* Filters Toggle */}
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            <Filter size={16} />
            <span>{showFilters ? 'Hide' : 'Show'} Filters</span>
          </button>

          {/* Filters Sidebar */}
          <div className={${showFilters ? "block" : "hidden"} md:block w-mid md:w-50 transition-all duration-300}>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-2">
                <h2 className="font-semibold">Filter By</h2>
                <button onClick={clearFilters} className="text-blue-600 text-sm">Clear</button>
              </div>
              <div className="space-y-6">
                {filters.map((section) => (
                  <div key={section.title} className="border-t pt-4">
                    <h3 className="font-medium mb-2 flex justify-between items-center">
                      {section.title}
                      <ChevronDown size={20}/>
                    </h3>
                    
                    <div className="space-y-2">
                      {section.options.map((option) => (
                        <label key={option.id} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            checked={selectedFilters[section.title].includes(option.id)}
                            onChange={(e) => handleFilterChange(section.title, option.id, e.target.checked)}
                          />
                         <span className="text-sm">{option.label}</span>
                     </label>
                      ))}
                        <button onClick={clearFilters} className="text-blue-600 text-sm">more</button>
                    </div>
                  </div>
                ))}
                <div className='space-x-3'>
                  {filters1.map((section1)=>(
                 <h3 className="font-medium mb-2 flex justify-between items-center border-t">
                  {section1.title}
                  <ChevronRight size={20}/>
                  </h3>
                   ))}               
                  </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 mb-6">
              <div className="w-full flex flex-col md:flex-row items-start md:items-center gap-2">
                <div className="relative w-full md:w-64">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <input
                    type="text"
                    placeholder="Search start-ups..."
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex gap-2">
                  <button onClick={() => setViewType('grid')} className="p-2 border rounded-lg">
                    <Grid2X2 size={20} className={viewType === 'grid' ? 'text-blue-600' : 'text-gray-400'} />
                  </button>
                  <button onClick={() => setViewType('list')} className="p-2 border rounded-lg">
                    <LayoutList size={20} className={viewType === 'list' ? 'text-blue-600' : 'text-gray-400'} />
                  </button>
                </div>
              </div>
              <div className="w-full md:w-auto flex flex-col md:flex-row gap-2">
                <select className="w-full md:w-48 p-2 border rounded-lg">
                  <option>Default</option>
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                </select>
                <button className="w-full md:w-auto flex items-center gap-2 p-2 border rounded-lg">
                  <Filter size={16} />
                  <span>Hide Filters</span>
                </button>
              </div>
            </div>

            {/* Investment Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {investments.map((investment) => (
                <div key={investment.id} className="border rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-blue-300 p-6 flex items-center justify-center">
                    <img src={investment.logo} alt={investment.name} className="w-16 h-16 object-contain" />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold">{investment.name}</h3>
                        <p className="text-blue-600 text-xs">{investment.category}</p>
                      </div>
                      <span className="text-xs px-2 py-1 bg-gray-100 rounded">Non-Profit</span>
                    </div>
                    <p className="text-gray-600 text-xs mb-3 line-clamp-2">{investment.description}</p>
                    <div className="space-y-1 mb-3">
                      <div className="flex items-center text-xs">
                        <span className="w-20 text-gray-500">Revenue:</span>
                        <span>{investment.revenue}</span>
                      </div>
                      <div className="flex items-center text-xs">
                        <span className="w-20 text-gray-500">Industry:</span>
                        <span>{investment.industry}</span>
                      </div>
                    </div>
                    <div className="text-md font-bold mb-2">{investment.value}</div>
                    <div className="flex gap-2">
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

        <div className="mt-8 md:mt-16 px-2">
          <h3 className="text-sm text-blue-600 font-semibold">Success Stories</h3>
          <h1 className="text-xl md:text-3xl font-bold my-2">Trusted by Investors</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {investors.map((investor, index) => (
              <div key={index} className="p-4 bg-purple-50 rounded-lg shadow-sm">
                <p className="text-gray-700 italic mb-4">"{investor.text}"</p>
                <div className="text-left">
                  <h4 className="font-semibold">{investor.name}</h4>
                  <p className="text-sm text-gray-500">{investor.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-8">
          <button className="p-1 md:p-2 rounded-full bg-gray-200 hover:bg-gray-300">
            <ChevronLeft size={16} />
          </button>
          {[1, 2, 3].map((page) => (
            <button key={page} className={px-3 py-2 rounded-full ${page === 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}}>
              {page}
            </button>
          ))}
          <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/Footer/}
      <footer className="bg-[#EEF1FF] px-4 py-8 mt-8 w-full">
      <div className="max-w-7xl mx-auto flex flex-col justify-between min-h-[200px]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
            <h2 className="text-xl md:text-3xl font-bold text-center md:text-left">
              Connecting Startups & Investors
            </h2>
            <div className="flex flex-col sm:flex-row gap-2">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
                Join Community
              </button>
              <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800">
                Contact Us
              </button>
            </div>
          </div>
          <div className="border-t border-gray-200 my-6"></div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <img src={Clarizone} alt="Clarizone Logo" className="w-32" />
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="text-gray-900 hover:text-gray-700 font-medium">Home</a>
              <a href="#" className="text-gray-900 hover:text-gray-700 font-medium">How it Works</a>
              <a href="#" className="text-gray-900 hover:text-gray-700 font-medium">Plans & Pricing</a>
              <a href="#" className="text-gray-900 hover:text-gray-700 font-medium">Feature</a>
              <a href="#" className="text-gray-900 hover:text-gray-700 font-medium">Products</a>
            </div>
            <div className="flex gap-4">
              <Linkedin className="w-5 h-5 text-blue-600 hover:text-blue-800" />
              <Instagram className="w-5 h-5 text-pink-600 hover:text-pink-800" />
              <Facebook className="w-5 h-5 text-blue-600 hover:text-blue-800" />
              <Twitter className="w-5 h-5 text-blue-400 hover:text-blue-600" />
            </div>
          </div>
        </div>
      </footer>
      
    </div>
  );
}