import React from "react";

const SearchDogHouse = () => {
  return (
    <div className="mt-2">
      <h1>Search Dog house</h1>
      <div>
        <select defaultValue="default">
          <option value="default" disabled>Please select a range</option>
          <option>10km</option>
          <option>20km</option>
          <option>30km</option>
          <option>40km+</option>
        </select>
      </div>
    </div>
  );
};

export default SearchDogHouse;
