import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Button = ({ handleClick, isDisabled }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <button
        disabled={isDisabled}
        onClick={handleClick}
        style={{
          background: theme?.background,
          color: theme?.color,
          width: "4rem",
          height: "2rem",
          borderRadius: "2rem",
        }}
      >
        Add
      </button>
    </div>
  );
};

export default Button;
