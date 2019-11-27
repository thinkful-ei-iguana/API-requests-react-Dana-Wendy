import React from "react";
import Book from "./Book";
import "./BookList.css";

export default function BookList(props) {
  return (
    <div className="book-tab">
      {props.results.map(result => {
        return (
          <Book
            thumbnail={
              result.volumeInfo.imageLinks.smallThumbnail
                ? result.volumeInfo.imageLinks.smallThumbnail
                : ""
            }
            title={result.volumeInfo.title}
            authors={
              result.volumeInfo.authors
                ? result.volumeInfo.authors.join(", ")
                : result.volumeInfo.authors
            }
            price={
              result.saleInfo.listPrice
                ? result.saleInfo.listPrice.amount
                : "No sale price available"
            }
            description={result.volumeInfo.description}
          />
        );
      })}
    </div>
  );
}
