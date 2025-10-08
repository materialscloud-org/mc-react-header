import "./Navbar.css";

import React from "react";
import Logo from "./assets/mcloud_logo.png";

import "font-awesome/css/font-awesome.min.css";
import { useEffect, useRef, useState } from "react";

const mainSections = {
  learn: { name: "LEARN", link: "https://www.materialscloud.org/learn" },
  work: { name: "WORK", link: "https://www.materialscloud.org/work" },
  discover: {
    name: "DISCOVER",
    link: "https://www.materialscloud.org/discover",
  },
  explore: { name: "EXPLORE", link: "https://www.materialscloud.org/explore" },
  archive: { name: "ARCHIVE", link: "https://www.materialscloud.org/archive" },
};

const dropdownSections = {
  policies: {
    name: "Policies",
    link: "https://www.materialscloud.org/policies",
  },
  dmp: {
    name: "Data Management Plan",
    link: "https://www.materialscloud.org/dmp",
  },
  terms: {
    name: "Terms of Use",
    link: "https://www.materialscloud.org/termssummary",
  },
  infrastructure: {
    name: "Infrastructure",
    link: "https://www.materialscloud.org/infrastructure",
  },
  team: { name: "Team & Contact", link: "https://www.materialscloud.org/team" },
  partners: {
    name: "Partners",
    link: "https://www.materialscloud.org/home#partners",
  },
  restapi: {
    name: "Connect your REST API",
    link: "https://www.materialscloud.org/explore/connect",
  },
};

const DropdownMenu = ({ activeSection }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const dropdownContentClass =
    "dropdown-content" + (dropdownOpen ? " dropdown-open" : "");

  return (
    <div ref={wrapperRef} className="more-dropdown">
      <span className="more-btn" onClick={toggleDropdown}>
        More <i className="fa fa-caret-down" />
      </span>
      <div className={dropdownContentClass}>
        {Object.keys(dropdownSections).map((element, i) => {
          const { link, name } = dropdownSections[element];
          const cname = element === activeSection ? "active" : "";
          return (
            <a key={i} className={cname} href={link}>
              {name}
            </a>
          );
        })}
      </div>
    </div>
  );
};

const Navbar = ({ activeSection }) => (
  <div className="mc-navbar">
    <a className="mc-navbrand" href="https://www.materialscloud.org/home">
      <img src={Logo} height="50" alt="MC logo" />
    </a>
    {Object.keys(mainSections).map((key, i) => {
      let cname = "mc-navlink";
      if (key === activeSection) cname += " active";
      return (
        <a key={i} className={cname} href={mainSections[key].link}>
          {mainSections[key].name}
        </a>
      );
    })}
    <DropdownMenu activeSection={activeSection} />
  </div>
);

export default Navbar;
