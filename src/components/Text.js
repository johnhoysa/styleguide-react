import React from 'react';

const Text = ({ Tag, text, type }) => {
  const textContent = `text-3xl font-sans ${type}`;

  return (
    <div>
      <Tag className={textContent}>{text}</Tag>
    </div>
  );
};

export default Text;
