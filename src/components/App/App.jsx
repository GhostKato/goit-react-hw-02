import Description from '../Description/Description';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';
import Options from '../Options/Options';
import s from './App.module.css';
import descriptionData from '../../assets/description.json';
import notificationData from '../../assets/notification.json';

import { useState, useEffect } from 'react';

function App() {
  const [feedback, setFeedback] = useState(() => {
  const savedStats = JSON.parse(window.localStorage.getItem('stats'));
  if (savedStats?.length) {
    return savedStats;
  }
  return {
    good: 0,
    neutral: 0,
    bad: 0,
  };
});
  
  useEffect(() => {
    window.localStorage.setItem('stats', JSON.stringify(feedback));
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
      <Description title={descriptionData.title} description={descriptionData.description}/>
      <Options leaveFeedback={updateFeedback} reset={resetFeedback} totalFeedback={totalFeedback} />
      {totalFeedback === 0 ? (
        <Notification text={notificationData.text} />
      ) : (
        <Feedback feedback={feedback} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} />
      )}
    </div>
  );
}

export default App;



