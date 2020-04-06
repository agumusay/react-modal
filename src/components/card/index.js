import "./card.scss";
import React from "react";
import Avatar from "../avatar";
import ButtonPrevNext from "../button-prev-next";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };

    this.employee = this.props.employee;
    this.handleClick = this.handleClick.bind(this);
    this.handleModalCloseClick = this.handleModalCloseClick.bind(this);
    this.passDataToModal = this.passDataToModal.bind(this);
  }

  handleClick() {
    this.setState({
      isModalOpen: true,
    });
  }

  handleModalCloseClick() {
    this.setState({
      isModalOpen: false,
    });
  }

  passDataToModal() {
    if (!this.state.isModalOpen) {
      return null;
    }

    return (
      <section className="modal-content">
        <div className="modal-wrapper-close"></div>
        <header className="modal-wrapper-header">
          {this.employee.firstName} {this.employee.lastName}
        </header>
        <Avatar />
        <h4 className="modal-wrapper-content-department">{this.employee.departMent}</h4>
        <div className="modal-wrapper-content-title">{this.employee.jobTitle}</div>
        <footer className="modal-wrapper-footer">
          <ButtonPrevNext />
          <ButtonPrevNext />
        </footer>
      </section>
    );
  }
  render() {
    return (
      <section className="card" onClick={this.handleClick}>
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
