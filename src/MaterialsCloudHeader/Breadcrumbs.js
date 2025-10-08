import "./Breadcrumbs.css";
import React from "react";

const Breadcrumbs = ({ breadcrumbsPath }) => (
  <ul className="mc-breadcrumb">
    {breadcrumbsPath.map((el, i) => {
      return (
        <li key={i}>
          <a href={el.link}>{el.name}</a>
        </li>
      );
    })}
  </ul>
);

export default Breadcrumbs;
