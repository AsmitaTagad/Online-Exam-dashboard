import React from 'react';
import './style.css';
import {
  Home,
  StudentPage,
  Admin,
  AdminLogin,
  AdminReg,
  LoginStu,
  RegisterStu,
} from './pages/main.jsx';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const questionsFromLocal =
    JSON.parse(localStorage.getItem("questions")) || [];
  const qna = [
    {
      id: "2023-05-07T14:31:01.902",
      question: "reactqna1",
      option1: "1",
      option2: "2",
      option3: "3",
      option4: "4",
      rightAns: "1",
      image: "",
    },
    {
      id: "2023-05-07T14:31:",
      question: "reactqna2",
      option1: "1",
      option2: "2",
      option3: "3",
      option4: "4",
      rightAns: "1",
      image: "",
    },
    {
      id: "2023-05-07T14:31:01.9",
      question: "reactqna3",
      option1: "1",
      option2: "2",
      option3: "3",
      option4: "4",
      rightAns: "1",
      image: "",
    },
    {
      id: "2023-05-07T14:31:01.",
      question: "reactqna4",
      option1: "1",
      option2: "2",
      option3: "3",
      option4: "4",
      rightAns: "1",
      image: "",
    },
  ];

  localStorage.setItem("questions", JSON.stringify([...qna]));

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/StudentPage" element={<StudentPage />} />
        <Route path="/RegisterStu" element={<RegisterStu />} />
        <Route path="/LoginStu" element={<LoginStu />} />
        <Route path="/AdminReg" element={<AdminReg />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;