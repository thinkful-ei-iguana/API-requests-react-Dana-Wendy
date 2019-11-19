// AIzaSyAgG-g0MBXabAg0Ug44JqeOIaHjE0t_y5s
//https://www.googleapis.com/books/v1/volumes
import React from "react";
import SearchForm from "./SearchForm";
import Results from "./Results";
const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';
export default class BookSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      results: null,
      query: {
        q: null,
        filter:null,
        printType: null
      }
    };
  }
  handleSearchSubmit = (searchTerms) => {

    searchTerms.preventDefault();
    // this.setState({ results: event.target.search.value });
    const q= searchTerms.target.search.value;

    const query= {q, filter: null, printType: null};
    console.log(query.q);
  
    const url = BASE_URL + [...Object.keys(this.state.query)]
    .map(key => query[key]!==null?`?${key}=${query[key]}`:'').join('');
    console.log(url, ' booyah');


        fetch(url)
        .then(res=>res.json())
        .then(data => {
          if(!data.totalItems) return Promise.reject('no Results');
          this.setState({query, results:data.items}, ()=> console.log(this.state.results));
          console.log(data);
         } )
        .catch(e=>console.log(e));

  }

  componentDidMount() {
  }

  render() {
    console.log(this.state.results)
    return (
      <main>
        <h1>Google Book Search</h1>
        <SearchForm handleSearch={this.handleSearchSubmit}></SearchForm>
        <Results results={this.state.results}></Results>
      </main>
    );
  }
}
