import React from "react";

class SiteFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <footer className="footer">
        <p className="footer-text">
          {`Icons made by`}
          <a className="link-1" href="https://www.flaticon.com/authors/freepik">
            {` Freepik `}
          </a>
          {` from `}
          <a className="link-2" href="https://www.flaticon.com/">
            www.flaticon.com
          </a>
        </p>
      </footer>
    );
  }
}

export default SiteFooter;
