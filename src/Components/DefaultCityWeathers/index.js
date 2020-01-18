import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { initLoadWeather } from "../../Actions/action";

const Citites = props => {
  const [cities, setCities] = useState(["London", "Kathmandu"]);

  useEffect(() => {
    props.loadData(cities);
  });

  return <div></div>;
};

const mapDispatchToProps = dispatch => ({
  loadData: cities => dispatch(initLoadWeather(cities))
});

export default connect(null, mapDispatchToProps)(Citites);
