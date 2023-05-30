import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  handleFilterChange = event => {
    this.props.setFilter(event.target.value.toLowerCase());
  };

  render() {
    return (
      <div>
        <p>Find contacts by name</p>
        <input type="text" onChange={this.handleFilterChange} />
      </div>
    );
  }
}

Filter.propTypes = {
  setFilter: PropTypes.func.isRequired,
};

export default Filter;
