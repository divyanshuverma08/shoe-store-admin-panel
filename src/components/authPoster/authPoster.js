import React from "react";
import styles from "../../app/login/login.module.css";
import Image from "next/image";

export default function AuthPoster() {
  return (
    <div className={styles.loginLeft}>
      <Image src="/auth/main.png" fill alt="login poster" />
      <div className={styles.logo}>
        <Image src="/logo.svg" fill alt="logo" />
      </div>
    </div>
  );
}
