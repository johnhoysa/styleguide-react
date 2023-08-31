import React from 'react';

const Heading = ({ color, fontFamily, Tag, text, type }) => {
  const headingTitle = `${type} font-sans ${color} ${fontFamily} `;

  return (
    <div>
      <Tag className={headingTitle}>{text}</Tag>
    </div>
  );
};

export default Heading;
