import styles from "./MobileExercises.module.css";

import { PropTypes } from "prop-types";

function MobileExercises({ children }) {
  return <div className={styles.mobileExercises}>{children}</div>;
}

MobileExercises.propTypes = {
  children: PropTypes.object,
};

export default MobileExercises;
