import React, { useState, useRef, useEffect } from 'react';
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredArrow, setHoveredArrow] = useState(null);
  const [isVisible, setIsVisible] = useState({});
  const [filteredInvestments, setFilteredInvestments] = useState(investments);

  const sliderRef = useRef(null);

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

  const applyFilters = () => {
    const filtered = investments.filter(investment => {
      return Object.keys(selectedFilters).every(filterTitle => {
        if (selectedFilters[filterTitle].length === 0) return true;
        return selectedFilters[filterTitle].includes(investment[filterTitle.toLowerCase().replace(/ /g, '_')]);
      });
    });
    setFilteredInvestments(filtered);
  };

  useEffect(() => {
    applyFilters();
  }, [selectedFilters]);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.startup-card');
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, [currentSlide]);

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

  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(categories.length / itemsPerSlide);

  const handleNext = () => {
    const nextSlide = (currentSlide + 1) % totalSlides;
    scrollToSlide(nextSlide);
  };

  const handlePrev = () => {
    const prevSlide = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
    scrollToSlide(prevSlide);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        <img src={Clarizone} alt="Clarizone Logo" className="w-32 md:w-40" />
        <div className="hidden md:flex space-x-6">
          <Link to="#" className="text-gray-600 text-l hover:text-gray-900">Home</Link>
          <Link to="#" className="text-gray-600 hover:text-gray-900">About</Link>
          <Link to="#" className="text-gray-600 hover:text-gray-900">Services</Link>
          <Link to="#" className="text-gray-600 hover:text-gray-900">Contact</Link>
          <Link to="#" className="text-gray-600 hover:text-gray-900">Print & Pricing</Link>
          <Link to="#" className="text-gray-600 hover:text-black">Contact</Link>
          <Link to="#" className="text-gray-600 hover:text-black">Feature</Link>
          <Link to="#" className="text-gray-600 hover:text-gray-900">products</Link>
        </div>
        <button className="bg-blue-700 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full hover:bg-blue-700 text-sm md:text-base">
          Browser Start-ups
        </button>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-16 grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-none relative">
          <img src={heroImage} alt="Team illustration" className="w-full max-w-md mx-auto relative z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-200 opacity-50 z-0"></div>
        </div>
        <div className="text-center md:text-left order-1 md:order-none">
          <span className="inline-block px-3 py-1 bg-purple-100 rounded-full text-xs md:text-sm text-purple-600">
            Welcome to Startup Hub
          </span>
          <h1 className="text-3xl md:text-5xl font-bold my-4 md:my-6">
            Discover the Next Big innovative Oporunity in Start-Ups
          </h1>
          <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base">
            Explore a curated selection of promising startups startups across deverse indutries. Find high-growt potantial, emerging innovation, and early-stage invesment tailored for visionary investors.
          </p>
          <div className="grid grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-8">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-blue-600">5x+</div>
              <p className="text-sm md:text-base">increased Efficency</p>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-blue-600">70%</div>
              <div className="text-gray-600 text-xs md:text-sm">cl Efficency</div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Startups Section */}
      <div className="relative px-40 py-10 overflow-hidden">
        <div
          ref={sliderRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-4 transition-all duration-300 relative"
        >
          {/* Left Arrow */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-blue-50 transition-all duration-300"
            onClick={handlePrev}
            onMouseEnter={() => setHoveredArrow('prev')}
            onMouseLeave={() => setHoveredArrow(null)}
          >
            <ChevronLeft
              className={`w-6 h-6 transition-transform duration-300 ${
                hoveredArrow === 'prev' ? '-translate-x-1' : ''
              }`}
            />
          </button>

          {/* Right Arrow */}
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-blue-50 transition-all duration-300"
            onClick={handleNext}
            onMouseEnter={() => setHoveredArrow('next')}
            onMouseLeave={() => setHoveredArrow(null)}
          >
            <ChevronRight
              className={`w-6 h-6 transition-transform duration-300 ${
                hoveredArrow === 'next' ? 'translate-x-1' : ''
              }`}
            />
          </button>

          {/* Startup Cards */}
          {featuredStartups.slice(currentSlide * 4, (currentSlide + 1) * 4).map((startup, index) => (
            <div
              id={`startup-${currentSlide}-${index}`}
              key={`${startup.name}-${index}`}
              className={`bg-white border-1 startup-card transform transition-all duration-500 rounded-lg shadow-xl py-2 hover:scale-105 ${
                isVisible[`startup-${currentSlide}-${index}`]
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="relative groupv  shadow-amber-100 bg-white py-4">
                <div className="flex items-center justify-center overflow-hidden">
                  <img 
                    src={startup.logo} 
                    alt={startup.name} 
                    className="w-full h-full object-contain transform transition-all duration-300 group-hover:scale-110" 
                  />
                </div>
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-lg"></div>
              </div>
              <h3 className="text-xl px-2 font-semibold mb-2">{startup.name}</h3>
              <p className="text-gray-600 text-sm px-2 mb-4">{startup.description}</p>
              <div className="space-y-2 px-2">
                <div className="flex px-2 py-2 justify-between text-sm">
                  <span>RAISE</span>
                  <span>CURRENT</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>{startup.raise}</span>
                  <span>{startup.current}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-green-600 rounded-full h-2 transition-all duration-1000 ease-out"
                    style={{ 
                      width: isVisible[`startup-${currentSlide}-${index}`] ? `${startup.progress}%` : '0%'
                    }}
                  />
                </div>
                <div className="text-right text-sm text-blue-600 font-semibold">
                  {startup.progress}%
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: Math.ceil(featuredStartups.length / 4) }).map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-blue-600 w-4' : 'bg-gray-300'
              }`}
              onClick={() => scrollToSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 py-8 ">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Browse Start-ups by Category
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Easily navigate through different start-up categories to discover opportunities that match your investment focus.
        </p>

        <div className="relative px-12">
          {/* Left Arrow */}
          <button
            className=" absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-blue-50 transition-all duration-300"
            onClick={handlePrev}
            onMouseEnter={() => setHoveredArrow('prev')}
            onMouseLeave={() => setHoveredArrow(null)}
          >
            <ChevronLeft
              className={`w-6 h-6 transition-transform duration-300 ${
                hoveredArrow === 'prev' ? '-translate-x-1' : ''
              }`}
            />
          </button>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 px-4 py-3 w-6px h-3px gap-4 md:gap-6 transition-all duration-300">
            {categories
              .slice(currentSlide * itemsPerSlide, (currentSlide + 1) * itemsPerSlide)
              .map((category) => (
                <div key={category.title} className="bg-blue-50 rounded-2xl border-1  w-30px shadow-xl  md:p-2">
                  <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                  <p className="text-gray-600 text-sm mb-6">{category.description}</p>
                  <div className="bg-blue-500 rounded-lg p-3">
                    <div className="grid grid-cols-3 gap-2">
                      {category.companies.map((logo, index) => (
                        <div key={index} className="w-full h-16 bg-white rounded-lg overflow-hidden">
                          <img
                            src={logo}
                            alt="Company logo"
                            className="w-full h-full object-cover object-center"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Right Arrow */}
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-blue-50 transition-all duration-300"
            onClick={handleNext}
            onMouseEnter={() => setHoveredArrow('next')}
            onMouseLeave={() => setHoveredArrow(null)}
          >
            <ChevronRight
              className={`w-6 h-6 transition-transform duration-300 ${
                hoveredArrow === 'next' ? 'translate-x-1' : ''
              }`}
            />
          </button>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-blue-600 w-4' : 'bg-gray-300'
                }`}
                onClick={() => scrollToSlide(index)}
              />
            ))}
          </div>
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
                  <div key={section.title} className="pt-4">
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
                    <h3 key={index} className="font-lg mb-2 flex border-t justify-between items-center">
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
            <div className={`h-40px w-50px justify-center rounded-lg grid ${viewType === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2' : 'grid-cols-1'} gap-3 md:gap-4 lg:gap-6`}>
              {filteredInvestments.map((investment) => (
                <div key={investment.id} className="border rounded-lg h-2px shadow-sm hover:shadow-md transition-shadow">
                  <div>
                    <img src={investment.logo} alt={investment.name} className="flex items-center bg-blue-900 justify-center overflow-hidden" />
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

        {/* Investors Section */}
        <div className="mt-8 md:mt-16 shadow-2xl rounded-lg">
          <div className="text-center px-4 md:px-10 lg:px-20 py-10">
            <p className="text-blue-700 font-semibold uppercase text-sm">Real Stories From The People</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2">
              Trusted by Visionaries, Entrepreneurs, and Investors Worldwide
            </h2>
            <p className="text-gray-600 text-sm md:text-base mt-2 max-w-2xl mx-auto">
              From buyers finding their perfect investment to vendors expanding their reach, 
              each story reflects our commitment to empowering business growth.
            </p>
          </div>
          <div className="grid grid-cols-1 bg-white-100 md:grid-cols-2 gap-2 px-5 py-6">
            {investors.map((investor, index) => (
              <div key={index} className="p-4 rounded-lg py-8">
                <div className='rounded-lg bg-blue-100 h-17'>
                  <p className="text-gray-700 italic mb-4">"{investor.text}"</p>
                </div>
                <div className="text-left rounded-lg gap-4px gap-2">
                  <h4 className="font-semibold">{investor.name}</h4>
                  <p className="text-sm text-gray-500">{investor.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#EEF1FF] px-4 py-8 mt-8 w-full">
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
              <Link to="#" className="text-gray-900 hover:text-gray-700 font-medium">Home</Link>
              <Link to="#" className="text-gray-900 hover:text-gray-700 font-medium">How it Works</Link>
              <Link to="#" className="text-gray-900 hover:text-gray-700 font-medium">Plans & Pricing</Link>
              <Link to="#" className="text-gray-900 hover:text-gray-700 font-medium">Feature</Link>
              <Link to="#" className="text-gray-900 hover:text-gray-700 font-medium">Products</Link>
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