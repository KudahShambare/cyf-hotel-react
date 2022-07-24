import React from "react";

const SearchResults = props => {
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default SearchResults;
