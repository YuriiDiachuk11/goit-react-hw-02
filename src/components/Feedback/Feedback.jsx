import s from "./Feedback.module.css";
export default function Feedback({ good, neutral, bad, total, positive }) {
  return (
    <div>
      <ul className={s.list}>
        <li className={s.item}>Good: {good}</li>
        <li className={s.item}>Neutral: {neutral}</li>
        <li className={s.item}>Bad: {bad}</li>
        <li className={s.item}>Total: {total}</li>
        <li className={s.item}>Positive: {positive}%</li>
      </ul>
    </div>
  );
}
