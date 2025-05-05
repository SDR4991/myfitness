import { Link } from "react-router";
import Button from "../components/Button";
import NavBar from "../components/NavBar";
import NavMobile from "../components/NavMobile";

import styles from "./Mainpage.module.css";

function Mainpage() {
  return (
    <main className={`${styles.mainpage} container`}>
      <NavMobile />
      <NavBar />
      <section className={`section`}>
        <h1>MyFitness</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, eius
          possimus. Eum voluptate soluta magni nihil facere. Voluptates quidem
          sit iure quod aliquam in, voluptate numquam excepturi, voluptas
          tempore id?
        </p>
        <Link to="/app">
          <Button>Start Now!</Button>
        </Link>
      </section>
    </main>
  );
}

export default Mainpage;
