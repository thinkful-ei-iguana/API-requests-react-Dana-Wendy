import React from "react";

export default function Item(props) {
  return (
    <div className="result-item">
      <h2 className="book-title">{props.bookTitle}</h2>
      <img className="front-cover" src={props.coverImg} alt="book cover" />
      <p className="author"> {props.author}</p>
      <p className="price">Price:{props.price}</p>
      <p className="desc">{props.desc}</p>
    </div>
  );
}
