import React, { useState, useRef, useEffect } from "react";
import moment from "moment";

const SearchResults = props => {
  const [clickedRows, setClickedRows] = useState({
    objects: [
      { id: 0, selected: false },

      { id: 1, selected: false },
      { id: 2, selected: false },
      { id: 3, selected: false },
      { id: 4, selected: false }
    ]
  });

  const changeBoolean = val => {
    if (val.selected) {
      val.selected = false;
    } else {
      val.selected = true;
    }
  };

  const changeClass = val => {
    if (clickedRows.objects[val].selected) {
      return "selected";
    } else {
      return "not-selected";
    }
  };

  const changeColor = val => {
    let arrayCopy = [...clickedRows.objects];

    for (let i = 0; i < arrayCopy.length; i++) {
      if (arrayCopy[i].id === val) {
        changeBoolean(arrayCopy[i]);
      }
    }
    console.log(arrayCopy);
    setClickedRows({ objects: arrayCopy });
  };

  //Date difference
  const dateDiff = (start, end) => {
    const a = moment(start);
    const b = moment(end);
    return b.diff(a, "days");
  };

  return (
    <>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Room ID</th>
            <th scope="col">Check-in Date</th>
            <th scope="col">Check-out Date</th>
            <th scope="col">Number Of Nights</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((booking, index) => {
            return (
              <tr
                className={changeClass(index)}
                key={booking.id}
                onClick={() => {
                  changeColor(index);
                }}
              >
                <th>{booking.id}</th>
                <th>{booking.title}</th>
                <th>{booking.firstName}</th>
                <th>{booking.surname}</th>
                <th>{booking.email}</th>
                <th>{booking.roomId}</th>
                <th>{booking.checkInDate}</th>
                <th>{booking.checkOutDate}</th>
                <th>{dateDiff(booking.checkInDate, booking.checkOutDate)}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default SearchResults;
