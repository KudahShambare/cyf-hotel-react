import moment from "moment";
import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";

function SearchResults(props) {
  const [selectedRows, setSelectedRows] = useState([]);

  /*
. This component should be rendered next to the table in the <SearchResults /> component. This component should receive one prop id. When clicking on a "Show profile" button for a given row, the component <CustomerProfile /> should display the text "Customer Profile", where is the id of the selected customer. Initially, the <CustomerProfile /> component doesn't show anything.

Hint: You need to record the selected customer id after clicking on a "Show profile" button. In which component do you think this state should be defined?

Test: When first showing the page, no customer profile is displayed. When clicking the first "Show profile" button of the table, the text "Customer 1 profile" appears. When clickong the second "Show profile" button of the table, the text "Customer 2 profile" appears instead.
*/

  /*Change Row*/

  function changeRow(id) {
    console.log(selectedRows);
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter(val => val !== id));
    } else {
      setSelectedRows(selectedRows.concat(id));
    }
  }
  let blue = "blue";
  let white = "white";
  /*Change color*/
  function changeColor() {
    let colourArray = ["red", "green", "blue", "purple"];
    let arrIndex = Math.floor(Math.random() * colourArray.length);
    console.log(arrIndex);

    //   console.log(arr);
    setColor(colourArray[arrIndex]);
  }

  return (
    <div>
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
            <th>Profile</th>
          </tr>
        </thead>

        <tbody>
          {/*JSON FILE BOOKINGS*/}
          {props.results.map((elem, index) => {
            return (
              <tr
                key={index}
                onClick={() => changeRow(elem.id)}
                style={
                  selectedRows.includes(elem.id)
                    ? { backgroundColor: blue }
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
                <th>
                  <button
                    id={elem.id}
                    onClick={() => {
                      console.log(elem.id);
                    }}
                  >
                    Show Profile
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
      <CustomerProfile />
    </div>
  );
}
export default SearchResults;
