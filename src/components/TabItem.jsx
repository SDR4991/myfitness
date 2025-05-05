import { PropTypes } from "prop-types";

import styles from "./TabItem.module.css";

function TabItem({ options, index, setActiveTab, activeTab }) {
  const { name } = options;
  return (
    <li
      className={`${styles.tab} ${activeTab === index && styles.active}`}
      onClick={() => setActiveTab(index)}
    >
      {name}
    </li>
  );
}

TabItem.propTypes = {
  options: PropTypes.object,
  setActiveTab: PropTypes.func,
  activeTab: PropTypes.activeTab,
  index: PropTypes.num,
};

export default TabItem;
