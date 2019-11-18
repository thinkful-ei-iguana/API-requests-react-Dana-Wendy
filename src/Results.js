import React from "react";
import Item from "./Item";

export default function Results(props) {
  if (props.results === null) {
    return <div className="no-results"></div>;
  }
  const searchResults = props.results.map(r => {
    let listPrice =r.saleInfo.listPrice || 'Free'
    if(listPrice!=='Free') listPrice= `$${listPrice.amount}`;
    if()
    return (
      <Item
        key={r.id}
        coverImg={r.volumeInfo.imageLinks.thumbnail}
        bookTitle={r.volumeInfo.title} //may have a volumeInfo.subtitle
        author={r.volumeInfo.authors[0]} //have to deal with an array of authors r.authors
        desc={`Author: ${}`} //assumes all USD
        price={listPrice}
      ></Item>
    );
  });
  return <div className="results">{searchResults}</div>;
}
