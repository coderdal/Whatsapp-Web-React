import React from "react";

import styles from "./ChatsBar.module.css";
import ListMessage from "./ListMessage";

import user2Avatar from "../../assets/images/user2-avatar.jpg";
import user3Avatar from "../../assets/images/user3-avatar.jpg";
import user4Avatar from "../../assets/images/user4-avatar.jpg";
import user5Avatar from "../../assets/images/user5-avatar.jpg";

const ChatList = () => {
  return (
    <div className={styles.chatsList}>
      <div className={styles.list}>
        <ListMessage time="12:00" />
        <ListMessage
          avatar={user2Avatar}
          name="Mary Patrica"
          lastmessage="Well Mary and u ?"
          time="9:20"
        />
        <ListMessage
          avatar={user3Avatar}
          name="Jonh Anderson"
          lastmessage="yeah I'm available"
          time="Yesterday"
        />
        <ListMessage
          avatar={user4Avatar}
          name="Jennifer"
          lastmessage="Your last work are so cool Erdal 😍"
          time="Friday"
        />
        <ListMessage
          name="Boss 🤓"
          lastmessage="Where is your project !!!!"
          time="Friday"
        />
        <ListMessage
          avatar={user5Avatar}
          name="Steve"
          lastmessage="See you later"
        />
        <ListMessage />
        <ListMessage />
        <ListMessage />
        <ListMessage />
        <ListMessage name="Boss 🤓" lastmessage="Where is your project !!!!" />
        <ListMessage />
        <ListMessage />
        <ListMessage
          avatar={user4Avatar}
          name="Jennifer"
          lastmessage="Test message by CodErdal"
        />
        <ListMessage />
        <ListMessage
          avatar={user5Avatar}
          name="Steve"
          lastmessage="See you later"
        />
        <ListMessage />
        <ListMessage />
        <ListMessage />
        <ListMessage />
        <ListMessage />
        <ListMessage />
        <ListMessage />
        <ListMessage />
        <ListMessage />
        <ListMessage />
        <ListMessage />
        <ListMessage />
        <ListMessage />
        <ListMessage />
        <ListMessage />
        <ListMessage />
        <ListMessage />
        <ListMessage />
        <ListMessage />
        <ListMessage />
        <ListMessage />
        <ListMessage />
        <ListMessage />
        <ListMessage />
        <ListMessage />
        <ListMessage />
      </div>
    </div>
  );
};

export default ChatList;
