import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import axios from "axios"; 


const Login = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const navigate = useNavigate()

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
        const response = await axios.post('http://localhost:5000/login', { username, password })
        if (response.status === 200) {
          navigate('/dashboard') // Navigate to the dashboard on successful login
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
          value={username}
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