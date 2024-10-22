import { useState } from "react";
import Child1 from "./components/Child1";
import { UseCountContext } from "./context/UseCountContext";

function App() {
  const [count, setcount] = useState(0);

  const incrementHandler = () => {
    setcount(count + 1);
  };

  return (
    <UseCountContext.Provider value={count}>
      <div className="App">
        <Child1 nimadir={count} />

        <div>
          <h1>{count}</h1>
          <button onClick={incrementHandler}>Increment</button>
        </div>
      </div>
    </UseCountContext.Provider>
  );
}

export default App;
