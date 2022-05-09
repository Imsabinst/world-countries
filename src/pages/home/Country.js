import React from "react";
import { useSelector } from "react-redux";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import Button from "../../components/button/Button";

const Country = () => {
  const countries = useSelector((state) => state.allCountries.countries);
  console.log("this is country", countries);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="Product table">
        <TableHead>
          <TableRow>
            <TableCell> Flag</TableCell>
            <TableCell> Name</TableCell>
            <TableCell> Population</TableCell>
            <TableCell> Region</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {countries.length > 0 &&
            countries.map((row) => (
              <TableRow
                key={row.name.common}
                sx={{ "&:last-child td, &:last-child th": { border: 2 } }}
              >
                <TableCell>{row.flag}</TableCell>
                <TableCell>{row.name.common}</TableCell>
                <TableCell>{row.population}</TableCell>
                <TableCell>{row.region}</TableCell>
                <TableCell>
                  <Button />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Country;
