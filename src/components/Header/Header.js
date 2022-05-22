import React from "react";

import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <LeftSide />
      <RightSide />
    </header>
  );
};

export default Header;
