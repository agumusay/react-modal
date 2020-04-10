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

  defineImage = () => {};

  render() {
    let employee = this.employees[this.state.index];
    return (
      <section
        className={`modal ${this.props.clas}  ${
          employee.department === "Business"
            ? "sunshine"
            : employee.department === "Engineering"
            ? "deep-purple"
            : employee.department === "Design"
            ? "roasted-peppers"
            : ""
        }`}
      >
        <div className={`modal-content`}>
          <div className="modal-content-close"></div>
          <header className="modal-content-header">
            {employee.firstName} {employee.lastName}
          </header>
          <div className="modal-content-wrapper">
            <Avatar url={employee.avatar} size="large" type="rounded" />
            <h4 className="modal-content-wrapper-department">{employee.department}</h4>
            <div className="modal-content-wrapper-title">{employee.jobTitle}</div>
            <p className="modal-content-wrapper-bio">{employee.bio}</p>
          </div>
          <footer className="modal-content-footer">
            <MoveButton
              countType="previous"
              parentCallBack={this.handlePrevious}
              index1={this.state.index}
            />
            <MoveButton
              countType="next"
              parentCallBack={this.handleNext}
              index2={this.state.index}
            />
          </footer>
        </div>
      </section>
    );
  }
}

export default Modal;
