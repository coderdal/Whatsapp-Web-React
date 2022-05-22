import React from "react";

import styles from "./ChatsBar.module.css";

import userAvatar from "../../assets/images/user-avatar.jpg";

const ListMessage = ({
  avatar = userAvatar,
  name = "Cod Erdal",
  lastmessage = "https://linkedin.com/in/coderdal",
  time = "17.05.2022",
}) => {
  return (
    <div className={styles.listMessage}>
      <div className={styles.chat}>
        <div className={styles.icon}>
          <img src={avatar} alt="avatar" />
        </div>
        <div className={styles.chatInfo}>
          <h4>{name}</h4>
          <p>{lastmessage}</p>
        </div>
      </div>
      <div className={styles.timeInfo}>
        <h4>{time}</h4>
      </div>
    </div>
  );
};

export default ListMessage;
