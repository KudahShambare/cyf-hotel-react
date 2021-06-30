import moment from "moment";
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
          <th>Duration</th>
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
              <th>
                {moment(elem.checkOutDate.split("-")).diff(
                  moment(elem.checkInDate.split("-")),
                  "days"
                )}
              </th>
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
          <th>2021-03-23 </th>
          <th>2021-03-31 </th>
          <th>{moment([2021, 2, 31]).diff(moment([2020, 2, 23]), "days")}</th>
        </tr>
        <tr>
          <th>7 </th>
          <th> Mr</th>
          <th>Nyota </th>
          <th>Shambare </th>
          <th>nyota@gmail.com </th>
          <th> 8</th>
          <th> 2020-02-21</th>
          <th> 2020-02-23</th>
          <th>{moment([2020, 2, 23]).diff(moment([2020, 2, 21]), "days")}</th>
        </tr>
        <tr>
          <th> 8</th>
          <th>Miss </th>
          <th>Bekky </th>
          <th>Eland </th>
          <th> BEland@ara.co.za</th>
          <th> 9</th>
          <th> 2020-07-04</th>
          <th> 2020-07-05</th>
          <th>{moment([2020, 7, 5]).diff(moment([2020, 7, 4]), "days")}</th>
        </tr>
        <tr>
          <th> 9</th>
          <th>Dr </th>
          <th>Abel </th>
          <th>Jack </th>
          <th>abeljack@outlook.com </th>
          <th>26 </th>
          <th>2019-12-25 </th>
          <th> 2020-01-02</th>
          <th>{moment([2020, 0, 2]).diff(moment([2019, 11, 25]), "days")}</th>
        </tr>
      </tbody>
    </table>
  );
}
export default SearchResults;
