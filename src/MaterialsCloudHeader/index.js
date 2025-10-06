import "./index.css";

import Navbar from "./Navbar";
import Breadcrumbs from "./Breadcrumbs";

const MaterialsCloudHeader = ({ activeSection, breadcrumbsPath, children }) => (
  <div className="main-container">
    <Navbar activeSection={activeSection} />
    <div className="content-container">
      <Breadcrumbs breadcrumbsPath={breadcrumbsPath} />
      {children}
    </div>
  </div>
);

export default MaterialsCloudHeader;
