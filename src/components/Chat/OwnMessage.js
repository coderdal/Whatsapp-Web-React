import React from "react";
import { DoubleCheckIcon, OwnMessageIcon } from "../../assets/icons";

import styles from "./Chat.module.css";

const OwnMessage = ({
  message = "Reiciendis minus cum ipsa natus officia minima ducimus quaerat, soluta nostrum at amet dolor, libero saepe odio molestias iusto necessitatibus quam explicabo molestiae veniam.",
  time = "12:00",
  color,
}) => {
  return (
    <div className={styles.own}>
      <div className={styles.ownMessage}>
        <span className={styles.corner}>
          <OwnMessageIcon />
        </span>
        <span className={styles.text}>{message}</span>
        <span className={styles.details}>
          <span className={styles.time}>12:30</span>
          <span className={styles.messageStatus}>
            <DoubleCheckIcon color={color} />
          </span>
        </span>
      </div>
    </div>
  );
};

export default OwnMessage;
