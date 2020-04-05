import React from "react";

import Card from "./components/card";

class CardsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="cards-container">
        <p className="cards-container-info"></p>
        {/*Map for Cards Here*/} <Card />
      </section>
    );
  }
}

export default CardsContainer;
