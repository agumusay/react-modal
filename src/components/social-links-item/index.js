import React from "react";
import "./styles.scss";

import phoneLogo from "./phone.svg";
import mailLogo from "./email.svg";
import webLogo from "./www.svg";

let socialIcons = [phoneLogo, mailLogo, webLogo];
let linkType = ["tel:", "mailto:", ""];
function SocialLinksItem(props) {
  return Object.keys(props.contact).map((key, index) => {
    return (
      <a key={key} className="social-item" href={linkType[index] + props.contact[key]}>
        <img src={socialIcons[index]} alt={key} />
        <p className="link-type">{props.contact[key]}</p>
      </a>
    );
  });
}

export default SocialLinksItem;
