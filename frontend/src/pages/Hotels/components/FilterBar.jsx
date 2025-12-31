import React from "react";
import "../../../styles/FilterBar.css";

export default function FilterBar({ onFilterChange }) {
  // Define arrays with safe defaults
  const regions = ["Central", "Western", "Eastern", "Northern", "Southwestern"];
  const categories = ["5-Star", "4-Star", "3-Star", "Motel", "Lodge", "Cottage", "Apartment"];
  const priceRanges = [
    { value: "0-50", label: "Under $50" },
    { value: "50-100", label: "$50 - $100" },
    { value: "100-200", label: "$100 - $200" },
    { value: "200-500", label: "$200 - $500" },
    { value: "500+", label: "Over $500" }
  ];

  return (
    <div className="filter-bar">
      <div className="filter-group">
        <label>Region:</label>
        <select onChange={(e) => onFilterChange?.("region", e.target.value)}>
          <option value="">All Regions</option>
          {regions?.map((region, i) => (
            <option key={i} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label>Category:</label>
        <select onChange={(e) => onFilterChange?.("category", e.target.value)}>
          <option value="">All Categories</option>
          {categories?.map((category, i) => (
            <option key={i} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label>Price Range:</label>
        <select onChange={(e) => onFilterChange?.("price", e.target.value)}>
          <option value="">Any Price</option>
          {priceRanges?.map((range, i) => (
            <option key={i} value={range.value}>
              {range.label}
            </option>
          ))}
        </select>
      </div>

      <button 
        className="clear-filters" 
        onClick={() => {
          onFilterChange?.("region", "");
          onFilterChange?.("category", "");
          onFilterChange?.("price", "");
        }}
      >
        Clear Filters
      </button>
    </div>
  );
}