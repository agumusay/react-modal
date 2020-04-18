import React from "react";

function MoveButton(props) {
  let text = props.countType === "next" ? "Next" : "Previous";

  const handleClick = () => {
    props.parentCallBack(props.countType);
  };

  return (
    <button
      onClick={handleClick}
      className={props.countType}
      disabled={props.index1 <= 0 || props.index2 >= 41}
    >
      {text}
    </button>
  );
}

export default MoveButton;
