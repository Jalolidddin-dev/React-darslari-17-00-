import React, { useContext } from "react";
import Child5 from "./Child5";
import { UseCountContext } from "../context/UseCountContext";

function Child4() {
  const qiymat = useContext(UseCountContext);
  return (
    <div>
      <h1>Child4 -- is value: {qiymat}</h1>
      <Child5 />
    </div>
  );
}

export default Child4;
