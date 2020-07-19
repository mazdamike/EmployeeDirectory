import React, { Component } from "react";
import Employee from "./components/Employee";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees.json";
import FilterButton from "./components/FilterButton";

class App extends Component {
  // Setting this.state.employees to the employees json array
  state = {
    employees
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    console.log("you clicked me");
  };
  
  // Map over this.state.employees and render a Employee component for each employee object
  render() {
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        
        <table>
        <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Position</th>
            <th>Email</th>
          </tr>
        {this.state.employees.map(employee => (
          <Employee
            id={employee.id}
            key={employee.id}
            name={employee.name}
            department={employee.department}
            position={employee.position}
            email={employee.email}
          />
          
        ))}
        </table>
        
      </Wrapper>
    );
  }
}

export default App;
