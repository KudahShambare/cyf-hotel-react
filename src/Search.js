import React, { useState } from "react";
import SearchButton from "./SearchButton";
/*
. Create a new function handleSearchInput taking an event parameter. This function should use the setSearchInput function to update the state variable searchInput with what the user typed in the input field. Finally, add a onChange prop to the <input> tag that is set to the function handleSearchInput. Use console.log() to output the value received in the handleSearchInput function.

Hint: Use event.target.value to get the input value.
*/

const Search = () => {
  const [searchInput, setSearchInput] = useState("");

  function handleSearchInput(e) {
    setSearchInput(e.target.value);
    console.log(e.target.value);
  }

  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box">
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                value={searchInput}
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
                onChange={handleSearchInput}
              />
              <SearchButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
