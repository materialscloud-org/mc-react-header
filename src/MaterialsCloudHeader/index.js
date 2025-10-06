import "./index.css";

import Navbar from "./Navbar";
import Breadcrumbs from "./Breadcrumbs";

const MaterialsCloudHeader = ({ activeSection, breadcrumbsPath }) => (
  <div>
    <Navbar activeSection={activeSection} />
    <Breadcrumbs breadcrumbsPath={breadcrumbsPath} />
  </div>
);

export default MaterialsCloudHeader;
