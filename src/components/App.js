import React from "react";
import Arcticle from "./Arcticle";
import articles from "../fitures";

function App() {
  const body = <div>body</div>;
  return (
    <div>
      <h2>React app</h2>
      <Arcticle article={articles[0]} foo="some text" flag />
      {body}
      <div>creation Date: {new Date().toLocaleDateString()}</div>
    </div>
  );
}
export default App;
