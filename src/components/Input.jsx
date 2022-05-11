import React from "react";
import "../css/input.css";

let Input = ({ title, type, placeholder, attribute, value }) => {
  return (
    <div>
      <label className="label">
        {title}
        <input
          className="input"
          attribute={attribute}
          type={type}
          placeholder={placeholder}
          value={value}
        />
      </label>
    </div>
  );
};

export default Input;
