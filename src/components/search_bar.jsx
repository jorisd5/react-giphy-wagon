import React, { Component } from 'react';

class SearchBar extends Component {
  // Er worden geen props gebruikt in de render method
  shouldComponentUpdate() {
    return false;
  }

  handleUpdate = (event) => {
    this.props.searchFunction(event.target.value);
  }

  render() {
    console.log("SEARCH_BAR RENDER ");
    return (
      <input
        type="text"
        className="form-control form-search"
        onChange={this.handleUpdate}
      />
    );
  }
}

export default SearchBar;
