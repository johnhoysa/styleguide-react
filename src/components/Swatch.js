import React from "react";
// import ReactDOM from "react-dom";
import styled from "styled-components";

const SwatchTitleParent = styled.h3`
  color: red;
`;

const Swatch = ({ swatchColor, swatchTitle, swatchDescription }) => {
  return (
    <div className="swatch">
      <p className="swatch-color">color: {swatchColor}</p>
      <p>{swatchTitle}</p>
      <SwatchTitleParent>{swatchTitle}</SwatchTitleParent>
      <p>{swatchDescription}</p>
    </div>
  );
};

export default Swatch;
