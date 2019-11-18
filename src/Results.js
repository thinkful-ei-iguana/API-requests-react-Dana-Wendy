import React from "react";
import Item from "./Item";

export default function Results(props) {
  if (props.results === null) {
    return <div className="no-results"></div>;
  }
  const searchResults = props.results.map(r => {
    return (
      <Item
        key={r.id}
        coverImg={r.volumeInfo.imageLinks.thumbnail}
        bookTitle={r.volumeInfo.title} //may have a volumeInfo.subtitle
        author={r.volumeInfo.authors[0]} //have to deal with an array of authors r.authors
        desc={r.volumeInfo.description} //assumes all USD
        price={r.saleInfo.listPrice.amount}
      ></Item>
    );
  });
  return <div className="results">{searchResults}</div>;
}
