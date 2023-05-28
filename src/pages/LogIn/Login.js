import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import './Login.scss';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add your login logic
    console.log('Email:', email);
    console.log('Password:', password);
  };
 
  return (
    <>
      <Header />
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <label htmlFor="email"><b>Email Address</b></label>
          <input type="text" placeholder="Enter Email Address" name="email" id="email" required onChange={handleEmailChange} />

          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" id="psw" required onChange={handlePasswordChange} />
          <p> <a href="Reset Password">Reset Password</a>.</p>

          <button type="submit" className="Loginbtn">Login</button>

          <div className="container SignUp">
            <p>Don't have an account? <a href="SignUp">Sign Up</a></p>

          </div>
        </div>
      </form>
    </>
  );
}
export default LoginForm;