import React from "react";
import "./App.css";
import Button from "./Components/Button";

import { retreiveData } from "./services";

function App() {
  retreiveData();
  return (
    <div className="App">
      <Button></Button>
    </div>
  );
}

export default App;
