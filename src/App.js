import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Button from "./Components/Button";
import Countries from "./Components/DefaultCountryList";

import { retreiveData } from "./services";

function App() {
  retreiveData();
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
      <Button></Button>
    </div>
  );
}

export default App;
