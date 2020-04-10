import "./card.scss";
import React from "react";
import Avatar from "../avatar";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };

    this.employees = this.props.employees;
    this.employee = this.props.employee;
    this.openModal = this.openModal.bind(this);
    this.indexOfEmployee = this.employees.indexOf(this.employee);
  }

  openModal() {
    this.setState({
      isModalOpen: true,
    });

    this.props.parentCallBack([true, this.passIndexToParent()]);
  }

  passIndexToParent() {
    return this.indexOfEmployee;
  }

  render() {
    
    return (
      <section className="card" onClick={this.openModal}>
        <div className="card-bar">
          <Avatar url={this.employee.avatar} name="card-bar-avatar" type="circle" size="medium" />
        </div>
        <div className="card-info">
          <h3 className="card-info-name">
            {this.employee.firstName} {this.employee.lastName}
          </h3>
          <p className="card-info-position">{this.employee.jobTitle}</p>
        </div>
      </section>
    );
  }
}

export default Card;
