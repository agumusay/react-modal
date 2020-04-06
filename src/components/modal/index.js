import React from "react";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };

    this.employee = this.props.employee;
  }

  render() {
    return <section className="modal">{this.props.children}</section>;
  }
}

export default Modal;
