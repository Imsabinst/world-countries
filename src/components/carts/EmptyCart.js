import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const EmptyCart = ({ handleClose }) => {
  return (
    <>
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
            fontSize: 20,
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
    </>
  );
};

export default EmptyCart;
