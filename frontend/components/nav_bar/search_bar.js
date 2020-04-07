import React, { Component } from 'react';
import {connect} from 'react-redux';
import { createHashHistory } from "history";


export class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchOption: "Explore",
            query: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSelectSearchResultItem = this.handleSelectSearchResultItem.bind(this);
       
    }

    handleSelectSearchResultItem(cityId) {
        const history = createHashHistory();
        this.setState({query: ""});
        history.push(`/cities/${cityId}`);  
    }

    handleChange(e) {
        const query = e.target.value;
        this.setState({query})
    }

    render() {
        let filteredResults = this.props.cities.filter(city => city.name.toLowerCase().includes(this.state.query));
        let firstResult = filteredResults[0];
        console.log(firstResult);
        return (
          <div className="searchbar">
            <div className="searchbar-left">
              {this.state.searchOption} &nbsp; {"▾"}
            </div>
            <form 
                className="searchbar-right"
                onSubmit={() => this.handleSelectSearchResultItem(firstResult.id)}
            >
              <i className="fas fa-search search-icon"></i>
              <input
                type="text"
                className="search-input"
                onChange={this.handleChange}
                placeholder="Where are you going?"
                value={this.state.query}
              />
              <ul className="search-result-list">
                {this.state.query.length === 0 ? "" : 
                    filteredResults.map(city => (
                        <li key={city.id} onClick={() => this.handleSelectSearchResultItem(city.id)}>{city.name}</li>
                ))}
              </ul>
            </form>
          </div>
        );
    }
}

const mSTP = ({entities: {cities}}) => {
    return {
        cities: Object.values(cities)
    }

}

export default connect(mSTP, null)(SearchBar);
