import React, { useState } from 'react';

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name:</label>
      <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />

      <label htmlFor="lastName">Last Name:</label>
      <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />

      <label htmlFor="email">Email:</label>
      <input type="email" name="email" value={formData.email} onChange={handleInputChange} />

      <label htmlFor="password">Password:</label>
      <input type="password" name="password" value={formData.password} onChange={handleInputChange} />

      <button type="submit">Submit</button>
    </form>
  );
}
