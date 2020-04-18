import React from "react";
import "./styles.scss";
import SocialLinksItem from "../social-links-item";

function SocialLinkstList(props) {
  console.log(props);
  return <div className="social-links-list">{<SocialLinksItem contact={props.contact} />}</div>;
}

export default SocialLinkstList;
