import React from "react";
import ReactImg from "../header/img/react.svg";

export default class HeaderFavouriteSub extends React.Component {
  render() {
    return (
      <div className="header_bottom-content_favourite">
        <img alt="" src={ReactImg} />
        <div className="header_bottom-content_text">
          The React Library
          <di className="header_bottom-content_context">r/react</di>
        </div>
      </div>
    );
  }
}
