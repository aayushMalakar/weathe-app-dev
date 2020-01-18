import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Card from "./Components/Cards";
import Citites from "./Components/DefaultCityWeathers";
import DefaultCards from "./Components/DefaultCityWeathers/defaultCards";
import WeatherSearch from "./Components/WeatherSearch";

import { retreiveData } from "./services";

function App() {
  retreiveData();
  return (
    <div className="App">
      <Header></Header>
      <Citites></Citites>
      <DefaultCards></DefaultCards>
      <WeatherSearch></WeatherSearch>
      <Card></Card>
    </div>
  );
}

export default App;
