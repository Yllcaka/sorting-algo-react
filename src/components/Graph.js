import React, { useState, useEffect } from "react";
import Bar from "./Bar";
import { selectionSort } from "../api/selection-sort";
import Button from "./styledComponents/Button";
// selectionSort();
const Graph = ({ list }) => {
  const [bars, setBars] = useState(list);
  //   useEffect(() => ;
  const sort = () => selectionSort(bars, setBars);
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {bars.map((bar, index) => (
          <Bar size={bar} width={10} key={index} />
        ))}
      </div>
      <Button onClick={sort}>Sort </Button>
    </>
  );
};

export default Graph;
