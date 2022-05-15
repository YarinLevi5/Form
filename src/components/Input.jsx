import React from "react";

let Input = ({ title, type, placeholder, value }) => {
  return (
    <div>
      <label>
        {title}
        <input
          className="outline-0 border-b-2 border-purple-500 m-3 "
          type={type}
          placeholder={placeholder}
          value={value}
        />
      </label>
    </div>
  );
};

export default Input;
