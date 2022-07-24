import React from "react";
import Heading from "./Heading";
import Bookings from "./Bookings";
import Footer from "./Footer";
import "./App.css";
import TouristInfoCards from "./Components/TouristInfoCards";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Footer
        array={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
