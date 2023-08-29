import React from 'react';
import TitleBar from '../components/TitleBar.js';
import InputField from '../components/Input.js';

export default function Form() {
  const [formData, setFormData] = React.useState({
    userName: '',
    email: '',
    password: '',
    saveLogin: true,
  });

  // console.log(formData);

  function handleChange(event) {
    const { checked, name, type, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // This is where information would usually be submitted to an API:
    console.log(formData);
  }

  return (
    <>
      <section>
        <TitleBar title="Forms" />
        <h5 className="guide-heading">Signup Example</h5>
      </section>

      <form onSubmit={handleSubmit}>
        <InputField
          icon=""
          name="username"
          labelText="Username"
          placeholder=""
          required={true}
          type="text"
          onChange={handleChange}
        />

        <InputField
          icon=""
          name="email"
          labelText="Email"
          placeholder=""
          required={true}
          type="text"
          onChange={handleChange}
        />

        <button>Sign Up</button>
      </form>
    </>
  );
}
