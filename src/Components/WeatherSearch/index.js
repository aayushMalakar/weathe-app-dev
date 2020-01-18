import React, { useState } from "react";
import { connect } from "react-redux";
import { showCurrentWeather } from "../../Actions/action";

const WeatherSearchBar = props => {
  const [userInput, setUserInput] = useState("");

  const onChangeHandler = e => {
    setUserInput(e.target.value);
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    props.loadData(userInput);
    setUserInput("");
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input type="text" onChange={onChangeHandler} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  loadData: city => dispatch(showCurrentWeather(city))
});

export default connect(null, mapDispatchToProps)(WeatherSearchBar);
