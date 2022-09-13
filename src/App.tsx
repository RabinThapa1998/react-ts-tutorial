import React, { useState } from "react";

import "./App.css";
import ContactPage from "./components/ContactPage";
import Homepage from "./components/Homepage";

export interface dataProps {
  [key: string]: string[];
}

function App() {
  return (
    <div className="App">
      <h1>React Typescript</h1>
      <Homepage
        // title="React Engine"
        // desc="Lorem 123123213"
        streetno={1231232313211}
        bioData={[
          { firstName: "rajesh", age: 78 },
          { firstName: "rohan", age: 32 },
        ]}
        desc="dfasdf"
      />
      <ContactPage age={12} name={"time machine"} />
    </div>
  );
}

export default App;
