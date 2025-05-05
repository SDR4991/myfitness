import { PropTypes } from "prop-types";

import styles from "./Button.module.css";

function Button({ children, type, onClick, disabled }) {
  return (
    <button
      className={disabled ? `${styles[type]}` : `${styles.btn} ${styles[type]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
