import React from 'react';
import { ProjectName } from '../constants.js';

const TitleBar = ({ title }) => {
  const titleBarWrap = `flex bg-primary h-14 px-3 text-white justify-between items-center`;
  const titleBarTitle = `text-white text-3xl leading-none`;
  const titleBarClient = `text-white text-base leading-none pt-5`;
  return (
    <div className={titleBarWrap}>
      <p className={titleBarTitle}>{title}</p>
      <p className={titleBarClient}>
        {ProjectName} | {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default TitleBar;
