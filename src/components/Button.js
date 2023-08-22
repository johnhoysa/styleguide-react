import React from 'react';

const Button = ({ disableBtn, label, look, size }) => {
  const headingTitle = `button ${size} ${look}`;

  if (disableBtn === 'true') {
    disableBtn = 'disabled';
    console.log('what is this?', disableBtn);
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
