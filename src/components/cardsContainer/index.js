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

  getValuesFromCard = (childValue) => {
    this.setState({
      open: childValue[0],
      index: childValue[1],
    });
  };

  getUpdatedIndexFromModal = (updatedIndex) => {
    this.setState({
      updateIndex: updatedIndex,
    });
  };
  getUpdatedIndexFromModal2 = (updatedIndex) => {
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
              updateIndex={this.state.updateIndex}
              parentCallBack={this.getValuesFromCard}
            />
          );
        })}
        <Modal
          clas={this.state.open ? "show" : ""}
          employees={this.employees}
          initialIndex={this.state.index}
          parentCallBack={this.getUpdatedIndexFromModal}
          parentCallBack2={this.getUpdatedIndexFromModal2}
        ></Modal>
      </section>
    );
  }
}

export default CardsContainer;
