import React from "react";
import { OtherMessageIcon } from "../../assets/icons";

import styles from "./Chat.module.css";

const OtherMessage = ({
  message = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae excepturi error dicta optio, corporis cumque?",
  time = "12:00",
}) => {
  return (
    <div className={styles.other}>
      <div className={styles.otherMessage}>
        <span className={styles.corner}>
          <OtherMessageIcon />
        </span>
        <span className={styles.text}>{message}</span>
        <span className={styles.time}>{time}</span>
      </div>
    </div>
  );
};

export default OtherMessage;
