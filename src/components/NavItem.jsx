import { NavLink } from "react-router";
import { PropTypes } from "prop-types";

function NavItem({ page, handleOpen }) {
  const { pageName } = page;

  return (
    <li onClick={handleOpen}>
      <NavLink
        to={pageName === "Main" ? "/myfitness" : `/${pageName.toLowerCase()}`}
      >
        {pageName}
      </NavLink>
    </li>
  );
}

NavItem.propTypes = {
  page: PropTypes.obj,
  handleOpen: PropTypes.func,
};

export default NavItem;
