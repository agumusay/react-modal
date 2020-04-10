import React from "react";

class MoveButton extends React.Component {
  constructor(props) {
    super(props);

   

    this.text = this.props.countType === "next" ? "Next" : "Previous";
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.parentCallBack(this.props.countType);
  }

  render() {
    return (
      <button
        onClick={this.handleClick}
        className={this.props.countType}
        disabled={
          (this.props.countType === "previous" && this.props.index1 <= 0) ||
          (this.props.countType === "next" && this.props.index2 >= 41)
        }
      >
        {this.text}
      </button>
    );
  }
}

export default MoveButton;
