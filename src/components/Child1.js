import React from "react";
import Child2 from "./Child2";

function Child1({ nimadir }) {
  return (
    <div>
      <h1>Child1 -- counter value is : {nimadir}</h1>
      <Child2 value2={nimadir} />
    </div>
  );
}

export default Child1;
