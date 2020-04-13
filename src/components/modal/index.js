import React from "react";
import MoveButton from "../move-button";
import Avatar from "../avatar";
import SocialLinksList from "../social-links-list";
import pattern1 from "./pattern1.jpg";
import pattern2 from "./pattern2.jpg";
import pattern3 from "./pattern3.jpg";

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
          {this.props.children}
          <header className="modal-content-header">
            <img
              className="modal-content-header-image"
              src={
                employee.department === "Business"
                  ? pattern3
                  : employee.department === "Engineering"
                  ? pattern1
                  : employee.department === "Design"
                  ? pattern2
                  : ""
              }
              alt=""
            />
            <h1 className="modal-content-header-title">
              {employee.firstName} {employee.lastName}
            </h1>
          </header>
          <div className="modal-content-wrapper">
            <Avatar url={employee.avatar} size="large" type="rounded" />
            <h4 className="modal-content-wrapper-department">{employee.department}</h4>
            <div className="modal-content-wrapper-title">{employee.jobTitle}</div>
            <p className="modal-content-wrapper-bio">{employee.bio}</p>
            <SocialLinksList contact={employee.contact} />
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
