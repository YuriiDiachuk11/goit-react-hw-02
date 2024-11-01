import s from "./Options.module.css";
export default function Options({ updateFeedback, onReset, totalFeedback }) {
  return (
    <div>
      <ul className={s.options}>
        <li className={s.button}>
          <button onClick={() => updateFeedback("good")}>Good</button>
        </li>
        <li className={s.button}>
          <button onClick={() => updateFeedback("neutral")}>Neutral</button>
        </li>
        <li className={s.button}>
          <button onClick={() => updateFeedback("bad")}>Bad</button>
        </li>
        {totalFeedback > 0 && (
          <li className={s.button}>
            <button onClick={() => onReset("reset")}>Reset</button>
          </li>
        )}
      </ul>
    </div>
  );
}
