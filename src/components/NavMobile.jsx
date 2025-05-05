import { Link, useNavigate } from "react-router";

import { useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";

import { GoArrowLeft } from "react-icons/go";

import useAuth from "../hook/useAuth";

import Button from "./Button";
import NavItem from "./NavItem";

import styles from "./NavMobile.module.css";

const pages = [
  {
    id: 3333,
    pageName: "Main",
  },
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

function NavMobile() {
  const { signOut, isLogged } = useAuth();
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();

  function handleOpen() {
    setOpen((prev) => !prev);
  }

  return (
    <div className={styles.hamburger}>
      <Link to="/myfitness">
        <GoArrowLeft className="hamburgerUndo"></GoArrowLeft>
      </Link>

      {!isOpen && <Hamburger toggled={isOpen} size={20} toggle={setOpen} />}
      {isOpen && (
        <div className={styles.hamburgerContainer}>
          <div className={styles.btnClose}>
            <Hamburger toggled={isOpen} toggle={setOpen} size={24} rounded />
          </div>

          <div className={styles.hamburgerDropDown}>
            <ul>
              {pages.map((page) => (
                <NavItem
                  page={page}
                  key={page.id}
                  handleOpen={isOpen && handleOpen}
                />
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
          </div>
        </div>
      )}
    </div>
  );
}

export default NavMobile;
