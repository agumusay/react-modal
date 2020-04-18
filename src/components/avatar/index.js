import React from "react";
import "./avatar.scss";
import propTypes from "prop-types";
function Avatar(props) {
  return (
    <img
      className={`modal-avatar ${props.name} ${props.type} ${props.size}`}
      src={props.url}
      alt={``}
    ></img>
  );
}

Avatar.propTypes = {
  url: propTypes.string,
  type: propTypes.oneOf(["square", "rounded", "circle"]),
  size: propTypes.oneOf(["small", "medium", "large", "x-large"]),
};
export default Avatar;
