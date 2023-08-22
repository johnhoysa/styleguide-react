import React from 'react';

const Heading = ({ color, fontFamily, Tag, text, type }) => {
  const headingTitle = `text-3xl font-sans ${color} ${fontFamily} ${type}`;

  return (
    <div>
      <Tag className={headingTitle}>{text}</Tag>
    </div>
  );
};

export default Heading;
