import { useLocation, useNavigate } from "react-router";
import { PropTypes } from "prop-types";
import useAuth from "../hook/useAuth";
import NavBar from "../components/NavBar";
import Button from "../components/Button";

import styles from "./Login.module.css";
function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn, user, handleUser } = useAuth();
  const { name, surname } = user;

  const fromPage = location.state?.from?.pathname || "/";

  function toMainPage() {
    navigate("/myfitness");
  }

  function handleSubmit(e) {
    e.preventDefault();
    signIn(user, () => navigate(fromPage, { replace: false }));
  }

  return (
    <main className={`${styles.login} container`}>
      <NavBar />

      <form onSubmit={handleSubmit}>
        <h2>Please enter required information to proceed next!</h2>
        <label>
          Your Name:{" "}
          <input
            type="text"
            name="userName"
            value={name}
            onChange={(e) =>
              handleUser((prevState) => {
                return { ...prevState, name: e.target.value };
              })
            }
            required
          />
        </label>
        <label>
          Surname:{" "}
          <input
            type="text"
            name="userSurname"
            value={surname}
            onChange={(e) =>
              handleUser((prevState) => {
                return { ...prevState, surname: e.target.value };
              })
            }
            required
          />
        </label>
        <label>
          E-mail: <input type="email" name="userEmail" />
        </label>
        <div className={`btnContainer`}>
          <Button type="submit">Sign Up</Button>
          <Button onClick={toMainPage}>Back to Main Page</Button>
        </div>
      </form>
    </main>
  );
}

Login.propTypes = {
  userData: PropTypes.obj,
  handleUserData: PropTypes.func,
};

export default Login;
