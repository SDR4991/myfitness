import styles from "./FinalPopUp.module.css";

function FinalPopUp() {
  return (
    <div className={styles.overlay}>
      <div className={`${styles.popUpContainer}`}>
        {/* <button className={styles.btnClose}>&times;</button> */}
        <div className={styles.msgContainer}>
          <h3>Thank for you choice!😊</h3>
          <p>We will contact you soon</p>
          <p>
            Stay with <span>MyFitness</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default FinalPopUp;
