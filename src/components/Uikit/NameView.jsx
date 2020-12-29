import React from "react";

export const NameView = (props) => {
  const { money, age, name } = props;
  return (
    <div>
      <p>
        {name}({age}歳)は{money}円
      </p>
    </div>
  );
};
