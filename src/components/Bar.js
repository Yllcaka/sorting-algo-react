import React from "react";

const Bar = ({ size, width }) => {
  return (
    <div style={{ width }}>
      <div
        style={{
          backgroundColor: "lightblue",
          width: "100%",
          height: size,
        }}
      ></div>
      <span
        style={{
          display: "inline-block",
          justifySelf: "center",
          width: "100%",
        }}
      ></span>
    </div>
  );
};

export default Bar;
