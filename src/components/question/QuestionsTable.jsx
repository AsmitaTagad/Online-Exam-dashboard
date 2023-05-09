import React, { useState } from 'react';

function QuestionsTable({ handleUpdation }) {
  const [isTaskCompleted, setIsTaskCompleted] = useState(false);
  const questionsFromLocal =
    JSON.parse(localStorage.getItem('questions')) || [];

  const handleDeletion = (id) => {
    const tempQna = questionsFromLocal.filter((qna) => qna.id != id);
    localStorage.setItem('questions', JSON.stringify([...tempQna]));
    setIsTaskCompleted(!isTaskCompleted);
    alert('deleted');
  };

  return (
    <div>
      <h1>Question List</h1>
      <table
        className="table table-hover table-striped table-bordered"
        style={{ width: '80%', margin: 'auto' }}
      >
        <thead>
          <tr>
            <th>Question</th>
            <th>Option 1</th>
            <th>Option 2</th>
            <th>Option 3</th>
            <th>Option 4</th>
            <th>Answer</th>
            <th>Image</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {questionsFromLocal.map((qna) => (
            <tr key={qna.id} style={{ marginLeft: '7rem' }}>
              <td>{qna.question}</td>
              <td>{qna.op1}</td>
              <td>{qna.op2}</td>
              <td>{qna.op3}</td>
              <td>{qna.op4}</td>
              <td>{qna.correctAns}</td>
              <td>
                <img src={qna.image} width={100} height={100} />
              </td>
              <td>
                <button
                  className="btn btn-success me-2"
                  onClick={() =>
                    handleUpdation(
                      qna.id,
                      qna.question,
                      qna.op1,
                      qna.op2,
                      qna.op3,
                      qna.op4,
                      qna.correctAns,
                      qna.image
                    )
                  }
                >
                  update
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeletion(qna.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default QuestionsTable;
