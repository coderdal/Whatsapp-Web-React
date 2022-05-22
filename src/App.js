import React, { useEffect, useState } from "react";

import ChatsBar from "./components/ChatsBar/ChatsBar";
import Header from "./components/Header/Header";
import Chat from "./components/Chat/Chat";
import SendMessageBar from "./components/Chat/SendMessageBar";

import styles from "./App.module.css";
import Loading from "./components/Loading/Loading";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1250);
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <main className={styles.main}>
      <Header />
      <section className={styles.chatpanels}>
        <section className={styles.chats}>
          <ChatsBar />
        </section>
        <section className={styles.chat}>
          <Chat />
          <SendMessageBar />
        </section>
      </section>
    </main>
  );
};

export default App;
