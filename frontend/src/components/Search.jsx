import React, { useState, useEffect } from "react";
import { FaSearch, FaTimes, FaFilter } from "react-icons/fa";

export default function SearchForm() {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    category: "all",
    priceRange: "all",
    location: "",
    date: ""
  });

  useEffect(() => {
 
    const searchSuggestions = [
      "Safari Tours",
      "Beach Holidays",
      "Mountain Trekking",
      "City Breaks",
      "Luxury Hotels",
      "Budget Accommodation",
      "Car Rentals",
      "Flight Deals",
      "Adventure Packages",
      "Cultural Experiences"
    ];

    if (searchQuery.length > 2) {
      const filtered = searchSuggestions.filter(item =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  }, [searchQuery]); 

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", { searchQuery, filters });
    
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setSuggestions([]);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setSuggestions([]);
  };

  return (
    <div className="search-form-container">
      <form onSubmit={handleSearch} className="search-form">
        <div className="search-input-wrapper">
          <div className="search-icon">
            <FaSearch />
          </div>
          <input
            type="text"
            id="globalSearch"
            name="globalSearch"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for destinations, hotels, flights, packages..."
            autoComplete="off"
            className="search-input"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={clearSearch}
              className="clear-search"
              aria-label="Clear search"
            >
              <FaTimes />
            </button>
          )}
          <button
            type="button"
            onClick={() => setShowFilters(!showFilters)}
            className={`filter-toggle ${showFilters ? 'active' : ''}`}
            aria-label="Toggle filters"
          >
            <FaFilter />
          </button>
        </div>

        {/* Search Suggestions */}
        {suggestions.length > 0 && (
          <div className="search-suggestions">
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className="suggestion-item"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                <FaSearch className="suggestion-icon" />
                <span>{suggestion}</span>
              </div>
            ))}
          </div>
        )}

        {/* Filters Section */}
        {showFilters && (
          <div className="search-filters">
            <div className="filter-group">
              <label htmlFor="searchCategory">Category</label>
              <select
                id="searchCategory"
                name="category"
                value={filters.category}
                onChange={(e) => setFilters({...filters, category: e.target.value})}
              >
                <option value="all">All Categories</option>
                <option value="tours">Tours</option>
                <option value="hotels">Hotels</option>
                <option value="flights">Flights</option>
                <option value="cars">Car Rentals</option>
                <option value="events">Events</option>
                <option value="venues">Venues</option>
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="priceRange">Price Range</label>
              <select
                id="priceRange"
                name="priceRange"
                value={filters.priceRange}
                onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
              >
                <option value="all">Any Price</option>
                <option value="budget">Budget ($)</option>
                <option value="moderate">Moderate ($$)</option>
                <option value="luxury">Luxury ($$$)</option>
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="searchLocation">Location</label>
              <input
                type="text"
                id="searchLocation"
                name="location"
                value={filters.location}
                onChange={(e) => setFilters({...filters, location: e.target.value})}
                placeholder="Destination or location"
                autoComplete="off"
              />
            </div>

            <div className="filter-group">
              <label htmlFor="searchDate">Date</label>
              <input
                type="date"
                id="searchDate"
                name="date"
                value={filters.date}
                onChange={(e) => setFilters({...filters, date: e.target.value})}
              />
            </div>
          </div>
        )}

        <button type="submit" className="search-submit-btn">
          Search
        </button>
      </form>
    </div>
  );
}