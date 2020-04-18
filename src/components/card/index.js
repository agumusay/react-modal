import "./card.scss";
import React from "react";
import Avatar from "../avatar";

function Card(props) {
  const employees = props.employees;
  const employee = props.employee;
  const indexOfEmployee = employees.indexOf(employee);

  const openModal = () => {
    props.parentCallBack(indexOfEmployee);
  };

  return (
    <section className="card" onClick={openModal}>
      <div className="card-bar">
        <Avatar url={employee.avatar} name="card-bar-avatar" type="circle" size="medium" />
      </div>
      <div className="card-info">
        <h3 className="card-info-name">
          {employee.firstName} {employee.lastName}
        </h3>
        <p className="card-info-position">{employee.jobTitle}</p>
      </div>
    </section>
  );
}

export default Card;
