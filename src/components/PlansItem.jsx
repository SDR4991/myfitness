import { PropTypes } from "prop-types";

import styles from "./PlansItem.module.css";

function PlansItem({ handleInputValue, inputValue, plan }) {
  const { name, price, description } = plan;

  return (
    <label htmlFor={name} className={styles.planNavSelector}>
      <input
        type="radio"
        id={name}
        title={name}
        name={name}
        value={price}
        onChange={handleInputValue}
        checked={Number(inputValue) === Number(price)}
      />
      <div
        className={
          Number(inputValue) === Number(price)
            ? `${styles.activePlan}`
            : `${styles.planItem}`
        }
      >
        <div className={styles.planContainer}>
          <div>
            <h2>{name}</h2>
            <p className={styles.planPrice}>{price}$ / month</p>
          </div>
          <p className={styles.planDescription}>{description}</p>
        </div>
      </div>
    </label>
  );
}

PlansItem.propTypes = {
  handleInputValue: PropTypes.func,
  inputValue: PropTypes.str,
  plan: PropTypes.obj,
};

export default PlansItem;
