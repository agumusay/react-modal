import "./cards-container.scss";
import React from "react";

import Card from "../../components/card";
import Modal from "../../components/modal";
class CardsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      open: false,
      index: 0,
      updateIndex: 0,
    };

    this.employees = this.props.employees;
  }
  getValueFromChild = (childValue) => {
    this.setState({
      open: childValue,
    });
  };
  getDataFromChild = (childData) => {
    this.setState({
      data: childData,
    });
  };

  getIndexFromChild = (childIndex) => {
    this.setState({
      index: childIndex,
    });
  };

  getUpdatedIndexFromModal = (updatedIndex) => {
    this.setState({
      updateIndex: updatedIndex,
    });
  };
  render() {
    return (
      <section className="cards-container">
        {this.employees.map((employee) => {
          return (
            <Card
              employees={this.employees}
              employee={employee}
              key={employee.id}
              parentCallBack={this.getDataFromChild}
              parentCallBack2={this.getValueFromChild}
              parentCallBack3={this.getIndexFromChild}
            />
          );
        })}
        <Modal
          clas={this.state.open ? "show" : ""}
          initialIndex={this.state.index}
          parentCallBack={this.getUpdatedIndexFromModal}
        >
          {this.state.data}
        </Modal>
      </section>
    );
  }
}

export default CardsContainer;
