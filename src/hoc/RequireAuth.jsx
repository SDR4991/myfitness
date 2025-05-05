import { useLocation, Navigate } from "react-router";
import { PropTypes } from "prop-types";
import useAuth from "../hook/useAuth";

function RequireAuth({ children }) {
  const location = useLocation();
  const { isLogged } = useAuth();
  console.log(location);
  if (!isLogged) {
    return <Navigate to="/login" state={{ from: location, replace: false }} />;
  }
  return children;
}

RequireAuth.propTypes = {
  children: PropTypes.func,
};

export default RequireAuth;
