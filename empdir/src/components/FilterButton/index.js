import React, { Component } from "react";
import "./style.css";



class FilterButton extends Component {

    render() {
    return (
        <button onClick={this.handleFormSubmit}>Filter by Name</button>
    );
  }
} 
  export default FilterButton;