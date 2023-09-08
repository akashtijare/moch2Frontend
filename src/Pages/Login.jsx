import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { handleLogin } from '../redux/userRedux/action';

function Login() {

  const [email,setEmail] =useState("")
  const [data,setData] =useState("")

  const [password,setPassword] =useState("")
  const dispatch = useDispatch();
  const  toast = useToast();
  const navigate = useNavigate()

  
  const getData = async() =>{
    try {
      const res = await axios.get("https://mock2-fjyx.onrender.com/users")
      setData(res.data)
      
    } catch (error) {
      console.log(error)
      
    }
  }


  useEffect(()=>{
    getData()
  },[])

  console.log(data);
 
  const handleSubmit = (e) => {
    e.preventDefault();

    data.map((ele) =>{
      if (ele.email===email && ele.password===password)
      {
        toast({
                  title: 'LOGIN SUCCESSFUL',
                  status: 'success',
                  position: 'top',
                  duration: 3000,
                  isClosable: true,
              });
              console.log("login Successful")
              navigate("/")

              dispatch(handleLogin())
      }else
      {
        toast({
                  title: 'Wrong Username or Password',
                  status: 'error',
                  position: 'top',
                  duration: 3000,
                  isClosable: true,
          })
        }
   
    
  });
}

  return (
    <div  style={{width:"60%",margin:"auto", boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input style={{padding:"5px",margin:"20px" ,width:"50%"}}
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>setEmail(e.target.value)}
        />
        <br />
        <input  style={{padding:"5px",margin:"20px" ,width:"50%"}}
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>setPassword(e.target.value)}
        />
        <br />
        <button type="submit" style={{padding:"5px",margin:"20px" ,width:"20%" ,backgroundColor :"#37d2dd"}}>Login</button>
      </form>
    </div>
  );
}

export default Login;
