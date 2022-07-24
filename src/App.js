import React from "react";
import Heading from "./Components/Heading";
import Bookings from "./Components/Bookings";
import Footer from "./Components/Footer";
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
