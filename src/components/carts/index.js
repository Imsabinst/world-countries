import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";

import Container from "react-bootstrap/Container";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Badge, Menu } from "@mui/material";

import { ThemeContext } from "../../context/ThemeContext";
import EmptyCart from "./EmptyCart";
import CartTable from "./CartTable";

export const Cart = () => {
  const { theme } = useContext(ThemeContext);

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
              <CartTable />
            </div>
          ) : (
            <EmptyCart handleClose={handleClose} />
          )}
        </Menu>
      </Container>
    </>
  );
};
