import React from "react";

let Input = ({ title, type, value, ...rest }) => {
  return (
    <div>
      <label>
        {title}
        <input
          className="outline-0 border-b-2 focus:outline-none border-purple-500 m-3 "
          type={type}
          value={value}
          {...rest}
        />
      </label>
    </div>
  );
};

export default Input;
