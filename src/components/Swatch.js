import React from 'react';

const Swatch = ({ color, name, value }) => {
  const swatchWrap = `grid grid-cols-3 gap-3 mt-3 items-end`;
  const swatchColor = `${color} w-16 h-8`;
  const swatchCode = `font-mono`;
  const swatchDesc = `font-sans text-sm`;

  return (
    <div className={swatchWrap}>
      <div className={swatchColor}></div>
      <code className={swatchCode}>{name}</code>
      <p className={swatchDesc}>{value}</p>
    </div>
  );
};

export default Swatch;
