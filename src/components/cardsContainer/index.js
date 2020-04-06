import "./cards-container.scss";
import React from "react";

import Card from "../../components/card";

class CardsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.employees = this.props.employees;
  }

  render() {
    return (
      <section className="cards-container">
        {this.employees.map((employee, index) => {
          return <Card employee={employee} key={employee.id} />;
        })}
      </section>
    );
  }
}

export default CardsContainer;
