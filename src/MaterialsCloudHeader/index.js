import React from "react";
import "./index.css";

import Navbar from "./Navbar";
import Breadcrumbs from "./Breadcrumbs";

class MaterialsCloudHeader extends React.Component {
  render() {
    return (
      <div className="main-container">
        <Navbar activeSection={this.props.activeSection} />
        <div className="content-container">
          <Breadcrumbs breadcrumbsPath={this.props.breadcrumbsPath} />
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default MaterialsCloudHeader;
