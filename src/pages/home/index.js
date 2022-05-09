import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCountriesDetails } from "../../redux/actions/country";
import Country from "./Country";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountriesDetails());
  }, [dispatch]);

  return <Country />;
};

export default Home;
