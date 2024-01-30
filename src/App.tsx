import React from "react";
import { CustomDropdown } from "./CustomDropdown";

const App = () => {
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          height: "100vh",
          width: "100vw",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CustomDropdown />
      </div>
    </React.Fragment>
  );
};

export default App;
