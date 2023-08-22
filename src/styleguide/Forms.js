import React from 'react';
import { MdVisibility } from 'react-icons/md';

import TitleBar from '../components/TitleBar.js';
import InputField from '../components/Input.js';

const Form = () => {
  return (
    <section>
      <TitleBar title="Form" />

      <InputField
        icon={<MdVisibility />}
        name="username"
        labelText="Username"
        placeholder=""
        type="text"
      />
    </section>
  );
};

export default Form;
