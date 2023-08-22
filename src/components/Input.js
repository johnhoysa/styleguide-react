import React from 'react';
// import React, { useState } from 'react';
const InputField = ({ icon, name, labelText, type, placeholder }) => {
  const textContent = `text-3xl font-sans ${type}`;

  return (
    <div className="pt-2">
      <label className="label" for={name}>
        {labelText}
      </label>
      <input
        className="input"
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
