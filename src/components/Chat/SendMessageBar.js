import React from "react";

import styles from "../../App.module.css";

import { SmileyIcon, AttachmentIcon, VoiceMessage } from "../../assets/icons";

import IconButton from "@mui/material/IconButton";

const SendMessageBar = () => {
  return (
    <div className={styles.sendMessageBar}>
      <div className={styles.send}>
        <div className={styles.buttons}>
          <IconButton aria-label="Emojies">
            <SmileyIcon />
          </IconButton>
          <IconButton aria-label="Attachment">
            <AttachmentIcon />
          </IconButton>
        </div>
        <div className={styles.inputBar}>
          <input type="text" placeholder="Type a message" />
        </div>
        <div className={styles.voiceMessage}>
          <IconButton aria-label="Voice Message">
            <VoiceMessage />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default SendMessageBar;
