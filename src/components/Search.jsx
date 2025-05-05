import { PropTypes } from "prop-types";
import styles from "./Search.module.css";

function Search({ searchQuery, setSearchQuery }) {
  return (
    <input
      type="search"
      placeholder="Search workout , trainers etc."
      className={styles.search}
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
}

Search.propTypes = {
  searchQuery: PropTypes.string,
  setSearchQuery: PropTypes.func,
};

export default Search;
