import React from 'react';
import Swatch from '../components/Swatch.js';
import TitleBar from '../components/TitleBar.js';

const Example = () => {
  return (
    <>
      <section>
        <TitleBar title="Example" />
        <h5 className="guide-heading">Example</h5>
      </section>
      <section className="guide-section">
        <h1>Page Content Needed</h1>
      </section>
    </>
  );
};

export default Example;
