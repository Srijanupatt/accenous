
import React, { useState, useRef } from 'react';
import { ArrowRight, ChevronDown, Search, Filter, Grid2X2, LayoutList, Twitter, Facebook, Linkedin, Instagram, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

import featuredStartups from './featuredStartups.json';
import investors from './investors.json';
import filters from './filters.json';
import additionalFilters from './filter2.json';
import investments from './investments.json';
import heroImage from '../assets/image1.png';
import categories from './categories.json';
import Clarizone from '../assets/Clarizone Logo.png';

const FeaturedStartups = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredArrow, setHoveredArrow] = useState(null);
  const sliderRef = useRef(null);

  const scrollToSlide = (index) => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.offsetWidth;
      sliderRef.current.scrollTo({
        left: slideWidth * index,
        behavior: 'smooth'
      });
      setCurrentSlide(index);
    }
  };

  const handleNext = () => {
    const nextSlide = (currentSlide + 1) % featuredStartups.length;
    scrollToSlide(nextSlide);
  };

  const handlePrev = () => {
    const prevSlide = currentSlide === 0 ? featuredStartups.length - 1 : currentSlide - 1;
    scrollToSlide(prevSlide);
  };

  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollPosition = sliderRef.current.scrollLeft;
      const slideWidth = sliderRef.current.offsetWidth;
      const newIndex = Math.round(scrollPosition / slideWidth);
      if (newIndex !== currentSlide) {
        setCurrentSlide(newIndex);
      }
    }
  };

  return (
    <div className="relative px-10 py-6 ">
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-blue-30 shadow-lg hover:bg-blue-100 transition-all duration-300"
        onClick={handlePrev}
        onMouseEnter={() => setHoveredArrow('prev')}
        onMouseLeave={() => setHoveredArrow(null)}
      >
        <ChevronLeft className={`w-6 h-6 transition-transform duration-300 ${hoveredArrow === 'prev' ? '-translate-x-1' : ''}`} />
      </button>

      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2  rounded-full bg-whie shadow-lg hover:bg-blue-100 transition-all duration-300"
        onClick={handleNext}
        onMouseEnter={() => setHoveredArrow('next')}
        onMouseLeave={() => setHoveredArrow(null)}
      >
        <ChevronRight className={`w-6 h-6 transition-transform duration-300 ${hoveredArrow === 'next' ? 'translate-x-1' : ''}`} />
      </button>

      <div
        ref={sliderRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        onScroll={handleScroll}
      >
        {featuredStartups.map((startup, index) => (
          <div
            key={startup.name}
            className={`w-2xs ${index === currentSlide ? 'scale-100' : 'scale-95 opacity-70'}  snap-center bg-blue-70 rounded-lg shadow-xl p-4 mx-2 ` } 
          >
            <div className="h-40 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
              <img src={startup.logo} alt={startup.name} className="w-24 h-24 object-contain" />
            </div>
            <h3 className="text-xl font-semibold mb-2 ">{startup.name}</h3>
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
                <div
                  className="bg-gren-600 rounded-full h-2 transition-all duration-500"
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

      <div className="flex justify-center gap-2 mt-6">
        {featuredStartups.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-blue-600 w-4' : 'bg-gray-300'}`}
            onClick={() => scrollToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default function Homepage() {
  const navigate = useNavigate();

  const [viewType, setViewType] = useState('grid');
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
    });
  };

  return (
    <div className="min-h-screen bg-purple-50">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        <img src={Clarizone} alt="Clarizone Logo" className="w-32 md:w-40" />
        <div className="hidden md:flex space-x-6">
          <Link href="#" className="text-gray-600 text-l hover:text-gray-900">Home</Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">About</Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">Services</Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">Contact</Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">Print & Pricing</Link>
          <Link href="#" className="text-gray-600 hover:text-black">Contact</Link>
          <Link href="#" className="text-gray-600 hover:text-black">Feature</Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">products</Link>
        </div>
        <button className="bg-blue-600 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full hover:bg-blue-700 text-sm md:text-base">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-16 grid md:grid-cols-2 gap-8 items-center">
        <img src={heroImage} alt="Team illustration" className="w-full max-w-md mx-auto md:order-1" />
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
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Featured Startups Section */}
      <div className='gap-1.5'>
     <h1 className='text-4xl text-center gap-0.5'>Discover Our Featured StartUps</h1>
     <br />
        <h3 className='text-center gap-2'>Explore a handpicked selection of high-growth start-ups,carefully curated for their innovation impact and growth potential</h3>
      </div>
      <div className="max-w-7xl mx-auto px-2 py-4 md:py-16">
       <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Featured Startups</h2>
        <FeaturedStartups />
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
          <div className={`${showFilters ? "block" : "hidden"} md:block w-full md:w-64 transition-all duration-300`}>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-2">
                <h2 className="font-semibold">Filter By</h2>
                <button onClick={clearFilters} className="text-blue-600 text-sm">Clear</button>
              </div>
              <div className="space-y-6">
                {filters.map((section) => (
                  <div key={section.title} className=" pt-4">
                    <h3 className="font-medium mb-2 flex justify-between items-center">
                      {section.title}
                      <ChevronDown size={20} />
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
                    </div>
                  </div>
                ))}
                <div>
                  {additionalFilters.map((section1, index) => (
                    <h3 key={index} className="font-lg mb-2 flex border-t justify-between  items-center">
                      {section1.title}
                      <ChevronRight size={20} />
                    </h3>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <div className="w-full md:w-auto flex flex-col md:flex-row items-start md:items-center gap-2">
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
            <div className={`grid ${viewType === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-4`}>
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

       
        {/* Investors Section */}
        <div className="mt-8 md:mt-16">
          <h3 className="text-sm text-blue-600 font-semibold">Success Stories</h3>
          <h1 className="text-2xl md:text-3xl font-bold my-2">Trusted by Investors</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {investors.map((investor, index) => (
              <div key={index} className="p-4 bg-pink-50 rounded-lg">
                <div className=' bg-blue-95 rounded-xl'>
                <p className="text-gray-700 italic mb-4">"{investor.text}"</p>
                </div>
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
          <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
            <ChevronLeft size={16} />
          </button>
          {[1, 2, 3].map((page) => (
            <button key={page} className={`px-3 py-2 rounded-full ${page === 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
              {page}
            </button>
          ))}
          <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#EEF1FF] px-4 py-8 mt-8 w-full"cs>
        <div className="max-w-7xl mx-auto flex flex-col justify-between min-h-[200px]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left">
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
              <Link href="#" className="text-gray-900 hover:text-gray-700 font-medium">Home</Link>
              <Link href="#" className="text-gray-900 hover:text-gray-700 font-medium">How it Works</Link>
              <Link href="#" className="text-gray-900 hover:text-gray-700 font-medium">Plans & Pricing</Link>
              <Link href="#" className="text-gray-900 hover:text-gray-700 font-medium">Feature</Link>
              <Link href="#" className="text-gray-900 hover:text-gray-700 font-medium">Products</Link>
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
