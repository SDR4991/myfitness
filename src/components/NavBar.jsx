import styles from "./NavBar.module.css";

import { Link, useNavigate } from "react-router";

import useAuth from "../hook/useAuth";
import Button from "./Button";
import NavItem from "./NavItem";

const pages = [
  {
    id: 123,
    pageName: "Program",
  },
  {
    id: 321,
    pageName: "Advantages",
  },
  {
    id: 456,
    pageName: "Pricing",
  },
  {
    id: 654,
    pageName: "About",
  },
];

function NavBar() {
  const { signOut, isLogged } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className={styles.nav}>
      <Link to="/myfitness" className={styles.logo}>
        MyFitness
      </Link>
      <ul>
        {pages.map((page) => (
          <NavItem page={page} key={page.id} />
        ))}

        {isLogged && (
          <Button
            onClick={() => {
              signOut(() => navigate("/myfitness", { replace: true }));
            }}
          >
            Sign Out
          </Button>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
