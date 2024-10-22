import React from "react";
import Child3 from "./Child3";

function Child2({ value2 }) {
  return (
    <div>
      <h1>Child2 -- counter value is : {value2}</h1>
      <Child3 value3={value2} />
    </div>
  );
}

export default Child2;
