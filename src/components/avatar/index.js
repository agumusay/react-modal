import React from "react";
import "./avatar.scss";
import propTypes from "prop-types";

class Avatar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { type: "square", size: "medium" };
  }
  render() {
    return (
      <img
        className={`modal-avatar ${this.props.name} ${this.props.type} ${this.props.size}`}
        src={this.props.url}
        alt={``}
      ></img>
    );
  }
}
Avatar.propTypes = {
  url: propTypes.string,
  type: propTypes.oneOf(["square", "rounded", "circle"]),
  size: propTypes.oneOf(["small", "medium", "large", "x-large"]),
};
export default Avatar;
