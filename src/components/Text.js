import React from 'react';

const Text = ({ Tag, text, type }) => {
  const textContent = `font-sans ${type}`;

  return (
    <div>
      <Tag className={textContent}>{text}</Tag>
    </div>
  );
};

export default Text;
