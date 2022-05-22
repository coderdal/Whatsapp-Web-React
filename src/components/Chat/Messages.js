import React from "react";

import styles from "./Chat.module.css";
import OtherMessage from "./OtherMessage";
import OwnMessage from "./OwnMessage";

const Messages = () => {
  return (
    <div className={styles.messages}>
      <OtherMessage
        message="Hello Erdal, this is a test message. Can you see this ?"
        time="7:22"
      />
      <OwnMessage
        message="Yes I can. How it's going ? Do you think it was nice?"
        color="#53BDEB"
        time="7:23"
      />
      <OtherMessage message="What is your Linkedin Account ?" time="7:24" />
      <OwnMessage
        message="This is my Linkedin Account: @muhammederdal"
        color="#53BDEB"
        time="7:25"
      />
      <OtherMessage />
      <OwnMessage />
      <OtherMessage />
      <OwnMessage />
      <OtherMessage />
      <OwnMessage />
      <OtherMessage />
      <OwnMessage />
      <OtherMessage />
      <OwnMessage />
      <OtherMessage />
      <OwnMessage />
      <OtherMessage
        message="Hello Erdal, this is a test message. Can you see this ?"
        time="7:22"
      />
      <OwnMessage
        message="Yes I can. How it's going ? Do you think it was nice?"
        color="#53BDEB"
        time="7:23"
      />
      <OtherMessage message="What is your Linkedin Account ?" time="7:24" />
      <OwnMessage
        message="This is my Linkedin Account: @muhammederdal"
        color="#53BDEB"
        time="7:25"
      />
      <OtherMessage message="And your GitHub Account ?" time="7:26" />
      <OwnMessage message="it is: @coderdal" time="7:28" />
    </div>
  );
};

export default Messages;
