import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCountriesDetails } from "../../redux/actions/country";
import CountriesDetail from "../../components/table";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountriesDetails());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <CountriesDetail />;
};

export default Home;
