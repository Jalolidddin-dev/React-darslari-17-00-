import React, { useContext } from "react";
import Child4 from "./Child4";
import { UseCountContext } from "../context/UseCountContext";

function Child3() {
  const value2 = useContext(UseCountContext);
  return (
    <div>
      <h1>Child3 value is : {value2} </h1>
      <Child4 />
    </div>
  );
}

export default Child3;
