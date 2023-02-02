import React from 'react'
import { useState ,useEffect } from 'react'
import{useNavigate } from "react-router-dom"
import '../App.css'
const SignUp =()=>{

    const[name,setName] = useState('');
    const[password,setPassword] = useState('');
    const[email,setEmail] = useState('');
    const navigate  = useNavigate();

    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate("/")
        }
    },[])

    const colectData = async()=>{
        console.log(name,email,password);
        let result = await fetch('http://localhost:5000/register',{
            method:'post',
            body:JSON.stringify({name,email,password}),
            headers:{
                'Content-Type':"application/json"
            }
        })
        result = await result.json()
        console.log(result); 
        localStorage.setItem("user",JSON.stringify(result));

        if (result) {
            navigate('/')
        }
    }
    return(
        <div className='register'>
            <h1>Register</h1>
            <input className='inputBox'  type="text" value={name} placeholder='Enter Name'
             onChange={(e)=>{setName(e.target.value)}}></input>
            
            <input className='inputBox' type="text" value={email} placeholder='Enter Email'
             onChange={(e)=>{setEmail(e.target.value)}}></input>
           
            <input className='inputBox' type="password" value={password} placeholder='Enter  Password'
             onChange={(e)=>{setPassword(e.target.value)}}></input>
            <button className='appbutton' type='button' onClick={colectData}>Sign UP</button>
        
        </div>
    )
}

export default SignUp;