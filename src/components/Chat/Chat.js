import React, { useRef, useState } from "react";
import Messages from "./Messages";

import styles from "./Chat.module.css";
import ScrollBottom from "./ScrollBottom";

const Chat = () => {
  const chat = useRef(null);

  const [scrollBottom, setScrollBottom] = useState(false);

  const onScroll = () => {
    if (chat.current) {
      if (chat.current.scrollTop <= -400) {
        setScrollBottom(true);
      } else {
        setScrollBottom(false);
      }
    }
  };

  return (
    <section onScroll={onScroll} ref={chat} className={styles.chat}>
      <Messages />
      {scrollBottom && <ScrollBottom />}
    </section>
  );
};

export default Chat;
