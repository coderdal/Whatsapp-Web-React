import React from "react";
import { LockIcon, WhatsappIcon } from "../../assets/icons";

import styles from "./Loading.module.css";
import LinearProgress from "@mui/material/LinearProgress";

const Loading = () => {
  return (
    <main className={styles.loading}>
      <div className={styles.logo}>
        <WhatsappIcon />
      </div>
      <div className={styles.progressBar}>
        <LinearProgress color="inherit" />
      </div>
      <div className={styles.encrypted}>
        <LockIcon />
        <span className={styles.text}>End-to-end encrypted</span>
      </div>
      <div className={styles.developer}>
        <p>
          Developer{" "}
          <a href="https://linkedin.com/muhammederdal">Muhammed Erdal</a>
        </p>
      </div>
    </main>
  );
};

export default Loading;
