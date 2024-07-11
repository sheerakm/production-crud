import React, { useState } from 'react';
import { useNavigate  , useHistory, Navigate} from 'react-router-dom';
import './login.css';
import axios from "axios"; 

import Cookies from 'js-cookie';


const Login = (props) => {
  const [user, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('');

  const token = Cookies.get('Authorization');
  const navigate = useNavigate();

  if(!!token) {

    console.log(token, "token from within login");
    // props.history.push('/dashboard');
    navigate('/dashboard');
  
  }
  


  const validate = () => {
    let passwordError = ''

    if (password.length < 6) {
      passwordError = 'Password needs to be at least 6 characters long'
    }

    if ( passwordError) {
      setPasswordError(passwordError)
      return false
    }

    return true
  }

  const onButtonClick = async () => {
    const isValid = validate()
    if (isValid) {
      try {
        const response = await axios.post('http://localhost:4554/login', { user, password }, {
          withCredentials: true, // Include credentials with the request
        });
        if (response.status === 200) {
          navigate('/dashboard') // Navigate to the dashboard on successful login
          console.log("navigated to dashboard"); 
        }
      } catch (error) {
        setEmailError('Invalid credentials')
        setPasswordError('')
      }
    }
  }

  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>Login</div>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={user}
          placeholder="Enter your username here"
          onChange={(ev) => setUsername(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Log in'} />
      </div>
    </div>
  )
}

export default Login