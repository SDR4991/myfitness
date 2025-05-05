import NavBar from "../components/NavBar";
import Button from "../components/Button";
import NavMobile from "../components/NavMobile";

import styles from "./Program.module.css";

function Program() {
  return (
    <main className={`${styles.program} container`}>
      <NavMobile />
      <NavBar />
      <section className={`section`}>
        <h1 className={`title`}>Your Program</h1>
        <h3 className={`subtitle`}>How will we arrange your program?</h3>
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
        <Button>Choose yours</Button>
      </section>
    </main>
  );
}

export default Program;
