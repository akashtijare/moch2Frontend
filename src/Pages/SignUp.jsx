import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://mock2-fjyx.onrender.com/users', formData);
      // Redirect to login or dashboard
      navigate("/login")
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  return (
    <div style={{width:"60%",margin:"auto", boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}} >
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input style={{padding:"5px",margin:"20px" ,width:"50%"}}
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
        />
        <br />
        <input style={{padding:"5px",margin:"20px" ,width:"50%"}}
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <input style={{padding:"5px",margin:"20px" ,width:"50%"}}
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <button type="submit" style={{padding:"5px",margin:"20px" ,width:"20%" ,backgroundColor :"#37d2dd"}}>Signup</button>
      </form>
    </div>
  );
}

export default Signup;
