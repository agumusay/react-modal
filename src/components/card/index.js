import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="card">
        <div className="card-bar"></div>
        <img className="card-avatar" src="" alt="" />
        <div className="card-info">
          <h2 className="card-info-name">{}</h2>
          <p className="card-info-position">{}</p>
        </div>
      </section>
    );
  }
}

export default Card;
