import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Link, useParams } from "react-router-dom";
import { addFavouriteCountries } from "../../redux/actions/cart";

import { getSingleCountry } from "../../redux/actions/country";
import BackButton from "../buttons/BackButton";
import Button from "../buttons/Button";

const Country = () => {
  const { countryName } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const selectedCountry = data.allCountries.singleCountry;
  const favCountries = data.addCountries.favoriteCountries;

  useEffect(() => {
    if (countryName && countryName !== "")
      dispatch(getSingleCountry(countryName));
  }, [countryName, dispatch]);

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Grid item xs={3} style={{ minHeight: "80vh", marginTop: "2rem" }}>
        <Card>
          {selectedCountry != null &&
            selectedCountry.map((country) => {
              return (
                <CardActionArea key={country.name.commmon}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={country.flags.png}
                    alt={`${country.name.common} flag`}
                  />
                  <CardContent>
                    {/*  <Typography gutterBottom variant="h6" component="div">
                      Country name: {country.name.common}
                    </Typography>
                    <Typography gutterBottom component="div">
                      Languages:
                      {country.languages != null &&
                        Object.values(country.languages).map((language) => (
                          <div>{language}</div>
                        ))}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      Population: {country.population}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      Region: {country.region}
                    </Typography> */}
                    <Typography variant="body2" color="text.secondary">
                      {country.name.common} has population of{" "}
                      {country.population}. The main languages are:{" "}
                      {country.languages != null &&
                        Object.values(country.languages).map((language) => {
                          return <i key={language}>{language},</i>;
                        })}
                      .The country is in {country.region}
                    </Typography>
                  </CardContent>
                  <Link to={`/`}>
                    <BackButton />
                  </Link>
                  <Button
                    isDisabled={favCountries.find(
                      (i) => i.name.common === country.name.common
                    )}
                    handleClick={() => dispatch(addFavouriteCountries(country))}
                  />
                </CardActionArea>
              );
            })}
        </Card>
      </Grid>
    </Grid>
  );
};

export default Country;
