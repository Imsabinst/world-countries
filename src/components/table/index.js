import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

import { ThemeContext } from "../../context/ThemeContext";
import Button from "../../components/button/Button";
import { addFavouriteCountries } from "../../redux/actions/cart";
//import { Link } from "react-router-dom";

import "./table.scss";

const styleLight = {
  td: {
    background: "#333 !important",
    color: "#EEF1F1",
  },
};
const styleDark = {
  td: {
    background: "#eee !important",
    color: "#333",
  },
};

const Country = () => {
  const data = useSelector((state) => state);
  const countries = data.allCountries.countries;
  const favCountries = data.addCountries.favoriteCountries;
  const filterCountry = data.allCountries.filteredCountries;

  console.log("table", favCountries);
  console.log("table", filterCountry);

  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);
  console.log("****", theme);
  return (
    <TableContainer className="table" component={Paper}>
      <Table
        aria-label="Countries table"
        sx={theme?.color === "white" ? styleLight : styleDark}
      >
        <TableHead>
          <TableRow className="table__head">
            <TableCell> Flag</TableCell>
            <TableCell> Name</TableCell>
            <TableCell> Languages</TableCell>
            <TableCell> Population</TableCell>
            <TableCell> Region</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="table__body">
          {countries.length > 0 &&
            countries
              .filter((item) =>
                item.name.common.toLowerCase().match(filterCountry)
              )
              .map((country) => (
                <TableRow key={country.name.common} className="table__row">
                  <TableCell style={{ fontSize: "2rem" }}>
                    {country.flag}
                  </TableCell>
                  <TableCell>
                    {/*  <Link to={`/${country.name.common}`}>
                    </Link> */}
                    {country.name.common}
                  </TableCell>
                  <TableCell>
                    {country.languages != null &&
                      Object.values(country.languages).map((language) => (
                        <ul key={language}>
                          <li>{language}</li>
                        </ul>
                      ))}
                  </TableCell>
                  <TableCell>{country.population}</TableCell>
                  <TableCell>{country.region}</TableCell>
                  <TableCell>
                    <Button
                      isDisabled={favCountries.find(
                        (i) => i.name.common === country.name.common
                      )}
                      handleClick={() =>
                        dispatch(addFavouriteCountries(country))
                      }
                    />
                  </TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Country;
