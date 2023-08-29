import React from 'react';
import TitleBar from './components/TitleBar.js';

const Home = () => {
  return (
    <>
      <section>
        <TitleBar title="Welcome" />
        <h5 className="guide-heading">Example</h5>
      </section>
      <section className="guide-section">
        <h1>Page Content Needed</h1>
        <ul className="pl-6 list-disc">
          <li>React</li>
          <li>Tailwind</li>
        </ul>
      </section>
    </>
  );
};

export default Home;
