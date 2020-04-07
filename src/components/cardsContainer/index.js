import "./cards-container.scss";
import React from "react";

import Card from "../../components/card";
import Modal from "../../components/modal";
class CardsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };

    this.employees = this.props.employees;
  }

  getDataFromChild = (childData) => {
    this.setState({
      data: childData,
    });
  };

  render() {
    console.log(this.state.data);
    return (
      <section className="cards-container">
        {this.employees.map((employee) => {
          return (
            <Card employee={employee} key={employee.id} parentCallBack={this.getDataFromChild} />
          );
        })}
        <Modal>{this.state.data}</Modal>
      </section>
    );
  }
}

export default CardsContainer;
