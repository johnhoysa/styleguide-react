import React from 'react';

const Button = ({ disableBtn, label, look, size }) => {
  let headingTitle = `button ${size} ${look} hover:-translate-y-0.5`;

  if (disableBtn === 'true') {
    disableBtn = 'disabled';
    headingTitle += `button-disabled cursor-default hover:drop-shadow-none hover:-translate-y-0`;
  }

  return (
    <div>
      <button className={headingTitle} disabled={disableBtn}>
        {label}
      </button>
    </div>
  );
};

export default Button;
