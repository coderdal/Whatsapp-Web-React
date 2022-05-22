import React from "react";

import styles from "./Chat.module.css";

import IconButton from "@mui/material/IconButton";

import { ScrollToBottomIcon } from "../../assets/icons";

const ScrollBottom = () => {
  return (
    <div className={styles.scrollBottom}>
      <IconButton aria-label="Stories">
        <ScrollToBottomIcon />
      </IconButton>
    </div>
  );
};

export default ScrollBottom;
