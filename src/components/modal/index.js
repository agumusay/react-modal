import React from "react";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.employee = this.props.employee;
  }

  render() {
    return <section className="modal">{this.props.children}</section>;
  }
}

export default Modal;
