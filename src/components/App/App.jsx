import Description from '../Description/Description';
import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';
import s from './App.module.css';

import { useState, useEffect } from 'react';

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  
  useEffect(() => {
    const savedStats = localStorage.getItem('feedbackStats');
    if (savedStats) {
      setFeedback(JSON.parse(savedStats));
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('feedbackStats', JSON.stringify(feedback));
  }, [feedback]);
  
  const updateFeedback = (type) => {
    setFeedback((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };
  
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  
  const positiveFeedback = totalFeedback ? Math.round((feedback.good / totalFeedback) * 100) : 0;
  
  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div className={s.container}>
      <Description />
      <Options leaveFeedback={updateFeedback} reset={resetFeedback} totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? (
        <Feedback feedback={feedback} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} />
      ) : (
        <p className={s.text}>No feedback yet</p>
      )}
    </div>
  );
}

export default App;
