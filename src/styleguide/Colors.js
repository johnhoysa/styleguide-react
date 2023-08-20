import React from "react";
import Swatch from "../components/Swatch.js";

const Colors = () => {
  return (
    <div>
      <h1>Colors Page should include components</h1>
      <hr></hr>
      <Swatch
        swatchColor="red"
        swatchTitle="John What Up"
        swatchDescription="Description Here"
      />
      <hr></hr>
      <Swatch
        swatchColor="blue"
        swatchTitle="Sky Blue"
        swatchDescription="Hex: #334455"
      />
    </div>
  );
};

export default Colors;
