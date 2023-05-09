import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Question from "../../components/question/Question";

function StudentPage() {
  const questionsFromLocal =
    JSON.parse(localStorage.getItem("questions")) || [];
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  const [question, setQuestion] = useState([questionsFromLocal[index]]);
  const [allAnswer, setAllAnswer] = useState([]);
  const count = useRef(0);
  const [isSubmit, setIsSubmit] = useState(false);
  const [score, setScore] = useState(0);

  const handleStartExam = () => {
    setIsSubmit(false);
    count.current = 0;

    setQuestion([questionsFromLocal[index]]);
    setIndex(0);
  };

  const handleSubmit = (qnaId, submittedAns) => {
    setAllAnswer([...allAnswer, { qnaId, submittedAns }]);
    setQuestion([questionsFromLocal[index]]);
    count.current += 1;
    for (let j = 0; j < questionsFromLocal.length; j++) {
      if (qnaId == questionsFromLocal[j].id) {
        if (submittedAns == questionsFromLocal[j].rightAns) {
          setScore(score + 1);
        } else {
          setScore(score);
        }
      }
    }
    setIndex(index + 1);
    alert(" Go to Next Question");
    if (count.current <= 2) {
    } else {
      setIsSubmit(true);
    }
  };

  return (
    <div>
      <h1 className="">STUDENT PAGE</h1>
      <button className="btn btn-info me-5" onClick={() => navigate("/admin")}>
        ADMIN
      </button>
      <button className="btn btn-success" onClick={handleStartExam}>
        Start Exam
      </button>
      <h3 className="text-danger">Score: {score}</h3>
      {!isSubmit && (
        <div>
          {question.map((qna) => (
            <div key={qna.id}>
              <Question qna={qna} handleSubmit={handleSubmit} />
            </div>
          ))}
          {isSubmit && <h1>Exam Completed</h1>}
        </div>
      )}
    </div>
  );
}

export default StudentPage;