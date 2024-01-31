import React, { useEffect, useState } from 'react';

const Exam = () => {
  const [exams, setExams] = useState([]);

  const fetchExams = async () => {
    try {
      const response = await fetch('http://localhost:5003/exams');
      const data = await response.json();
      setExams(data);
    } catch (error) {
      console.error('Error fetching exams:', error);
    }
  };
  

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={examContainerStyle}>
        {exams.map(exam => (
          <div key={exam._id} style={examCardStyle}>
            <h2 style={titleStyle}>{exam.title}</h2>
            <p>{exam.description}</p>
            <p>Date: {new Date(exam.date).toLocaleDateString()}</p>
            <p>Duration: {exam.duration} minutes</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const examContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  margin: '20px',
};

const examCardStyle = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  margin: '10px',
  padding: '15px',
  width: '30%',
  boxSizing: 'border-box',
};

const titleStyle = {
  marginBottom: '10px',
};

export default Exam;
