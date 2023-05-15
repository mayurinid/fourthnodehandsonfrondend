import axios from 'axios';
import React, { useState } from 'react';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:9000/api/category/register", {
        email,
        password,
        name,
        contact
      });
      const data = response.data;
      localStorage.setItem('token', data.token);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />

        <label htmlFor="contact">Contact:</label>
        <input type="tel" id="contact" name="contact" value={contact} onChange={(e) => setContact(e.target.value)} />

        <input type="submit" value="Register" />
      </form>
    </>
  );
};

export default RegisterForm;