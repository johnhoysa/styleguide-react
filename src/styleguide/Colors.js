import React from "react";
import Swatch from "../components/Swatch.js";

const Colors = () => {
  return (
    <div>
      <h1>Colors Page should include components</h1>
      <Swatch color="red" title="John What Up" description="Description Here" />
      <Swatch color="blue" title="Sky Blue" description="Hex: #334455" />
    </div>
  );
};

export default Colors;
