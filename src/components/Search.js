import React from "react";

function Search({onSearchChange}) {

  const handleInputChange = (e) => {
    onSearchChange(e.target.value);
  };

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Search;
