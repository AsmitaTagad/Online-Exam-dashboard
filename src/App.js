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
      question: "What is ball color?",
      op1: "Red",
      op2: "Yellow",
      op3: "White",
      op4: "Black",
     correctAns: "1",
      image: "data:image/jpeg;base64,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",
    },
    {
      id: "2023-05-07T14:31:",
      question: "What is umbrella color?",
      op1: "Red",
      op2: "Blue",
      op3: "black",
      op4: "all of the above",
      correctAns: "4",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKLYLoNvytkSh8aiK9R6CVTTvT1VWsBiwUpw&usqp=CAU",
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