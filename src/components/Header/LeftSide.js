import React from "react";
import { UserIcon, StoriesIcon, ChatIcon, ThreeDots } from "../../assets/icons";

import styles from "./Header.module.css";

import IconButton from "@mui/material/IconButton";

const LeftSide = () => {
  return (
    <div className={styles.headerLeft}>
      <div className={styles.figure}>
        <UserIcon />
      </div>
      <div className={styles.actionButtons}>
        <div className={styles.actionButton}>
          <IconButton aria-label="Stories">
            <StoriesIcon />
          </IconButton>
        </div>
        <div className={styles.actionButton}>
          <IconButton aria-label="Stories">
            <ChatIcon />
          </IconButton>
        </div>
        <div className={styles.actionButton}>
          <IconButton aria-label="Stories">
            <ThreeDots />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
