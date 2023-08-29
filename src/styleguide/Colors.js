import React from 'react';
import Swatch from '../components/Swatch.js';
import { swatchData } from '../data/colors.js';
import TitleBar from '../components/TitleBar.js';

console.log('what is swatchData? ', swatchData);

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
          <span className="">Tailwind values</span>
          <span className="">Value</span>
        </div>

        <hr className="bg-gray-800"></hr>

        {swatchData.map((data, key) => {
          return (
            <div key={key}>
              <Swatch color={data.color} name={data.name} value={data.value} />
              <hr></hr>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Colors;
