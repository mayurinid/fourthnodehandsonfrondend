import axios from 'axios';
import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:9000/api/category/login", { email, password });
      const data = response.data;
      localStorage.setItem('token', data.token);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <input type="submit" value="Login" />
      </form>
    </>
  );
};

export default LoginForm;