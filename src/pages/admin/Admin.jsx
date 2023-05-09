import React, { useState } from 'react';
import QuestionsTable from '../../components/question/QuestionsTable';
import { Link } from 'react-router-dom';

function AdminPage() {
  const [question, setQuestion] = useState('');
  const [op1, setOp1] = useState('');
  const [op2, setOp2] = useState('');
  const [op3, setOp3] = useState('');
  const [op4, setOp4] = useState('');
  const [correctAns, setCorrectAns] = useState('');
  const [isUpdation, setIsUpdation] = useState(false);
  const [image, setImage] = useState('');
  const [updationId, setUpdationId] = useState('');

  const questionsFromLocal = JSON.parse(localStorage.getItem('questions')) || [];

  const handleQuesionsubmission = () => {
    if (
      question != '' &&
      op1 != '' &&
      op2 != '' &&
      op3 != '' &&
      op4 != '' &&
      correctAns != '' &&
      image != ''
    ) {
      if (isUpdation == false) {
        const qna = {
          id: new Date(),
          question: question,
          op1: op1,
          op2: op2,
          op3: op3,
          op4: op4,
          correctAns: correctAns,
          image: image,
        };
        localStorage.setItem(
          'questions',
          JSON.stringify([...questionsFromLocal, qna])
        );
        setQuestion('');
        setOp1('');
        setOp2('');
        setOp3('');
        setOp4('');
        setCorrectAns('');
        setImage('');
      } else {
        const qna = questionsFromLocal.map((item) => {
          if (item.id == updationId) {
            return {
              id: item.id,
              question: question,
              op1: op1,
              op2: op2,
              op3: op3,
              op4: op4,
              correctAns: correctAns,
              image: image,
            };
          }
          return item;
        });

        localStorage.setItem('questions', JSON.stringify([...qna]));
        setIsUpdation(false);
      }
    } else {
      alert('Fill the Empty field');
    }
  };

  const handleUpdation = (id, qna, op1, op2, op3, op4, correctAns, image) => {
    setUpdationId(id);
    setQuestion(qna);
    setOp1(op1);
    setOp2(op2);
    setOp3(op3);
    setOp4(op4);
    setCorrectAns(correctAns);
    setImage(image);
    setIsUpdation(true);
  };

  return (
    <div>
      <div
        className="border"
        style={{
          width: '80%',
          padding: '50px',
          margin: 'auto',
          marginTop: '100px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1 className="text-primary">ADMIN PAGE</h1>

        <input
          className="form-control"
          style={{ width: '40%', height: '2rem' }}
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Question"
        />
        <br />
        <input
          className="form-control m-2"
          style={{ width: '40%', height: '2rem' }}
          type="text"
          value={op1}
          onChange={(e) => setOp1(e.target.value)}
          placeholder="Op1"
        />
        <br />
        <input
          className="form-control m-2"
          style={{ width: '40%', height: '2rem' }}
          type="text"
          value={op2}
          onChange={(e) => setOp2(e.target.value)}
          placeholder="Op2"
        />
        <br />
        <input
          className="form-control m-2"
          style={{ width: '40%', height: '2rem' }}
          type="text"
          value={op3}
          onChange={(e) => setOp3(e.target.value)}
          placeholder="Op3"
        />
        <br />
        <input
          className="form-control m-2"
          style={{ width: '40%', height: '2rem' }}
          type="text"
          value={op4}
          onChange={(e) => setOp4(e.target.value)}
          placeholder="Op4"
        />
        <br />
        <input
          className="form-control m-2"
          style={{ width: '40%', height: '2rem' }}
          type="text"
          value={correctAns}
          onChange={(e) => setCorrectAns(e.target.value)}
          placeholder="correct Answer"
        />
        <br />
        <input
          className="form-control m-2"
          style={{ width: '40%', height: '2rem' }}
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Url of image"
        />
        <br />
        <button className="btn btn-primary" onClick={handleQuesionsubmission}>
          {isUpdation ? 'Update' : 'Submit'}
        </button>
      </div>
      <div>
        <QuestionsTable handleUpdation={handleUpdation} />
      </div>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default AdminPage;
