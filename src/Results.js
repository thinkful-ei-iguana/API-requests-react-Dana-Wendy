import React from "react";
import Item from "./Item";

export default function Results(props) {
  if (props.results === null) {
    return <div className="no-results"></div>;
  }
  let searchResults = props.results.map(r => {
    let listPrice =r.saleInfo.listPrice || 'Free'
    if(listPrice!=='Free') listPrice= `$${listPrice.amount}`;
    let author =r.volumeInfo.authors; 
    return (
      <Item
        key={r.id}
        coverImg={r.volumeInfo.imageLinks.thumbnail}
        bookTitle={r.volumeInfo.title} //may have a volumeInfo.subtitle
        author={`Authors: ${!author?'unknown':author.join(', ')}`} // I can use a reduce to do this to insert an ampersand in the end of this line
        desc={r.volumeInfo.description} //assumes all USD
        price={listPrice}
      ></Item>
    );
  });
  return <div className="results">{searchResults}</div>;
}
