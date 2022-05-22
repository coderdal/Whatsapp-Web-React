import React, { useState } from "react";

import styles from "./ChatsBar.module.css";

import IconButton from "@mui/material/IconButton";

import { SearchIcon, BackIcon } from "../../assets/icons";

const SearchInput = () => {
  const [onFocus, setOnFocus] = useState(false);

  return (
    <>
      <div className={styles.icon}>
        <IconButton aria-label="Search">
          {onFocus ? (
            <span className={styles.animateIcon}>
              <BackIcon />
            </span>
          ) : (
            <SearchIcon />
          )}
        </IconButton>
      </div>

      <input
        type="text"
        placeholder="Search or start a new chat"
        onFocus={() => setOnFocus(true)}
        onBlur={() => setOnFocus(false)}
      />
    </>
  );
};

export default SearchInput;
