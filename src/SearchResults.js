import React from "react";

function SearchResults(props) {
  console.log(props);
  return (
    <table class="table">
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
        </tr>
      </thead>

      <tbody>
        {/*JSON FILE BOOKINGS*/}
        {props.results.map(elem => {
          return (
            <tr>
              <th>{elem.id}</th>
              <th>{elem.title}</th>
              <th>{elem.firstName}</th>
              <th>{elem.surname}</th>
              <th>{elem.email}</th>
              <th>{elem.roomId}</th>
              <th>{elem.checkInDate}</th>
              <th>{elem.checkOutDate}</th>
            </tr>
          );
        })}
        {/*HARD CODED BOOKINGS*/}
        <tr>
          <th> 6</th>
          <th>Mrs </th>
          <th>Nonhlahla </th>
          <th>Madhlamini </th>
          <th> nmadhla@bwa.org</th>
          <th>35 </th>
          <th> </th>
          <th> </th>
        </tr>
        <tr>
          <th>7 </th>
          <th> Mr</th>
          <th> </th>
          <th> </th>
          <th> </th>
          <th> </th>
          <th> </th>
          <th> </th>
        </tr>
        <tr>
          <th> 8</th>
          <th>Miss </th>
          <th> </th>
          <th> </th>
          <th> </th>
          <th> </th>
          <th> </th>
          <th> </th>
        </tr>
        <tr>
          <th> 9</th>
          <th>Dr </th>
          <th> </th>
          <th> </th>
          <th> </th>
          <th> </th>
          <th> </th>
          <th> </th>
        </tr>
      </tbody>
    </table>
  );
}
export default SearchResults;
