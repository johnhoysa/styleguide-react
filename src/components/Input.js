import React from 'react';

const InputField = ({
  checked,
  icon,
  name,
  labelText,
  placeholder,
  required,
  type,
}) => {
  return (
    <div className="pt-2">
      <label className="label" htmlFor={name}>
        {labelText}
      </label>
      <input
        type={type}
        className="input"
        checked={checked}
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
      />
      {icon}
    </div>
  );
};

export default InputField;
