import React from 'react';
import { ProjectName } from '../constants.js';

const TitleBar = ({ title }) => {
  const titleBarWrap = `flex bg-poppy p-3 justify-between items-end text-white`;
  const titleBarTitle = `text-white text-3xl`;

  return (
    <div className={titleBarWrap}>
      <p className={titleBarTitle}>{title}</p>
      <p>
        {ProjectName} | {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default TitleBar;
