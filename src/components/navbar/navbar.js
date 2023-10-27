"use client";

import React, { useState } from "react";
import styles from "./navbar.module.css";
import ClickAwayListener from "react-click-away-listener";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.navbar}>
      <button className={styles.button} onClick={() => setOpen(true)}>
        <p className={styles.main}>Admin</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M3.5 6L8 10.5L12.5 6"
            stroke="#1C1C1A"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <ClickAwayListener onClickAway={() => setOpen(false)}>
          <div
            className={`${styles.modal} ${
              open ? styles.active : styles.disable
            }`}
          >
            <p className={styles.title}>Admin</p>
            <div
              className={styles.actions}
              onClick={() => console.log("fadsf")}
            >
              <p>Log out</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M9.5 10.5V11.75C9.5 12.0815 9.3683 12.3995 9.13388 12.6339C8.89946 12.8683 8.58152 13 8.25 13H3.25C2.91848 13 2.60054 12.8683 2.36612 12.6339C2.1317 12.3995 2 12.0815 2 11.75V4.25C2 3.91848 2.1317 3.60054 2.36612 3.36612C2.60054 3.1317 2.91848 3 3.25 3H8C8.69031 3 9.5 3.55969 9.5 4.25V5.5M11.5 10.5L14 8L11.5 5.5M5.5 8H13.5"
                  stroke="#232321"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </ClickAwayListener>
      </button>
    </div>
  );
}