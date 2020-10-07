import React, { useState } from "react";
import Graph from "./Graph";
import randomList from "../api/random-list";
import Slider from "./styledComponents/Slider";

const App = () => {
  const getRandList = (val) => randomList(val, 200);
  const [list, setList] = useState(getRandList(40));
  const handleSlider = (event) => {
    console.log(event.target.value);
    let value = event.currentTarget.value;
    setList(getRandList(value));
  };
  return (
    <div>
      <Graph list={list} />
      <Slider onChange={handleSlider} type="range" min="10" max="300" />
    </div>
  );
};
export default App;
