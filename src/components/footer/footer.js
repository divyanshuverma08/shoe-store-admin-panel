import React from "react";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.tradeMark}>© 2023 - kicks Dashboard</p>
        <div className={styles.links}>
            <p className={styles.link}>About</p>
            <p className={styles.link}>Careers</p>
            <p className={styles.link}>Policy</p>
            <p className={styles.link}>Contact</p>
        </div>
      </div>
    </div>
  );
}
