import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]); //Replaced fakebookings with []

  // let apiData = [];

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/")
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        setBookings(data);
        //  console.log(apiData);
      });
    // console.log(apiData);
  }, []);

  //Old Code Below
  const search = searchVal => {
    console.info("TO DO!", searchVal);
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
