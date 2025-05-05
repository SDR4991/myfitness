import NavBar from "../components/NavBar";
import Button from "../components/Button";
import NavMobile from "../components/NavMobile";

import styles from "./AboutUs.module.css";

function AboutUs() {
  return (
    <main className={`${styles.about} container`}>
      <NavMobile />
      <NavBar />
      <section className={`section`}>
        <h1 className={`title`}>About Us</h1>
        <h3 className={`subtitle`}>Our Team</h3>
        <p className={`commonText`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          modi enim. Vel deserunt necessitatibus ipsa maxime nemo, doloribus ea
          quasi earum exercitationem magni ex odio inventore blanditiis sint
          tempora possimus.
        </p>
        <p className={`commonText`}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit et
          aliquid enim temporibus saepe incidunt, eius, vel, nulla commodi
          accusantium laborum. Ex dolor sapiente tempora ratione voluptas
          blanditiis quae alias!
        </p>
        <Button>Meet Our Team</Button>
      </section>
    </main>
  );
}

export default AboutUs;
