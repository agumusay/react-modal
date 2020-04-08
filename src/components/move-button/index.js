import React from "react";

class MoveButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.text = this.props.countType === "next" ? "Next" : "Previous";
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.parentCallBack(this.props.countType);
  }

  passValueToParent() {
    return this.state.counter;
  }

  render() {
    console.log(this.props.indexOfEmployee);
    return (
      <button
        onClick={this.handleClick}
        className={this.props.clas}
        disabled={this.props.indexOfEmployee <= -1 || this.props.indexOfEmployee > 41}
      >
        {this.text}
      </button>
    );
  }
}

export default MoveButton;
