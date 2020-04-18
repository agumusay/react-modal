import "./cards-container.scss";
import React, { useState } from "react";
import Card from "../../components/card";
import Modal from "../../components/modal";

function CardsContainer(props) {
  let [open, setOpen] = useState(false);
  let [index, setIndex] = useState(0);
  let [updateIndex, setUpdatedIndex] = useState(0);
  const employees = props.employees;

  const getValuesFromCard = (childValue) => {
    setOpen(true);
    setIndex(childValue);
  };

  const getIndexFromModal = (updatedIndex) => {
    setUpdatedIndex(updatedIndex);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <section className="cards-container">
      {employees.map((employee) => {
        return (
          <Card
            employees={employees}
            employee={employee}
            key={employee.id}
            updateIndex={updateIndex}
            parentCallBack={getValuesFromCard}
          />
        );
      })}
      <Modal
        clas={open ? "show" : ""}
        employees={employees}
        initialIndex={index}
        parentCallBack={getIndexFromModal}
      >
        <div className="modal-content-close" onClick={closeModal}></div>
      </Modal>
    </section>
  );
}

export default CardsContainer;
