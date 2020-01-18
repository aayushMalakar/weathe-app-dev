import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import SomeCard from "./someCard";

const DefaultCard = props => {
  const [weathers, setWeathers] = useState([]);

  // console.log(props);

  useEffect(() => {
    if (props.weathers.length > 0) {
      setWeathers(props.weathers);
    }
  });
  return (
    <div>
      {weathers.map((value, index) => (
        <SomeCard key={index} {...value}></SomeCard>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return { weathers: state.weather.defaultCity };
};

export default connect(mapStateToProps)(DefaultCard);
