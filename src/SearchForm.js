import React from "react";

export default function SearchForm(props) {
  return (
    <div>
      <form onSubmit={e => props.handleSearch(e)}>
        <label htmlFor="search">Search: </label>
        <input type="text" id="search" placeholder="henry"></input>
        <input type="submit" id="search-button" value='Search'>
        </input>
        <label htmlFor="print-type" alt="print-type">
          Print Type:{" "}
        </label>
        <select
          name="print-type"
          id="print-type"
          onChange={e => props.handleSearch(e)}
        >
          <option value="all">All</option>
          <option value="books">Books</option>
          <option value="magazines">Magazines</option>
        </select>
        <label htmlFor="book-type" alt="">
          Book Type:{" "}
        </label>
        <select
          name="filter-type"
          id="filter-type"
          onChange={e => props.handleSearch(e)}
        >
          <option value="ebooks">ebooks</option>
          <option value="free-ebooks">free-ebooks</option>
          <option value="full">full</option>
          <option value="paid-ebooks">paid-ebooks</option>
          <option value="partial">partial</option>
        </select>
      </form>
    </div>
  );
}
