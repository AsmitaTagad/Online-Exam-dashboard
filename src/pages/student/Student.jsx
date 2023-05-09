import React, { useRef, useState } from 'react';
import { Link} from 'react-router-dom';
import Question from '../../components/question/Question';

function StudentPage() {
  const questionsFromLocal =
    JSON.parse(localStorage.getItem('questions')) || [];
  const [index, setIndex] = useState(0);
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
        if (submittedAns == questionsFromLocal[j].correctAns) {
          setScore(score + 1);
        } else {
          setScore(score);
        }
      }
    }
    setIndex(index + 1);
    alert(' Go to Next Question');
    if (count.current <= 2) {
    } else {
      setIsSubmit(true);
    }
  };

  return (
    <div>
      <h1 className="">STUDENT PAGE</h1>
    
      <h3 className="text-danger"> Your Score is: {score}</h3>
      {!isSubmit && (
        <div>
          {question.map((qna) => (
            <div key={qna.id}>
              <Question qna={qna} handleSubmit={handleSubmit} />
            </div>
          ))}
          {isSubmit && <h1>Completed</h1>}
        </div>     
      )}
      <button>
        <Link to="/">Back To Home</Link>
        </button>
    </div>
  );
}

export default StudentPage;
