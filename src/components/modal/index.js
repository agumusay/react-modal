import React from "react";
import MoveButton from "../move-button";
class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };

    this.employee = this.props.employee;
  }

  getIndexFromButton = (childIndex) => {
    this.setState({
      index: childIndex,
    });
  };

  passIndexToParent() {
    return this.state.index;
  }
  render() {
    return (
      <section className={`modal ${this.props.clas}`}>
        <div className="modal-content">
          {this.props.children}
          <MoveButton
            countType="previous"
            indexOfEmployee={this.props.initialIndex}
            parentCallBack={this.getIndexFromButton}
          />
          <MoveButton
            countType="next"
            indexOfEmployee={this.props.initialIndex}
            parentCallBack={this.getIndexFromButton}
          />
        </div>
      </section>
    );
  }
}

export default Modal;
