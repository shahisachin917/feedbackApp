import React from "react";

function Button({ children, isDisabled }) {
  return (
    <button disabled={isDisabled} className="btn">
      {children}
    </button>
  );
}

export default Button;
