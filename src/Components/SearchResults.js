import React from "react";
import moment from "moment";

const SearchResults = props => {
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
          {props.results.map(booking => {
            return (
              <tr
                id="table-row"
                key={booking.id + booking.email + "rjrjrieows"}
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
