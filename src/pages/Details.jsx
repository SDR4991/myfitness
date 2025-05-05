import { useState } from "react";
import { useParams, useSearchParams, useNavigate, Link } from "react-router";

import useAuth from "../hook/useAuth";

import NavBar from "../components/NavBar";
import Button from "../components/Button";
import FinalPopUp from "../components/FinalPopUp";

import styles from "./Details.module.css";
import NavMobile from "../components/NavMobile";

function Details() {
  const [disabled, setDisabled] = useState(true);
  const [confirmOrder, setConfirmOrder] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { training } = useParams();
  const { user } = useAuth();
  const { name, surname } = user;

  const price = searchParams.get("price");

  function handleConfirmOrder() {
    setConfirmOrder(true);
    setTimeout(() => completionOrder(), 3000);
  }

  function completionOrder() {
    setConfirmOrder(false);
    navigate("/myfitness");
  }

  function goBack() {
    navigate(-1);
  }

  function handleDisabled() {
    setDisabled(!disabled);
  }

  return (
    <main className={`${styles.details} container`}>
      {confirmOrder && <FinalPopUp />}
      <NavMobile />
      <NavBar />
      <section className={`sectionApp`}>
        <h2>Please check if below information correct:</h2>
        <p>
          Client name / surname:{" "}
          <span>
            {name.toUpperCase()} / {surname.toUpperCase()}
          </span>
        </p>
        <p>
          Type of training: <span>{training.toUpperCase()}</span>
        </p>
        <p>
          Choosen plan: <span>{price}$</span>
        </p>

        <Link to="terms">
          <p>Read the terms & conditions</p>
        </Link>
        <label htmlFor="agreeTerms">
          <input
            id="agreeTerms"
            name="agreeTerms"
            type="checkbox"
            onChange={(e) => handleDisabled(e.target.value)}
          />
          I agreed with terms & conditions.
        </label>
        <p>If all information is correct please click Confirm button</p>
        <div className={`btnContainer`}>
          <Button onClick={goBack}>Back</Button>
          <Button
            type={disabled && "notActive"}
            disabled={disabled}
            onClick={handleConfirmOrder}
          >
            Confirm
          </Button>
        </div>
      </section>
    </main>
  );
}

export default Details;
