import React, { useContext } from "react";
import { UseCountContext } from "../context/UseCountContext";

function Child5() {
  const countvalue = useContext(UseCountContext);

  console.log(countvalue);

  return (
    <div>
      <h1>Child5 -- value is: {countvalue}</h1>
    </div>
  );
}

export default Child5;
