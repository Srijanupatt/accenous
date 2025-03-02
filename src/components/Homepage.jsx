import React, { useState, useRef, useEffect } from "react";
import {
  ChevronDown,
  Search,
  Grid,
  List,
  Filter,
  Twitter,
  Facebook,
  Linkedin,
  Instagram,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  SlidersHorizontal,
  Network
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import featuredStartups from "./featuredStartups.json";
import investors from "./investors.json";
import filtersData from "./filters.json";
import additionalFilters from "./filter2.json";
import investmentsData from "./investments.json";
import heroImage from "../assets/image1.png";
import categories from "./categories.json";
import Clarizone from "../assets/Clarizone Logo.png";

const investments = Array.isArray(investmentsData) ? investmentsData : [];
const { filters } = filtersData;

// SearchBar Component

const SearchBar = ({ searchQuery, setSearchQuery, viewType, setViewType }) => {
  const [sortOption, setSortOption] = useState("Default");

  return (
    <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-3">
        {/* View type toggles */}
        <div className="flex gap-1 bg-gray-100 p-1 rounded-lg">
          <button
            onClick={() => setViewType("list")}
            className={`p-2 rounded-md ${
              viewType === "list" ? "bg-white shadow-sm" : ""
            }`}
          >
            <List size={16} className="text-gray-600" />
          </button>
          <button
            onClick={() => setViewType("grid")}
            className={`p-2 rounded-md ${
              viewType === "grid" ? "bg-white shadow-sm" : ""
            }`}
          >
            <Grid size={16} className="text-gray-600" />
          </button>
        </div>

        {/* Search input */}
        <div className="relative flex-1 w-full md:w-auto">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search start-ups..."
            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-gray-200"
            style={{ fontFamily: "Montserrat, sans-serif" }}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Sort by dropdown */}
        <div className="flex items-center text-sm">
          <span className="text-gray-500 mr-2">Sort by:</span>
          <div className="relative">
            <button className="flex items-center gap-1 font-medium">
              {sortOption}
              <ChevronDown size={16} className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Hide filters button */}
        <button className="flex items-center gap-1 text-sm text-gray-500">
          <SlidersHorizontal size={16} className="text-gray-600" />
          Hide Filters
        </button>
      </div>
    </div>
  );
};
// Homepage Component
export default function Homepage() {
  const navigate = useNavigate();
  const [viewType, setViewType] = useState("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    "Listing Status": [],
    "Revenue Generating": [],
    "Asset Type": [],
    Industry: [],
  });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredArrow, setHoveredArrow] = useState(null);
  const [isVisible, setIsVisible] = useState({});
  const [filteredInvestments, setFilteredInvestments] = useState(investments);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sliderRef = useRef(null);

  // Filter handling
  const handleFilterChange = (filterTitle, optionId, isChecked) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterTitle]: isChecked
        ? [...prev[filterTitle], optionId]
        : prev[filterTitle].filter((id) => id !== optionId),
    }));
  };

  const clearFilters = () => {
    setSelectedFilters({
      "Listing Status": [],
      "Revenue Generating": [],
      "Asset Type": [],
      Industry: [],
    });
  };

  const applyFilters = () => {
    const filtered = investments.filter((investment) => {
      const matchesFilters = Object.entries(selectedFilters).every(
        ([filterTitle, selectedValues]) => {
          if (selectedValues.length === 0) return true;

          const propertyMap = {
            "Listing Status": "listing_status",
            "Revenue Generating": "revenue_generating",
            "Asset Type": "asset_type",
            Industry: "industry",
          };

          const investmentProperty = propertyMap[filterTitle];
          const investmentValue = investment[investmentProperty];

          if (investmentProperty === "revenue_generating") {
            return selectedValues.includes(investmentValue?.toString());
          }

          return selectedValues.includes(investmentValue);
        }
      );

      const matchesSearch =
        (investment.name?.toLowerCase() || "").includes(
          searchQuery.toLowerCase()
        ) ||
        (investment.description?.toLowerCase() || "").includes(
          searchQuery.toLowerCase()
        );

      return matchesFilters && matchesSearch;
    });

    setFilteredInvestments(filtered.slice(0, 4));
  };

  useEffect(() => {
    applyFilters();
  }, [selectedFilters, searchQuery]);

  // Slider logic
  const scrollToSlide = (index) => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.offsetWidth;
      sliderRef.current.scrollTo({
        left: slideWidth * index,
        behavior: "smooth",
      });
      setCurrentSlide(index);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      const newIsVisible = {};
      featuredStartups.forEach((_, index) => {
        newIsVisible[`startup-${currentSlide}-${index}`] = true;
      });
      setIsVisible(newIsVisible);
    }, 300);
  }, [currentSlide]);

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

  const FilterSection = ({ title, options }) => (
    <div className="pt-4">
      <h3 className="font-medium mb-2 flex justify-between items-center">
        {title}
        <ChevronDown size={20} />
      </h3>
      <div className="space-y-2">
        {options.map((option) => (
          <label
            key={option.id}
            className="flex items-center space-x-2 hover:bg-gray-50 p-2 rounded"
          >
            <input
              type="checkbox"
              checked={selectedFilters[title].includes(option.id)}
              onChange={(e) =>
                handleFilterChange(title, option.id, e.target.checked)
              }
              className="accent-blue-600"
            />
            <span className="text-sm">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        <img src={Clarizone} alt="Clarizone Logo" className="w-32 md:w-40" />
        <div className="hidden md:flex space-x-6">
          <Link to="#" className="text-gray-600 text-l hover:text-gray-900">
            Home
          </Link>
          <Link to="#" className="text-gray-600 hover:text-gray-900">
            About
          </Link>
          <Link to="#" className="text-gray-600 hover:text-gray-900">
            Services
          </Link>
          <Link to="#" className="text-gray-600 hover:text-gray-900">
            Contact
          </Link>
          <Link to="#" className="text-gray-600 hover:text-gray-900">
            Print & Pricing
          </Link>
          <Link to="#" className="text-gray-600 hover:text-black">
            Feature
          </Link>
          <Link to="#" className="text-gray-600 hover:text-gray-900">
            Products
          </Link>
        </div>
        <button className="bg-blue-700 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full hover:bg-blue-700 text-sm md:text-base">
          Browser Start-ups
        </button>
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col space-y-4 p-4">
            <Link to="#" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link to="#" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link to="#" className="text-gray-600 hover:text-gray-900">
              Services
            </Link>
            <Link to="#" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
            <Link to="#" className="text-gray-600 hover:text-gray-900">
              Print & Pricing
            </Link>
            <Link to="#" className="text-gray-600 hover:text-black">
              Feature
            </Link>
            <Link to="#" className="text-gray-600 hover:text-gray-900">
              Products
            </Link>
          </div>
        </div>
      )}

      {/* Hero Section - Full Width */}
      <div className="w-full grid md:grid-cols-2 gap-8 items-center shadow-xl">
        <div className="order-2 md:order-none relative w-full h-full">
          <img
            src={heroImage}
            alt="Team illustration"
            className="w-full h-full object-cover relative z-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-200 opacity-full z-0"></div>
        </div>
        <div className="text-center md:text-left order-1 md:order-none p-4 md:p-8">
          <span className= "inline-block px-3 py-1 mb-12 bg-purple-100 rounded-full md:text-sm text-purple-600"  style={{ fontFamily: "Montserrat, sans-serif" }}>
            solution for every Startup Hub
          </span>
          <h1 className="text-3xl md:text-5xl font-bold my-4 md:my-6"  style={{ fontFamily: "Montserrat, sans-serif" }}>
            Discover the Next Big Innovative Opportunity in Start-Ups
          </h1>
          <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base"  style={{ fontFamily: "Montserrat, sans-serif" }}>
            Explore a curated selection of promising startups across diverse
            industries. Find high growth potential, emerging innovation, and
            early-stage investment tailored for visionary investors.
          </p>
          <div className="grid grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-8">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-blue-600">
                5x+
              </div>
              <p className="text-sm md:text-base">Increased Efficiency</p>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-blue-600">
                70%
              </div>
              <div className="text-gray-600 text-xs md:text-sm">Efficiency</div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Startups */}
      <div className="relative px-4 md:px-40 py-10 overflow-hidden">
         <p className="text-blue-800 text-center"  style={{ fontFamily: "Montserrat, sans-serif" }}>promising ventures At your Fingertips</p>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4"  style={{ fontFamily: "Montserrat, sans-serif" }}>
         Discover our feuture startups
        </h2>
        <p className="text-gray-600 text-center mb-6"  style={{ fontFamily: "Montserrat, sans-serif" }}>
          Easily navigate through different start-up categories to discover
          opportunities that match your investment focus.
        </p>
        <div
          ref={sliderRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-4 transition-all duration-300 relative"
        >
          {/* Left Arrow */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-blue-50 transition-all duration-300"
            onClick={handlePrev}
            onMouseEnter={() => setHoveredArrow("prev")}
            onMouseLeave={() => setHoveredArrow(null)}
          >
            <ChevronLeft
              className={`w-6 h-6 transition-transform duration-300 ${
                hoveredArrow === "prev" ? "-translate-x-1" : ""
              }`}
            />
          </button>

          {/* Right Arrow */}
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-blue-50 transition-all duration-300"
            onClick={handleNext}
            onMouseEnter={() => setHoveredArrow("next")}
            onMouseLeave={() => setHoveredArrow(null)}
          >
            <ChevronRight
              className={`w-6 h-6 transition-transform duration-300 ${
                hoveredArrow === "next" ? "translate-x-1" : ""
              }`}
            />
          </button>

          {/* Startup Cards */}
          {featuredStartups
            .slice(currentSlide * 4, (currentSlide + 1) * 4)
            .map((startup, index) => (
              <div
                id={`startup-${currentSlide}-${index}`}
                key={`${startup.name}-${index}`}
                className={`bg-white border-gray-300 border-1 hover:border-blue-800 hover:shadow-blue-500/50 opacity-20 startup-card transform transition-all duration-500 rounded-lg shadow-xl py-2 hover:scale-105 ${
                  isVisible[`startup-${currentSlide}-${index}`]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div className="relative group shadow-amber-10  py-4">
                  <div className="flex items-center justify-center overflow-hidden">
                    <img
                      src={startup.logo}
                      alt={startup.name}
                      className="w-full h-full object-contain transform transition-all duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0   bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-lg"></div>
                </div>
                 <div className="px-2">

                <h3 className="text-xl px-2 font-semibold mb-2">
                  {startup.name}
                </h3>
                <p className="text-gray-600 text-sm px-2 mb-4">
                  {startup.description}
                </p>
                <h3 className="text-blue-700 text-sm px-2 mb-4">funded</h3>
                <div className="w-full   bg-gray-300 rounded-full h-2 overflow-hidden">
                 
                    <div
                      className="bg-blue-600 rounded-full h-2 transition-all duration-1000 ease-out"
                      style={{
                        width: isVisible[`startup-${currentSlide}-${index}`]
                          ? `${startup.progress}% ` 
                          : "0%",
                      }}
                      
                    />
                     </div >
                  <div className="text-right text-sm  text-blue-600 font-semibold">
                
                     
                {startup.progress}%
              </div>
                 </div>
               
                
                <div className="space-y-2 px-2 border-t pt-6 border-t-gray-400">
                  <div className="flex px-2 py-2 justify-between text-sm">
                    <div className="flex flex-col">
                      <span className="bg-text-gray-300">BASE</span>
                      <span>INVESTMENT</span>
                    </div>
                    <div className="flex flex-col">
                      <span> CURRENT</span>
                      <span>INVESTMENT</span>
                    </div>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span>{startup.raise}</span>
                    <span>{startup.current}</span>
                  </div>
                  
                  
                </div>
              </div>
            ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: Math.ceil(featuredStartups.length / 4) }).map(
            (_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-black " : "bg-gray-300"
                }`}
                onClick={() => scrollToSlide(index)}
              />
            )
          )}
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4"  style={{ fontFamily: "Montserrat, sans-serif" }}>
          Browse Start-ups by Category
        </h2>
        <p className="text-gray-600 text-center mb-6"  style={{ fontFamily: "Montserrat, sans-serif" }}>
          Easily navigate through different start-up categories to discover
          opportunities that match your investment focus.
        </p>

        <div className="relative px-4 md:px-12">
          {/* Left Arrow (Hidden on Mobile and Tablet) */}
          <button
            className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-blue-50 transition-all duration-300"
            onClick={handlePrev}
            onMouseEnter={() => setHoveredArrow("prev")}
            onMouseLeave={() => setHoveredArrow(null)}
          >
            <ChevronLeft
              className={`w-6 h-6 transition-transform duration-300 ${
                hoveredArrow === "prev" ? "-translate-x-1" : ""
              }`}
            />
          </button>

          {/* Categories Grid */}
          <div className="flex flex-col md:grid md:grid-cols-3 gap-4 md:py-10 transition-all duration-300">
            {categories
              .slice(currentSlide * itemsPerSlide, (currentSlide + 1) * itemsPerSlide)
              .map((category) => (
                <div
                  key={category.title}
                  className="bg-blue-50 rounded-2xl border border-gray-300 shadow-xl p-4 md:p-6"
                >
                  <h3 className="text-lg md:text-xl font-semibold mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {category.description}
                  </p>
                  <div className="bg-blue-500 rounded-lg p-2 md:p-3">
                    <div className="grid grid-cols-3 gap-2">
                      {category.companies.map((logo, index) => (
                        <div
                          key={index}
                          className="w-full h-12 md:h-16 bg-white rounded-lg overflow-hidden"
                        >
                          <img
                            src={logo}
                            alt="Company logo"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Right Arrow (Hidden on Mobile and Tablet) */}
          <button
            className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-blue-50 transition-all duration-300"
            onClick={handleNext}
            onMouseEnter={() => setHoveredArrow("next")}
            onMouseLeave={() => setHoveredArrow(null)}
          >
            <ChevronRight
              className={`w-6 h-6 transition-transform duration-300 ${
                hoveredArrow === "next" ? "translate-x-1" : ""
              }`}
            />
          </button>

          {/* Pagination Dots (Hidden on Mobile and Tablet) */}
          <div className="hidden md:flex justify-center gap-2 mt-6">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-black " : "bg-gray-300"
                }`}
                onClick={() => scrollToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
<div className="px-35 ml-auto">
  <div className="text-blue-700   text-xl " style={{ fontFamily: "Montserrat, sans-serif" }} >
    <p>Find Invesment Opportunites</p>

    <h1 className="text-black text-4xl font-bold"  style={{ fontFamily: "Montserrat, sans-serif" }} >Explore Inovative Start-ups and Products</h1>
    <p className=" text-gray-400 text-md" style={{ fontFamily: "Montserrat, sans-serif" }} >
    Explore a curated selection of promising startups across diverse industries.Find high-growth potential ,emerging ,innovations  and early-stage investments tailored for visionary investors

    </p>



  </div>
</div>
    
     

      {/* Investment Explorer */}
      <div className="max-w-7xl  mx-auto px-4 py-12">
     
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Filters Sidebar */}
          <div
            className={`${
              showFilters ? "block" : "hidden"
            } lg:block w-full lg:w-72`}
          >
            <div className="bg-white p-6 rounded-xl shadow-lg sticky top-6 border border-gray-300">
              
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold"  style={{ fontFamily: "Montserrat, sans-serif" }}>Filters</h2>
                <button
                  onClick={clearFilters}
                  className="text-blue-600 hover:text-blue-800 text-sm"
                  style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Clear All
                </button>
              </div>
              <div className="rounded-md h-10 border px-1 pt-1 border-gray-300 bg-gray-200-100">
          <placeholder>Enter keyword</placeholder>
              </div>

              <div className="space-y-6">
                {filters?.map((section) => (
                  <FilterSection
                    key={section.title}
                    title={section.title}
                    options={section.options}
                  />
                ))}


                {additionalFilters?.map((section) => (
                  <div key={section.title} className="pt-4 border-t">
                    <h3 className="font-medium mb-2 flex justify-between items-center">
                      {section.title}
                      <ChevronRight size={20} />
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1  w-xl px-2 gap-2   h-10px">
         <div className="w-full   max-w-7xl   mx-auto mb-2 md:px-6 lg:px-2 ">
          <SearchBar
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      viewType={viewType}
      setViewType={setViewType}
    />
</div>
            {/* Investment Grid */}
            <div
              className={` px-2 grid ${
                viewType === "grid"
                  ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
                  : "grid-cols-1"
              } gap-4`}
            >
              {filteredInvestments.slice(0, 4).map((investment) => (
                <div
                  key={investment.id}
                  className="border border-gray-300 rounded-xl hover:shadow-lg transition-all"
                >
                  <div className="relative h-40px overflow-hidden py-2 px-2 rounded-xl">
                    <img
                      src={investment.logo}
                      alt={investment.name}
                      className="w-full h-full object-cover transition-transform rounded-2xl duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 from-black/40 via-transparent" />
                    <span className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-xs font-medium">
                      {investment.type}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2">
                      {investment.name}
                    </h3>
                    <p className="text-blue-600 text-sm mb-4">
                      {investment.category}
                    </p>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {investment.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between text-sm">
                      <Network size={16} className="text-blue-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-500">Valuation:</span>
                        <span className="font-bold mr-auto  ml-auto">{investment.value}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                      <Network size={16} className="text-blue-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-500">Revenue:</span>
                        <span className="font-bold mr-auto  ml-auto">
                          {investment.revenue}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                      <Network size={16} className="text-blue-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-500">Industry:</span>
                        <span className="font-bold mr-auto  ml-auto">
                          {investment.industry}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                      <Network size={16} className="text-blue-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-500">Set age :</span>
                        <span className="font-bold mr-auto  ml-auto">{investment.age}</span>
                       
                      </div>
                      <div  className="flex justify-between text-sm" >
                      <Network size={16} className="text-blue-500 mr-2 flex-shrink-0" />
                       <span className="text-gray-500 w-24 sm:w-28"  style={{ fontFamily: "Montserrat, sans-serif" }}>Type:</span>
                       <span className="font-bold mr-auto  ml-auto"  style={{ fontFamily: "Montserrat, sans-serif" }}>{investment.type}</span>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button className="flex-1 py-2 text-sm font-medium border rounded-lg hover:bg-gray-50"  style={{ fontFamily: "Montserrat, sans-serif" }}>
                        Save
                      </button>
                      <button className="flex-1 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700"  style={{ fontFamily: "Montserrat, sans-serif" }}>
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-8">
        <button className="p-2 box-content rounded-lg bg-gray-200 hover:bg-gray-300">
          <ChevronLeft size={16} />
        </button>
        {[1, 2, 3, 4, 5].map((page) => (
          <button
            key={page}
            className={`px-3 py-2 box-content rounded-md ${
              page === 1 ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            {page}
          </button>
        ))}
        <button className="p-2 box-content rounded-md bg-gray-200 hover:bg-gray-300">
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Testimonials */}
      <div className="mt-8 bg-gradient-to-b bg- md:mt-16 px-4 md:px-40">
        <div className="text-center px-4 md:px-10 lg:px-20 py-10">
          <p className="text-blue-700 font-semibold uppercase text-sm"   style={{ fontFamily: "Montserrat, sans-serif" }}>
            Real Stories From The People
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2"   style={{ fontFamily: "Montserrat, sans-serif" }}>
            Trusted by Visionaries, Entrepreneurs, and Investors Worldwide
          </h2>
          <p className="text-gray-600 text-sm md:text-base mt-2 max-w-2xl mx-auto"   style={{ fontFamily: "Montserrat, sans-serif" }}>
            From buyers finding their perfect investment to vendors expanding
            their reach, each story reflects our commitment to empowering
            business growth.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4 py-10 bg-white">
          {investors.map((investor, index) => (
            <div key={index} className="h-auto rounded-2xl">
              {/* Testimonial Card */}
              <div className="bg-blue-50 rounded-2xl p-6 shadow-md">
                <p className="text-black italic mb-4">"{investor.text}"</p>
              </div>

              {/* Investor Details */}
              <div className="mt-4 flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full"></div>
                <div className="h-10 w-10 rounded-full overflow-hidden">
                    <img
                      src={investor.logo}
                      alt="Investor Logo"
                      className="h-full w-full object-cover"
                    />
                  </div>
                <div>
                  <h4 className="font-semibold">{investor.name}</h4>
                  <p className="text-sm text-gray-500">{investor.title}</p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="px-2 md:px-4 lg:px-12 xl:px-20">
        <footer className="bg-gradient-to-b to-blue-200 rounded-2xl px-6 py-12 mt-8 w-full shadow-2xl">
          <div className="flex flex-col justify-between min-h-[200px]">
            {/* Top Section */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left">
                <span>
                  Connecting Startups with Investors to Fuel & Grow
                </span>
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

            {/* Divider */}
            <div className="border-t border-gray-400 my-7"></div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Logo */}
              <img src={Clarizone} alt="Clarizone Logo" className="w-32" />

              {/* Links */}
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="#"
                  className="text-gray-900 hover:text-gray-700 font-medium"
                >
                  Home
                </Link>
                <Link
                  to="#"
                  className="text-gray-900 hover:text-gray-700 font-medium"
                >
                  How it Works
                </Link>
                <Link
                  to="#"
                  className="text-gray-900 hover:text-gray-700 font-medium"
                >
                  Plans & Pricing
                </Link>
                <Link
                  to="#"
                  className="text-gray-900 hover:text-gray-700 font-medium"
                >
                  Feature
                </Link>
                <Link
                  to="#"
                  className="text-gray-900 hover:text-gray-700 font-medium"
                >
                  Products
                </Link>
              </div>

              {/* Social Icons */}
              <footer className="flex gap-4">
                <Linkedin className="w-5 h-5 text-blue-600 hover:text-blue-800" />
                <Instagram className="w-5 h-5 text-blue-600 hover:text-blue-800" />
                <Facebook className="w-5 h-5 text-blue-600 hover:text-blue-800" />
                <Twitter className="w-5 h-5 text-blue-400 hover:text-blue-600" />
              </footer>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}