import React, { useState, useLayoutEffect } from "react";
import MoveButton from "../move-button";
import Avatar from "../avatar";
import SocialLinksList from "../social-links-list";
import pattern1 from "./pattern1.jpg";
import pattern2 from "./pattern2.jpg";
import pattern3 from "./pattern3.jpg";

function Modal(props) {
  const [index, setIndex] = useState(0);

  useLayoutEffect(() => {
    setIndex(props.initialIndex);
  }, [props.initialIndex]);

  const handleNext = () => {
    let updateIndex = index;
    setIndex(updateIndex + 1);
    props.parentCallBack(passIndexToParent());
  };

  const handlePrevious = () => {
    let updateIndex = index;
    setIndex(updateIndex - 1);
    props.parentCallBack(passIndexToParent());
  };

  const passIndexToParent = () => {
    return index;
  };

  const employees = props.employees;
  const employee = employees[index];

  return (
    <section
      className={`modal ${props.clas}  ${
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
        {props.children}
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
          <MoveButton countType="previous" parentCallBack={handlePrevious} index1={index} />
          <MoveButton countType="next" parentCallBack={handleNext} index2={index} />
        </footer>
      </div>
    </section>
  );
}

export default Modal;
