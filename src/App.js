import "./App.css";

import MaterialsCloudHeader from "./MaterialsCloudHeader";

function App() {
  return (
    <div className="App">
      <MaterialsCloudHeader
        activeSection={"discover"} // see the corresponding key in MaterialsCloudHeader/Navbar.js
        breadcrumbsPath={[
          { name: "Work", link: "https://www.materialscloud.org/work" },
          { name: "Tools", link: "https://www.materialscloud.org/work/tools" },
          { name: "SeeK-path", link: null },
        ]}
      >
        <h3>Test content</h3>
        <p>Test content</p>
      </MaterialsCloudHeader>
    </div>
  );
}

export default App;
