import NavBar from "../components/NavBar";
import Button from "../components/Button";
import NavMobile from "../components/NavMobile";

import styles from "./Advantages.module.css";

function Advantages() {
  return (
    <main className={`${styles.advantages} container`}>
      <NavMobile />
      <NavBar />
      <section className={`section`}>
        <h1 className={`title`}>Advantages</h1>
        <h3 className={`subtitle`}>
          What is advantages of the personal program?
        </h3>
        <p className={`commonText`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste illum
          aliquid impedit quasi repellat eum maiores accusantium, vero eius non
          cum earum. Dolorum recusandae fugiat accusantium ab, voluptatibus
          exercitationem harum!
        </p>
        <p className={`commonText`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste illum
          aliquid impedit quasi repellat eum maiores accusantium, vero eius non
          cum earum. Dolorum recusandae fugiat accusantium ab, voluptatibus
          exercitationem harum!
        </p>
        <Button>Get Started</Button>
      </section>
    </main>
  );
}

export default Advantages;
