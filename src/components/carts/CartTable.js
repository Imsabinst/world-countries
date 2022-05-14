import { Avatar, Table } from "@mui/material";
import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { deleteCountry } from "../../redux/actions/cart";

const CartTable = ({ handleClose }) => {
  const countries = useSelector(
    (state) => state.addCountries.favoriteCountries
  );
  const dispatch = useDispatch();

  return (
    <>
      <h3>Your countries</h3>
      <Table>
        {countries.map((country) => {
          return (
            <tbody key={country.name.common}>
              <>
                <tr>
                  <td>
                    <Avatar
                      alt={`${country.name.common} flag`}
                      src={country.flags.png}
                      width="10rem"
                      height="10rem"
                    />
                  </td>
                  <td>
                    <p>{country.name.common}</p>
                  </td>
                  <td>
                    <i
                      onKeyDown={handleClose}
                      role="button"
                      tabIndex="0"
                      style={{
                        color: "red",
                        fontSize: 20,
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        dispatch(deleteCountry(country.name.common))
                      }
                    >
                      <BsFillTrashFill />
                    </i>
                  </td>
                </tr>
              </>
            </tbody>
          );
        })}
      </Table>
    </>
  );
};

export default CartTable;
