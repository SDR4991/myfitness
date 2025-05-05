import { Link } from "react-router";

import NavBar from "../components/NavBar";
import Button from "../components/Button";
import NavMobile from "../components/NavMobile";

import styles from "./Pricing.module.css";

function Pricing() {
  return (
    <main className={`${styles.price} container`}>
      <NavMobile />
      <NavBar />
      <section className={`section`}>
        <h1 className={`title`}>Our Prices</h1>
        <h3 className={`subtitle`}>Only 19$/month</h3>
        <p className={`commonText`}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
          minus at adipisci a voluptates assumenda id voluptas ut eius vero
          labore aspernatur perspiciatis nam distinctio tempora, atque maxime
          nemo laudantium?
        </p>
        <p className={`commonText`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ad
          consectetur sed temporibus totam deserunt, sint dolorem minus nam
          possimus quas ipsum iste sapiente doloremque rerum neque? Temporibus,
          sunt amet.
        </p>
        <Link to="/">
          <Button>Check all plans</Button>
        </Link>
      </section>
    </main>
  );
}

export default Pricing;
