import React from "react";

import "./Breadcrumbs.css";

function Breadcrumbs(props) {
  return (
    <ul className="mc-breadcrumb">
      {props.breadcrumbsPath.map((el, i) => {
        return (
          <li key={i}>
            <a href={el.link}>{el.name}</a>
          </li>
        );
      })}
    </ul>
  );
}

export default Breadcrumbs;
