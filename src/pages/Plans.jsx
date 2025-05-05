import { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router";
import { PropTypes } from "prop-types";

import NavBar from "../components/NavBar";
import Button from "../components/Button";
import PlansItem from "../components/PlansItem";
import NavMobile from "../components/NavMobile";

import styles from "./Plans.module.css";

function Plans({ plans }) {
  const [inputValue, setInputValue] = useState("");
  const location = useLocation();

  const navigate = useNavigate();

  const fromPage = location.state?.from?.pathname || "/";

  function goBackToMain() {
    navigate(fromPage, { replace: true });
  }

  function handleInputValue(e) {
    setInputValue(e.target.value);
  }

  return (
    <main className={`${styles.plans} container`}>
      <NavMobile />
      <NavBar />
      <section>
        <h1>Choose plan which suitable for you!</h1>
        <form>
          {plans.map((plan) => (
            <PlansItem
              key={plan.id}
              plan={plan}
              handleInputValue={handleInputValue}
              inputValue={inputValue}
            />
          ))}

          <div className={`btnContainer`}>
            <Button onClick={goBackToMain}>Back</Button>
            <Link to={`details?price=${inputValue}`}>
              <Button
                type={!inputValue ? "notActive" : ""}
                disabled={!inputValue ? true : false}
              >
                CONFIRM CHOICE
              </Button>
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
}

Plans.propTypes = {
  plans: PropTypes.obj,
};

export default Plans;
