import React, { useEffect, useState } from "react";
import initialState from "../reducks/store/intialState";

export const NameView = (props) => {
  // const isBirthday = initialState.years;
  // const birthday = props.birthday;
  // const age = Math.abs(isBirthday.year - birthday);

  // useEffect((number))
  // console.log(props);

  return (
    <div>
      <p>
        {props.name}({props.age}歳)は
      </p>
    </div>
  );
};
