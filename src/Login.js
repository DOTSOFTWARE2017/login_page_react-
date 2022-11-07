import React, { useState } from 'react';
import axios from 'axios';
import { setUserSession } from './Utils/Common';
import { useNavigate } from 'react-router-dom';

function Login(props) {
  const [loading, setLoading] = useState(false);
  const email = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);

  const navigate=useNavigate();

  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios.post('https://927e-103-141-51-42.in.ngrok.io/api/v1/login', { email: email.value, password: password.value }).then(response => {
      setLoading(false);
      setUserSession(response.data.token, response.data);
      navigate('/dashboard');
    }).catch(error => {
      setLoading(false);
      if (error)
      {
        console.log(error)
      } 
      
    });
  }

  return (
    <div className=' bg-dark text-white '> 
      Login<br /><br />
      <div>
        Username<br />
        <input type="text" {...email} autoComplete="new-password" />
      </div>
      <div style={{ marginTop: 10 }}>
        Password<br />
        <input type="password" {...password} autoComplete="new-password" />
      </div>
      {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
      <input type="button" className='btn btn-primary' value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
    </div>

  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  
  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default Login;