import React from "react";

class SiteHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <header className="header">
        <div className="header-company">
          <img src="" alt="" className="header-company-logo" />
          Awesome Company
        </div>
        <h1 className="header-title">Meet the Team</h1>
      </header>
    );
  }
}

export default SiteHeader;
