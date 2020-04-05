import React from "react";
import "./styles.scss";
import propTypes from "prop-types";

function Avatar({ url = "", type = "square", size = "medium" }) {
  return (
    <img
      className={`modal-content-avatar ${type} ${size}`}
      src={url}
      alt={`avatar-${type}-${size}`}
    ></img>
  );
}

Avatar.propTypes = {
  url: propTypes.string,
  type: propTypes.oneOf(["square", "rounded", "circle"]),
  size: propTypes.oneOf(["small", "medium", "large", "x-large"]),
};
export default Avatar;
