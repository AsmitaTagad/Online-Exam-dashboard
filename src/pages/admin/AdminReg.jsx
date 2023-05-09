import React, { useState } from 'react';
import r from './Admin.module.css';
import { TextField, Card } from '@mui/material';
import {useNavigate,Link} from 'react-router-dom';


export default function AdminReg(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const nav =useNavigate()

  //get data from local to check if data is avilable in store or not
  const allAdminData = JSON.parse(localStorage.getItem('adminData'))
    ? JSON.parse(localStorage.getItem('adminData'))
    : [];

  function handleRegistration(e) {
    e.preventDefault();

    const tempData = {
      id: new Date(),
      name: name,
      email: email,
      pass: password,
    };

    localStorage.setItem(
      'adminData',
      JSON.stringify([...allAdminData, tempData])
    );

    setName('');
    setEmail('');
    setPassword('');
    alert("Register Successfully")
    nav("/AdminLogin")
  }

  return (
    <div className={r.container}>
      <div className={r.sub}>
        <Card sx={{ maxWidth: 370, height: 400 }}>
          <h1>Admin Register</h1>
          <form onSubmit={handleRegistration}>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              sx={{
                height: '1rem',
                width: '20rem',
                margin: '1.5rem',
              }}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <br />

            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              sx={{
                height: '1rem',
                width: '20rem',
                margin: '1.5rem',
              }}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <br />

            <TextField
              id="outlined-basic"
              label="password"
              variant="outlined"
              sx={{
                height: '1rem',
                width: '20rem',
                margin: '1.5rem',
              }}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <div className={r.button}>
              <button type="submit" className={r.btn}>
                Register
              </button>
            </div>
            <div>
              <p>I have a accout <Link to="/AdminLogin">Sign Up</Link></p>
              </div>
          </form>
        </Card>
      </div>
    </div>
  );
}
