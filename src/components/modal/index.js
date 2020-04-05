import React from "react";
import ModalContent from "../modal-content";
import ButtonPrevNext from "../button-prev-next";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  render() {
    return (
      <section className="modal">
        <header className="modal-header">
          <h1 className="modal-header-text"></h1>
        </header>
        <section className="modal-description">
          <ModalContent />
        </section>
        <footer className="modal-footer">
          <ButtonPrevNext />
          <ButtonPrevNext />
        </footer>
      </section>
    );
  }
}

export default Modal;
