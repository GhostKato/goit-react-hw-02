import s from './Feedback.module.css'

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  return <ul>
    <li className={s.text}>Good: {feedback.good}</li>
    <li className={s.text}>Neutral: {feedback.neutral}</li>
    <li className={s.text}>Bad: {feedback.bad}</li>
    <li className={s.text}>Total: {totalFeedback}</li>
    <li className={s.text}>Positive: {positiveFeedback}%</li>    
  </ul>
}
export default Feedback