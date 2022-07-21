import React from "react";

const Card = (props) => {
  return (
    <div id="card">
      <img alt="Ooops" className="card-img" src={props.image} />
      <h2>{props.city}</h2>
      <p> {props.paragraph}</p>
      <a href={props.to} target="_blank" rel="noreferrer">
        {" "}
        <button> More Information </button>
      </a>
    </div>
  );
};
export default Card;
