import React from 'react';
import Swatch from '../components/Swatch.js';
import TitleBar from '../components/TitleBar.js';
const Colors = () => {
  return (
    <>
      <section>
        <TitleBar title="Colors" />
        <h5 className="guide-heading">Swatches</h5>
      </section>
      <section className="guide-section">
        <div className="grid grid-cols-3 gap-3 mt-6">
          <span className="">Preview</span>
          <span className="">CSS</span>
          <span className="">Value</span>
        </div>

        <hr className="bg-gray-800"></hr>

        <Swatch color="bg-poppy" name="poppy" value="#ff4007" />
        <hr></hr>
        <Swatch color="bg-poppy-light" name="poppy-light" value="#FFBBAD" />
        <hr></hr>
        <Swatch color="bg-poppy-dark" name="poppy-dark" value="#D23000" />
        <hr></hr>
        <Swatch
          color="bg-white border border-slate-200"
          name="white"
          value="#ffffff"
        />
        <hr></hr>
        <Swatch color="bg-black" name="black" value="#000000" />
        <hr></hr>
        <Swatch color="bg-sky" name="sky" value="#3FACFB" />
        <hr></hr>
        <Swatch color="bg-sky-100" name="sky-100" value="##F5FBFF" />
        <hr></hr>
        <Swatch color="bg-sky-light" name="sky-light" value="#D5F0FF" />
        <hr></hr>
        <Swatch color="bg-sky-dark" name="sky-dark" value="#212962" />
      </section>
    </>
  );
};

export default Colors;
