import React from 'react';

const Heading = ({ color, fontFamily, size, Tag, text }) => {
  const headingTitle = `text-3xl font-sans ${color} ${fontFamily} ${size}`;

  return (
    <div>
      <Tag className={headingTitle}>{text}</Tag>
    </div>
  );
};

export default Heading;
