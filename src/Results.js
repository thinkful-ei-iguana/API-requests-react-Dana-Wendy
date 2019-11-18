import React from "react";
import Item from "./ResultsItem";
export default function Results(props) {
  if (props.results) return <div className="no-results"></div>;
  const searchResults = props.results.map(r=> {
  <Item
    key= {r.id}
    coverImg={r.volumeInfo.imageLinks.thumbnail} 
    bookTitle={r.volumeInfo.title} //may have a volumeInfo.subtitle
    author={} //have to deal with an array of authors r.authors
    desc={r.volumeInfo.description} //assumes all USD
    price={r.saleInfo.listPrice.amount}> 
    </Item>;
  });
  return <div className="results">{searchResults}</div>;
}
