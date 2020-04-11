import React from 'react';
// import { createHashHistory } from "history";
import { withRouter } from "react-router-dom";


class SearchBar extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          searchOption: "Explore",
          query: "",
          filteredResults: ""
      }
      this.handleChange = this.handleChange.bind(this);
      this.renderSearchResults = this.renderSearchResults.bind(this);
      this.handleSelectSearchResultItem = this.handleSelectSearchResultItem.bind(this);
      
  }

  componentDidMount() {
    this.props.fetchCities();
  }


  handleSelectSearchResultItem(cityId) {
      this.setState({query: ""});
      this.props.history.push(`/cities/${cityId}`); 
  }

  handleChange(e) {
      const query = e.target.value;
      this.setState({query})
  }

  renderSearchResults() {
    let filteredResults = this.props.cities.filter(city =>
      city.name.toLowerCase().includes(this.state.query.toLowerCase()));
    return filteredResults.map(city => (
      <li key={city.id} onClick={() => this.handleSelectSearchResultItem(city.id)}>{city.name}</li>))
  }

  render() {
      let filteredResults = this.props.cities.filter(city =>
      city.name.toLowerCase().includes(this.state.query.toLowerCase()));
      let firstResult = filteredResults[0];
      return (
        <div className="searchbar">
          <div className="searchbar-left">
            {this.state.searchOption} 
          </div>
          <form 
              className="searchbar-right"
              onSubmit={() => this.handleSelectSearchResultItem(firstResult.id)}
          >
            <i 
              onClick={() => this.handleSelectSearchResultItem(firstResult.id)}
              className="fas fa-search search-icon">
            </i>
            <input
              type="text"
              className="search-input"
              onChange={this.handleChange}
              placeholder="Where are you going?"
              value={this.state.query}
            />
            <ul className="search-result-list">
              {this.state.query.length === 0 ? "" : this.renderSearchResults()}
            </ul>
          </form>
        </div>
      );
  }
}

export default withRouter(SearchBar);