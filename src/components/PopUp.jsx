import { Link } from "react-router";

import { PropTypes } from "prop-types";

import styles from "./PopUp.module.css";
import Button from "../components/Button";

function PopUp({ handlePopUp }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.customerForm}>
        <button onClick={handlePopUp} className={styles.btnClose}>
          &times;
        </button>

        <form>
          <p className={styles.formDescription}>
            Please fill up fields below and we will revert with detailed
            instruction for your next steps!
          </p>
          <label htmlFor="customerName">Your Name</label>
          <input
            type="text"
            id="customerName"
            placeholder="Your Name"
            className={styles.customerInput}
          />
          <label htmlFor="customerMail">Your E-mail</label>
          <input
            type="email"
            id="customerMail"
            placeholder="Your E-Mail"
            className={styles.customerInput}
          />
          <Link to="/myfitness">
            <Button>READY!</Button>
          </Link>
        </form>
      </div>
    </div>
  );
}

PopUp.propTypes = {
  handlePopUp: PropTypes.func,
};

export default PopUp;
