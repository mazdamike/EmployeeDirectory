import React from "react";
import "./style.css";

function Employee(props) {
  return (
          <tr>
            <td>{props.name}</td>
            <td>{props.department}</td>
            <td>{props.position}</td>
            <td>{props.email}</td>
          </tr>
  );
}

export default Employee;