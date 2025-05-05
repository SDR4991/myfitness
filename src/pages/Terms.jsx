import NavBar from "../components/NavBar";
import Button from "../components/Button";
import styles from "./Terms.module.css";
import { useNavigate } from "react-router";

function Terms() {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return (
    <main className={`${styles.terms} container`}>
      <NavBar />
      <section>
        <h2>Terms & Conditions</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse minima
          ipsum corporis ducimus repellendus eveniet eum voluptatum ullam illum
          commodi enim inventore quasi iusto quo, aliquam quis architecto?
          Harum, officia.Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Esse minima ipsum corporis ducimus repellendus eveniet eum
          voluptatum ullam illum commodi enim inventore quasi iusto quo, aliquam
          quis architecto? Harum, officia. <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa enim,
          quod mollitia aliquid facilis consequatur excepturi labore beatae nam
          ipsam magni, eius in maiores eligendi sunt, optio quaerat fugit at?
        </p>
        <Button onClick={goBack}>Back</Button>
      </section>
    </main>
  );
}

export default Terms;
