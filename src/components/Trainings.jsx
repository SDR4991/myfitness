import { PropTypes } from "prop-types";
import { Link } from "react-router";

import styles from "./Trainings.module.css";
import Button from "./Button";

function Trainings({ options, activeTab }) {
  console.log(activeTab);
  return (
    <div>
      <div className={styles.training} key={options[activeTab].id}>
        <img src={options[activeTab].img} alt={options[activeTab].name} />
        <p>{options[activeTab].description}</p>
        <Link to={`${options[activeTab].name.toLowerCase()}`}>
          <Button>Next</Button>
        </Link>
      </div>
    </div>
  );
}

Trainings.propTypes = {
  options: PropTypes.object,
  activeTab: PropTypes.num,
};

export default Trainings;
