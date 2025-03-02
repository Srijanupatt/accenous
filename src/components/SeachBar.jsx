import React from "react";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewType, setViewType] = useState("grid");
  const [sortOption, setSortOption] = useState("Default");

  return (
    <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="flex items-center justify-between w-full gap-3">
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
        <div className="relative flex-1 mx-2">
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