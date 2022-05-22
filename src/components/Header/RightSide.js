import React from "react";

import styles from "./Header.module.css";

import userAvatar from "../../assets/images/user-avatar.jpg";

import { ThreeDots, SearchIcon } from "../../assets/icons";

import IconButton from "@mui/material/IconButton";

const RightSide = () => {
  return (
    <div className={styles.headerRight}>
      <div className={styles.user}>
        <div className={styles.figure}>
          <img src={userAvatar} alt="User Avatar" />
        </div>
        <h4>Cod Erdal</h4>
      </div>

      <div className={styles.chatActions}>
        <div className={styles.actionButton}>
          <IconButton aria-label="Search">
            <SearchIcon />
          </IconButton>
        </div>
        <div className={styles.actionButton}>
          <IconButton aria-label="More">
            <ThreeDots />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
