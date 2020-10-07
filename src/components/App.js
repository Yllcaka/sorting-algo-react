import React from "react";
import Graph from "./Graph";
import randomList from "../api/random-list";
let list = randomList(300, 200);
const App = () => (
  <div>
    <Graph list={list} />
  </div>
);

export default App;
