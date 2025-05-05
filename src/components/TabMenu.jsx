import { PropTypes } from "prop-types";

import TabItem from "./TabItem";

import styles from "./TabMenu.module.css";

function TabMenu({ options, activeTab, setActiveTab }) {
  return (
    <ul className={styles.tabMenu}>
      {options.map((option, i) => (
        <TabItem
          key={option.id}
          options={option}
          activeTab={activeTab}
          index={i}
          setActiveTab={setActiveTab}
        />
      ))}
    </ul>
  );
}

TabMenu.propTypes = {
  options: PropTypes.object,
  activeTab: PropTypes.num,
  setActiveTab: PropTypes.func,
};
export default TabMenu;
