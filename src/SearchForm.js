import React, { Component } from "react";
import "./SearchForm.css";

export default class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      printType: "",
      filter: ""
    };
  }

  handlePrintType(printType) {
    console.log(printType);
    this.setState({
      printType
    });
  }

  handleFilter(filter) {
    console.log(filter);
    this.setState({
      filter
    });
  }

  handleSearch(searchTerm) {
    console.log(searchTerm);
    this.setState({
      searchTerm
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { searchTerm, printType, filter } = this.state;
    const apiKey = "AIzaSyAgG-g0MBXabAg0Ug44JqeOIaHjE0t_y5s";
    const baseURL = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&${printType}&${filter}&key=${apiKey}`;
    console.log(baseURL);
    fetch(baseURL)
      .then(res => {
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        return res.json();
      })
      .then(data => {
        console.log(data.items);
        this.setState({
          searchResults: data.items
        });
        this.props.displayResults(data.items);
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

  render() {
    const { printType, filter } = this.state;
    const error = this.state.error ? (
      <div className="error">{this.state.error}</div>
    ) : (
      ""
    );
    return (
      <div className="search-books">
        {error}
        <form className="search-form" onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="search">Search:</label>
          <input
            type="text"
            name="search"
            id="search"
            onChange={e => this.handleSearch(e.target.value)}
          />
          <button type="submit">Search</button>

          <div className="filter-options">
            <label htmlFor="print-type">Print Type:</label>
            <select
              value={printType}
              onChange={e => this.handlePrintType(e.target.value)}
            >
              <option value="printType=all">All</option>
              <option value="printType=books">Books</option>
              <option value="printType=magazines">Magazines</option>
            </select>

            <label htmlFor="book-type">Book Type:</label>
            <select
              value={filter}
              onChange={e => this.handleFilter(e.target.value)}
            >
              <option value="no-filter">Select filter</option>
              <option value="filter=partial">Partial text preview</option>
              <option value="filter=full">Full text preview</option>
              <option value="filter=free-ebooks">Free ebooks</option>
              <option value="filter=paid-ebooks">Paid ebooks</option>
              <option value="filter=ebooks">E-books</option>
            </select>
          </div>
        </form>
      </div>
    );
  }
}
