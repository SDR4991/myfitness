import { PropTypes } from "prop-types";
import { useState } from "react";

import NavBar from "../components/NavBar";
import Search from "../components/Search";
import TabMenu from "../components/TabMenu";
import Trainings from "../components/Trainings";
import NavMobile from "../components/NavMobile";

import styles from "./AppLayout.module.css";

function AppLayout({ options }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState(0);

  const searchResults =
    searchQuery.length > 0
      ? options.filter((option) =>
          option.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : options;

  return (
    <main className={`${styles.layout} container`}>
      <NavBar />
      <NavMobile />
      <section className={`sectionApp`}>
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <h3>Choose your way among all opportunities</h3>
        <TabMenu
          options={searchResults}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <Trainings options={searchResults} activeTab={activeTab} />
      </section>
    </main>
  );
}

AppLayout.propTypes = {
  options: PropTypes.object,
  tabs: PropTypes.bool,
};

export default AppLayout;
