import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "../../redux/actions/country";

const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.allCountries.countries);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

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

export default Home;
