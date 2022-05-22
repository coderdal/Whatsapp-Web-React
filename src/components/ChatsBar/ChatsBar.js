import React from "react";

import styles from "./ChatsBar.module.css";

import { NotificationIcon } from "../../assets/icons";

import IconButton from "@mui/material/IconButton";
import ChatList from "./ChatList";

import SearchInput from "./SearchInput";

const ChatsBar = () => {
  return (
    <div className={styles.chatsBar}>
      <div className={styles.notification}>
        <IconButton aria-label="Stories">
          <NotificationIcon />
        </IconButton>
        <div className={styles.message}>
          <p>Stay notified on every message arrives</p>
          <p className={styles.light}>Turn on desktop notifications &gt;</p>
        </div>
      </div>

      <div className={styles.search}>
        <SearchInput />
      </div>

      <ChatList />
    </div>
  );
};

export default ChatsBar;
