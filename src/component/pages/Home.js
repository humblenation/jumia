import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SecondFoot from '../SecondFoot'
import SecondNavbar from '../SecondNavbar'
import '../style/Home.css'
import {IoEyeSharp} from 'react-icons/io5'
import {BsEyeSlashFill} from 'react-icons/bs'


const Home = () => {
  const [data, setData] = useState(
    {
      email: '',
      password: ''
    }
  );
  const navigate = useNavigate()
  const emailChange=(e)=>{
    setData({...data, email: e.target.value});
  }
  const pwdChange=(e)=>{
    setData({...data, password: e.target.value})
  }
  const btnClick=(e)=>{
    e.preventDefault();
    // {
    //   JSON.stringify(data);
    // }
    console.log(data);
  }
  const [toggleHide, setToggleHide] = useState(false)
  const handleToggle=()=>{
    setToggleHide(!toggleHide)
  }
  return (
    <div className='home'>
      <SecondNavbar />
      <form className='login-form'>
      <div className="cont">
        <h1 className='login'>Login</h1>
        <p className='login-info'>Please login using account detail below</p>
          <div className="email-add">
            <p className='email-adr'>Email Address</p>
            <input type='text' onChange={emailChange} className='email-input' />
          </div>
          <div className="password">
            <p className='pwd'>Password</p>
            <input type={toggleHide ? 'text' : 'password'} className='pwd-input' onChange={pwdChange} maxLength={8}/>
            <span onClick={handleToggle} className='login-eyes'>{toggleHide ? <BsEyeSlashFill /> : <IoEyeSharp />}</span>
          </div>
        <p className='forgotten'>Forgot your password?</p>
        <button className='sign-in-btn' onClick={btnClick}>Sign In</button>
        <div className="new-acct">
          <p className='no-acct'>Don't have an Account?</p>
          <p className='create-acct' onClick={()=>{navigate('/register')}}>Create Account</p>
        </div>
      </div>
      </form>
      <SecondFoot />
    </div>
  )
}

export default Home