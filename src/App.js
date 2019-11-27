import React, { Component } from "react";
import SearchForm from "./SearchForm";
import BookList from "./BookList";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: []
    };
  }

  displayResults(searchResults) {
    this.setState({
      searchResults
    });
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <h1>Google Book Search</h1>
        </header>
        <SearchForm
          displayResults={searchResults => this.displayResults(searchResults)}
        />
        <BookList
          results={this.state.searchResults}
          className="result-container"
        />
      </div>
    );
  }
}

export default App;
