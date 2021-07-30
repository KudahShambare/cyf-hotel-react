import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  // let apiData = [];

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/")
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        setBookings(data);
      });
  }, []);
  /*
Instructions: Still in the <Bookings /> component, implement the search method. It must use the searchVal variable (that you just passed from the <Search /> component) to filter the search results. The filter function should return bookings where firstName or surname match searchVal. Once filtered, use the setBookings function to update the results rendered in <SearchResults />.

Test: Verify that when you enter an existing first name or surname and submit the form, the results are filtered accordingly in the customers table.
*/
  const search = searchVal => {
    //console.info("TO DO!", searchVal);
    let filtered = bookings.filter(elem => {
      return (
        elem.firstName.includes(searchVal) || elem.surname.includes(searchVal)
      );
    });
    setBookings(filtered);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {<SearchResults results={bookings} />}
      </div>
    </div>
  );
};

export default Bookings;
