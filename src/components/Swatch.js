import React from "react";
//import styled from "styled-components";

const Swatch = ({ color, title, description }) => {
  const swatchWrap = `@apply flex`;
  const swatchColor = `@apply ${color} w-32 h-32 rounded-2xl`;
  const swatchContent = `@apply flex flex-col justify-between`;
  const swatchTitle = `@apply `;
  const swatchDesc = `@apply text-sm`;

  return (
    <div className={swatchWrap}>
      <span className={swatchColor}></span>
      <div className={swatchContent}>
        <p className={swatchTitle}>{title}</p>
        <p className={swatchDesc}>{description}</p>
      </div>
    </div>
  );
};

export default Swatch;
