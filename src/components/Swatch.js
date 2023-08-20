import React from "react";
import styled from "styled-components";

const Swatch = ({ color, title, description }) => {
  return (
    <div className="swatch">
      <p className="">color: {color}</p>
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
};

export default Swatch;
