import React from 'react';
import Swatch from '../components/Swatch.js';

const Colors = () => {
  return (
    <section>
      <div className="page-title">Colors</div>

      <div className="grid grid-cols-3 gap-3">
        <span className="">Preview</span>
        <span className="">CSS</span>
        <span className="">Value</span>
      </div>
      <hr class="bg-gray-800"></hr>
      <Swatch color="bg-sky" name="sky" value="#9C8EF1" />
      <hr></hr>
      <Swatch color="bg-success" name="success" value="HEX #green" />
      <hr></hr>
      <Swatch color="bg-success" name="success" value="HEX #green" />
    </section>
  );
};

export default Colors;
