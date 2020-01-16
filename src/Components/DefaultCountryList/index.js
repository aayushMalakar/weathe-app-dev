import React, { useState } from "react";

const CountryList = () => {
  const [countries, setCountry] = useState([
    "Nepal",
    "INDIA",
    "USA",
    "UK",
    "FRANCE",
    "GERMANY",
    "JAPAN",
    "KOREA"
  ]);
  return (
    <div>
      <ul>
        {countries.map((country, index) => (
          <li>{country}</li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
