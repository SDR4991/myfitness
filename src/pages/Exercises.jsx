import { Link, useNavigate } from "react-router";

import { PropTypes } from "prop-types";

import Exercise from "../components/Exercise";
import Spinner from "../components/Spinner";
import styles from "./Exercises.module.css";
import Button from "../components/Button";
import NavBar from "../components/NavBar";
import NavMobile from "../components/NavMobile";
import MobileExercise from "../components/MobileExercises";

import Carousel from "../components/Carousel";

function Exercises({ exercises, loading }) {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <main className={`${styles.exercises} container`}>
      <NavMobile />
      <NavBar />
      <section className={`sectionApp`}>
        <h2>Summary of training</h2>
        <div className={styles.exercisesSummary}>
          <p>🔥 40 calories</p>
          <p>⌚ 60 minutes</p>
          <p>👟 Any equipment</p>
        </div>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <Carousel>
              {exercises.map((exercise) => (
                <Exercise key={exercise.id} exercise={exercise} />
              ))}
            </Carousel>
            <MobileExercise>
              {exercises.map((exercise) => (
                <Exercise key={exercise.id} exercise={exercise} />
              ))}
            </MobileExercise>
          </>
        )}

        <div className={`btnContainer`}>
          <Button onClick={goBack}>Back</Button>
          <Link to="plans">
            <Button>Choose your plan!</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}

Exercises.propTypes = {
  exercises: PropTypes.object,
  loading: PropTypes.bool,
};

export default Exercises;
