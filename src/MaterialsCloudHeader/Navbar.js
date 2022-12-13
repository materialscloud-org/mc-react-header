import "./Navbar.css";

import Logo from "./assets/mcloud_logo.png";

import "font-awesome/css/font-awesome.min.css";
import React from "react";

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

class DropdownMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dropdownOpen: false };
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if (this.state.dropdownOpen) {
        this.setState({ dropdownOpen: false });
      }
    }
  }

  toggleDropdown() {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  }
  render() {
    let dropdownContentClass = "dropdown-content";
    if (this.state.dropdownOpen) {
      dropdownContentClass += " dropdown-open";
    }
    return (
      <div ref={this.setWrapperRef} className="more-dropdown">
        <a className="more-btn" onClick={this.toggleDropdown}>
          More <i className="fa fa-caret-down"></i>
        </a>
        <div className={dropdownContentClass}>
          {Object.keys(dropdownSections).map((element, i) => {
            let cname = "";
            if (element == this.props.activeSection) cname = "active";
            return (
              <a
                key={i}
                className={cname}
                href={dropdownSections[element].link}
              >
                {dropdownSections[element].name}
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}

class Navbar extends React.Component {
  render() {
    return (
      <div className="mc-navbar">
        <a className="mc-navbrand" href="https://www.materialscloud.org/home">
          <img src={Logo} height="50" alt="MC logo" />
        </a>
        {Object.keys(mainSections).map((key, i) => {
          let cname = "mc-navlink";
          if (key == this.props.activeSection) cname += " active";
          return (
            <a key={i} className={cname} href={mainSections[key].link}>
              {mainSections[key].name}
            </a>
          );
        })}
        <DropdownMenu activeSection={this.props.activeSection} />
      </div>
    );
  }
}

export default Navbar;
