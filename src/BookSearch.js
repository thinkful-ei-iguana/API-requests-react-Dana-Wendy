// AIzaSyAgG-g0MBXabAg0Ug44JqeOIaHjE0t_y5s
import React from "react";
import SearchForm from "./SearchForm";
import Results from "./Results";

export default class BookSearch extends React.Component {
  constructor(props) {
    super();
    this.state = { results: null };
  }


  render() {
    return (
      <main>
        <h1>Google Book Search</h1>
        <SearchForm></SearchForm>
        <Results results={this.state.results}></Results>
      </main>
    );
  }
}
