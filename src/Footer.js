import React from "react";

function Footer(props) {
  return (
    <footer id="footer">
      <br />
      <ul>
        {props.array.map((elem, index) => {
          return <li key={index}> {elem}</li>;
        })}
      </ul>
    </footer>
  );
}
export default Footer;
