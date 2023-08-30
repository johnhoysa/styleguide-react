import React from 'react';

const Button = ({ disableBtn, label, look, size }) => {
  let headingTitle = `button ${size} ${look} `;

  if (disableBtn === 'true') {
    disableBtn = 'disabled';
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
