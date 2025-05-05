import { createContext, useState } from "react";
import { PropTypes } from "prop-types";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const initialUser = {
    name: "",
    surname: "",
  };

  const [isLogged, setLogged] = useState(false);

  const [user, setUser] = useState(initialUser);

  function handleUser(data) {
    setUser(data);
  }

  function resetUser() {
    setUser(initialUser);
  }

  function signIn(newUser, cb) {
    setUser(newUser);
    setLogged(true);
    cb();
  }

  function signOut(cb) {
    resetUser();
    setLogged(false);
    cb();
  }

  const value = { user, signIn, signOut, isLogged, handleUser };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.func,
};
