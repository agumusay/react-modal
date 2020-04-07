import "./card.scss";
import React from "react";
import Avatar from "../avatar";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      employeeWillUpdate: this.props.employee,
    };

    this.employees = this.props.employees;
    this.employee = this.props.employee;
    this.openModal = this.openModal.bind(this);
    this.indexOfEmployee = this.employees.indexOf(this.employee);
  }

  openModal() {
    let index = this.passIndexToParent();
    let modalInfo = this.passDataToParent();
    this.setState({
      isModalOpen: true,
    });
    this.props.parentCallBack(modalInfo);
    this.props.parentCallBack2(true);
    this.props.parentCallBack3(index);
  }

  passDataToParent() {
    return (
      <div className="modal-content-child">
        <div className="modal-wrapper-close">×</div>
        <header className="modal-wrapper-header">
          {this.state.employeeWillUpdate.firstName} {this.state.employeeWillUpdate.lastName}
        </header>
        <Avatar url={this.state.employeeWillUpdate.avatar} size="large" type="rounded" />
        <h4 className="modal-wrapper-content-department">
          {this.state.employeeWillUpdate.departMent}
        </h4>
        <div className="modal-wrapper-content-title">{this.state.employeeWillUpdate.jobTitle}</div>
        <footer className="modal-wrapper-footer"></footer>
      </div>
    );
  }

  passValueToParent() {
    return this.state.isModalOpen;
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
