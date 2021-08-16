import React from "react";

function CustomerProfile(props) {
  let profId = props.id;
  return (
    <div>
      <h1>CustomerProfile</h1>

      <p> Customer {profId} Profile</p>
    </div>
  );
}

export default CustomerProfile;
