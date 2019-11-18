// AIzaSyAgG-g0MBXabAg0Ug44JqeOIaHjE0t_y5s
import React from "react";
import SearchForm from "./SearchForm";
import Results from "./Results";

export default class BookSearch extends React.Component {
  constructor(props) {
    super();
    this.state = { results: null };
  }
  handleSearchSubmit(searchTerms) {
    console.log(`${searchTerms} boo-yah`);
    // this.setState({ results: event.target.value });
  }

  componentDidMount() {
    //fetch results in here
  }

  render() {
    return (
      <main>
        <h1>Google Book Search</h1>
        <SearchForm handleSearch={this.handleSearchSubmit}></SearchForm>
        <Results results={this.state.results}></Results>
      </main>
    );
  }
}
