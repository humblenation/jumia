import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import SecondFoot from './SecondFoot'
import SecondNavbar from './SecondNavbar'
import './style/Register.css'

const Register = () => {
    const navigate = useNavigate()
    const [data, setData] = useState(
        {
          email: '',
          password: '',
          repeatPassword: ''
        }
      );
      const emailChange=(e)=>{
        setData({...data, email: e.target.value});
      }
      const pwdChange=(e)=>{
        setData({...data, password: e.target.value})
    }
    const repPwdChange=(e)=>{
        setData({...data, repeatPassword: e.target.value})
      }
      const btnClick=(e)=>{
        e.preventDefault();
        // {
        //   JSON.stringify(data);
        // }
        // if(repeatPassword !== password){
        //   return(
            
        //   )
        // }
        console.log(data);
      }
  return (
    <div className='reg'>
      <SecondNavbar />
      <form className='reg-form'>
      <div className="reg-cont">
        <h1 className='register'>Register</h1>
        <p className='reg-info'>Welcome! Create an account</p>
          <div className="reg-email-add">
            <p className='reg-email-adr'>Email Address</p>
            <input type="email" className='reg-email-input' onChange={emailChange}/>
          </div>
          <div className="password">
            <p className='reg-pwd'>Password</p>
            <input type="password" className='reg-pwd-input'onChange={pwdChange} />
          </div>
          <div className="reg-password">
            <p className='reg-pwd'>Repeat Password</p>
            <input type="password" className='reg-pwd-input' onChange={repPwdChange} placeholder='password' />
          </div>
        <button className='reg-btn' onClick={btnClick} disabled={data.repeatPassword !== data.password ? true : false}>Register</button>
        <div className="reg-new-acct">
          <p className='reg-already-acct'>Already have an Account?</p>
          <p className='reg-create-acct' onClick={()=>{navigate('/')}}>Login</p>
        </div>
      </div>
      </form>
      <SecondFoot />
    </div>
  )
}

export default Register