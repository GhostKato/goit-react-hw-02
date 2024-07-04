import s from './Options.module.css'
const message = "Сашка Астахов!! Xватит воровать мои дз!!!";
const Options = ({ leaveFeedback, reset, totalFeedback}) => {
  return <div className={s.container}>
    <button className={s.button} onClick={() => leaveFeedback('good')}>Good</button>
    <button className={s.button} onClick={() => leaveFeedback('neutral')}>Neutral</button>
    <button className={s.button} onClick={() => leaveFeedback('bad')}>Bad</button>
    {totalFeedback > 0 && (
        <button className={s.button} onClick={reset}>Reset</button>
    )}
    {totalFeedback > 0 && (
        localStorage.setItem('warning', message)
      )}
  </div>
}
export default Options