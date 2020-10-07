import React, { useEffect, useState } from "react";
import Bar from "./Bar";
import { selectionSort } from "../api/selection-sort";
import insertionSort from "../api/insertion-sort";
import Button from "./styledComponents/Button";

const Graph = ({ list }) => {
  const [bars, setBars] = useState(list);
  useEffect(() => {
    setBars(list);
    setSorted(false);
  }, [list]);
  const [sorted, setSorted] = useState(false);
  const selectSort = () => {
    if (!sorted) {
      selectionSort(bars, setBars);
      setSorted(true);
    }
  };
  const insertSort = () => {
    if (!sorted) {
      insertionSort(bars, setBars);
      setSorted(true);
    }
  };
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {bars.map((bar, index) => (
          <Bar size={bar} width={10} key={index} />
        ))}
      </div>
      <Button onClick={selectSort}>Selection Sort </Button>
      <Button onClick={insertSort}>Insertion Sort </Button>
    </>
  );
};

export default Graph;
