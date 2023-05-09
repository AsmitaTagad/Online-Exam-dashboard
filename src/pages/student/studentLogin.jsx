import React, { useState } from 'react';
import r from './student.module.css';
import { TextField, Card } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function LoginStu() {
  const [input, setInput] = useState('');
  const nav = useNavigate();

  //get data from local to check if data is avilable in store or not
  let getData = JSON.parse(localStorage.getItem('studentData'))
    ? JSON.parse(localStorage.getItem('studentData'))
    : [];
  //  console.log(getData)

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleRegistration(e) {
    e.preventDefault();
    const newData = getData.find(
      (item) => item.email == input && item.pass === input
    );

    if (newData === " ") {
      alert('user not found');
    } else {
      nav('/StudentPage');
     
    }
  }

  return (
    <div className={r.container}>
      <div className={r.sub}>
        <Card sx={{ maxWidth: 370, height: 340 }}>
          <h1>Exam Login</h1>
          <form onSubmit={handleRegistration}>
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
              onChange={handleChange}
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
              onChange={handleChange}
            />
            <br />
            <div className={r.button}>
              <button type="submit" className={r.btn}>
                Login
              </button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}
