import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";

import { fetchCountries } from "../../redux/actions/country";

const Country = () => {
  const { countryName } = useParams();

  const dispatch = useDispatch();
  const data = useSelector((state) => state.allCountries.countries);
  console.log("------", data);
  useEffect(() => {
    if (countryName && countryName !== "")
      dispatch(fetchCountries(countryName));
  }, [countryName, dispatch]);

  return (
    <div>
      Country
      {data.map((d) => {
        return <div>{d.name.common}</div>;
      })}
    </div>
  );
};

export default Country;
