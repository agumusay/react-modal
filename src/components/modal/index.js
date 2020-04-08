import React from "react";
import MoveButton from "../move-button";
import Avatar from "../avatar";
class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      move: "",
      index: 0,
    };

    this.employees = this.props.employees;
    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.initialIndex !== prevProps.initialIndex) {
      this.setState({
        index: this.props.initialIndex,
      });
    }
  }
  handleNext(move) {
    let updateIndex = this.state.index;
    this.setState({
      move: move,
      index: move === "next" ? updateIndex + 1 : updateIndex,
    });
    this.props.parentCallBack(this.passIndexToParent());
  }

  handlePrevious(move) {
    let updateIndex = this.state.index;
    this.setState({
      move: move,
      index: move === "previous" ? updateIndex - 1 : updateIndex,
    });
    this.props.parentCallBack2(this.passIndexToParent2());
  }

  passIndexToParent() {
    return this.state.index;
  }
  passIndexToParent2() {
    return this.state.index;
  }
  render() {
    let employee = this.employees[this.state.index];
    return (
      <section className={`modal ${this.props.clas}`}>
        <div className="modal-content">
          <div className="modal-content-child">
            <div className="modal-wrapper-close">×</div>
            <header className="modal-wrapper-header">
              {employee.firstName} {employee.lastName}
            </header>
            <Avatar url={employee.avatar} size="large" type="rounded" />
            <h4 className="modal-wrapper-content-department">{employee.departMent}</h4>
            <div className="modal-wrapper-content-title">{employee.jobTitle}</div>
            <footer className="modal-wrapper-footer"></footer>
          </div>
          <MoveButton
            countType="previous"
            indexOfEmployee={this.state.index}
            parentCallBack={this.handlePrevious}
          />
          <MoveButton
            countType="next"
            indexOfEmployee={this.state.index}
            parentCallBack={this.handleNext}
          />
        </div>
      </section>
    );
  }
}

export default Modal;
