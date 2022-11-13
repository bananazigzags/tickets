import styles from "./StepsList.module.scss";

type StepsListProps = {
  steps: string[];
};

export const StepsList = ({steps}: StepsListProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {steps.map((step, index) => (
            <div
              key={index}
              className={styles.ellipse}>
              <span>{step}</span>
            </div>
          ))}
        <div className={styles.line}></div>
      </div>
      <div className={styles.tripLength}>
        <span>В пути 1 ч 55 мин</span>
      </div>
    </div>
  )
}