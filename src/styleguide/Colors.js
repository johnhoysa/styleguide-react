import React from 'react';
import Swatch from '../components/Swatch.js';
import TitleBar from '../components/TitleBar.js';
const Colors = () => {
  return (
    <section>
      <TitleBar title="Colors" />

      <div className="grid grid-cols-3 gap-3 mt-6">
        <span className="">Preview</span>
        <span className="">CSS</span>
        <span className="">Value</span>
      </div>

      <hr className="bg-gray-800"></hr>
      <Swatch color="bg-sky" name="sky" value="#9C8EF1" />
      <hr></hr>
      <Swatch color="bg-success" name="success" value="HEX #green" />
      <hr></hr>
      <Swatch color="bg-success" name="success" value="HEX #green" />
    </section>
  );
};

export default Colors;
