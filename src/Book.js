import React from "react";
import "./Book.css";
export default function Book(props) {
  const image = !props.thumbnail ? "" : props.thumbnail;
  return (
    <div className="book-tab-single">
      <h2 className="title">{props.title}</h2>
      <img src={image} alt="thumbnail" />
      <p className="author">Author: {props.authors}</p>
      {props.price && <p className="price">Price: {props.price}</p>}
      <p className="description">{props.description}</p>
    </div>
  );
}
