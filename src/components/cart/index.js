import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Avatar, Badge, Menu, Table } from "@mui/material";
import Container from "react-bootstrap/Container";

import { ThemeContext } from "../../context/ThemeContext";

import { BsFillTrashFill } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import { deleteCountry } from "../../redux/actions/cart";

export const Cart = () => {
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch();

  const countries = useSelector(
    (state) => state.addCountries.favoriteCountries
  );

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Container
        component="div"
        style={{
          background: theme?.background,
        }}
      >
        <Badge
          badgeContent={countries?.length}
          color="primary"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          cursor="pointer"
          style={{ cursor: "pointer" }}
        >
          <ShoppingCartCheckoutIcon />
        </Badge>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {countries.length ? (
            <div
              className="card_details"
              style={{
                width: "24rem",
                height: "2",
                padding: 20,
              }}
            >
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
            </div>
          ) : (
            <div
              style={{
                width: "24rem",
                height: "2",
                padding: 20,
                position: "relative",
              }}
            >
              <i
                onClick={handleClose}
                onKeyDown={handleClose}
                role="button"
                tabIndex="0"
                style={{
                  position: "absolute",
                  top: 2,
                  right: 20,
                  fontSize: 23,
                  cursor: "pointer",
                }}
              >
                <AiFillCloseCircle />
              </i>
              <p>Add countries, please!!</p>
              <img
                src="./cart.gif"
                alt="cart gif"
                style={{ width: "5rem", padding: 4 }}
              />
            </div>
          )}
        </Menu>
      </Container>
    </>
  );
};
