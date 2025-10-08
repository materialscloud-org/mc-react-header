import "./App.css";

import React from "react";

import MaterialsCloudHeader from "./MaterialsCloudHeader";

function App() {
  return (
    <div className="App">
      <MaterialsCloudHeader
        activeSection={"discover"} // see the corresponding key in MaterialsCloudHeader/Navbar.js
        breadcrumbsPath={[
          { name: "Discover", link: "https://www.materialscloud.org/discover" },
          {
            name: "Materials Cloud three-dimensional crystals database",
            link: "https://www.materialscloud.org/discover/mc3d",
          },
          { name: "test", link: null },
        ]}
      >
        <h3>Test content</h3>
        <p>Test content</p>
      </MaterialsCloudHeader>
    </div>
  );
}

export default App;
