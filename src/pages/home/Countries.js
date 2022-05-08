import React from "react";
import { useSelector } from "react-redux";

const Countries = () => {
  const countries = useSelector((state) => state.allCountries.countries);

  const renderCountry = countries.map((country) => {
    const { name } = country;
    return (
      <div className="home" key={name}>
        {name}
      </div>
    );
  });
  return <div className="home">{renderCountry}</div>;
};

export default Countries;
