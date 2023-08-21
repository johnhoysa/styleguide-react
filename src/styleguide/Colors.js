import React from "react";
import Swatch from "../components/Swatch.js";

const Colors = () => {
  return (
    <div>
      <h1>Colors Page should include components</h1>
      <Swatch
        color="bg-slate-500"
        title="John What Up"
        description="Description Here"
      />
      <Swatch
        color="bg-amber-500"
        title="Sky Blue"
        description="Hex: #334455"
      />
    </div>
  );
};

export default Colors;
