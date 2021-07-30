import moment from "moment";
import React, { useState } from "react";

function SearchResults({ bookings }) {
  const [selectedRows, setSelectedRows] = useState([]);
  /*Change Row*/

  function changeRow(id) {
    console.log(selectedRows);
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((val) => val !== id));
    } else {
      setSelectedRows(selectedRows.concat(id));
    }
  }

  /*Change color*/

  let blue = "blue";
  let white = "white";
  let colourArray = [
    "red",
    "green",
    "blue",
    "purple",
    "yellow",
    "gray",
    "brown",
    "pink",
  ];
  let arrIndex = Math.floor(Math.random() * colourArray.length);

  return (
    <table className="table">
      <thead>
        <tr id="headings">
          <th>ID</th>
          <th>Title</th>
          <th>First Name</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Room ID</th>
          <th>Check In Date</th>
          <th>Check Out Date</th>
          <th>Duration</th>
        </tr>
      </thead>

      <tbody>
        {/*JSON FILE BOOKINGS*/}
        {bookings.map((elem, index) => {
          return (
            <tr
              key={index}
              onClick={() => changeRow(elem.id)}
              style={
                selectedRows.includes(elem.id)
                  ? { backgroundColor: colourArray[arrIndex] }
                  : { backgroundColor: white }
              }
            >
              <th>{elem.id}</th>
              <th>{elem.title}</th>
              <th>{elem.firstName}</th>
              <th>{elem.surname}</th>
              <th>{elem.email}</th>
              <th>{elem.roomId}</th>
              <th>{elem.checkInDate}</th>
              <th>{elem.checkOutDate}</th>
              <th>
                {moment(elem.checkOutDate).diff(
                  moment(elem.checkInDate),
                  "days"
                )}
              </th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default SearchResults;
