import { PropTypes } from "prop-types";
import styles from "./Exercise.module.css";

function Exercise({ exercise }) {
  const { exerciseName, repeats, img, burnedCalories } = exercise;
  return (
    <li className={styles.exercise}>
      <img src={img} alt={exerciseName} className={styles} />

      <div className={styles.exerciseDescr}>
        <h3 className={styles}>{exerciseName}</h3>
        <p className={styles.exerciseRepeats}>🏋️‍♀️{repeats}</p>
        <p className={styles.exerciseCalories}>🔥{burnedCalories}</p>
      </div>
    </li>
  );
}

Exercise.propTypes = {
  exercise: PropTypes.object,
};

export default Exercise;
