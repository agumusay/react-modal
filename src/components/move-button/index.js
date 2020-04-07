import React from "react";

class MoveButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.indexOfEmployee,
    };
    this.text = this.props.countType === "next" ? "Next" : "Previous";
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state, props) => {
      let index = this.passValueToParent();
      let updatedCounter = state.counter;
      props.countType === "next" ? updatedCounter++ : updatedCounter--;
      props.parentCallBack(index);
      return {
        counter: updatedCounter,
      };
    });
  }

  passValueToParent() {
    return this.state.counter;
  }

  render() {
    console.log(this.state.counter);
    return (
      <button
        onClick={this.handleClick}
        disabled={!this.state.counter || this.state.counter === 48}
        className={this.props.clas}
      >
        {this.text}
      </button>
    );
  }
}

export default MoveButton;
