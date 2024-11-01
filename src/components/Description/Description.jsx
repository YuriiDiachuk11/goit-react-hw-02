import s from "./Description.module.css";
export default function Description() {
  return (
    <div className={s.box}>
      <h1 className={s.title}>Sip Happens Café</h1>
      <p className={s.text}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
}
