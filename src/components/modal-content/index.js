import React from "react";
import Avatar from "../avatar";
import ButtonPrevNext from "../button-prev-next";
class ModalContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.employee = this.props.employee;
  }
  render() {
    return (
      <section className="modal-content">
        <div className="modal-wrapper-close">×</div>
        <header className="modal-wrapper-header">
          {this.employee.firstName} {this.employee.lastName}
        </header>
        <Avatar type="rounded" size="large" url={this.employee.avatar} />
        <h4 className="modal-wrapper-content-department">{this.employee.departMent}</h4>
        <div className="modal-wrapper-content-title">{this.employee.jobTitle}</div>
        <footer className="modal-wrapper-footer">
          <ButtonPrevNext />
          <ButtonPrevNext />
        </footer>
      </section>
    );
  }
}

export default ModalContent;
