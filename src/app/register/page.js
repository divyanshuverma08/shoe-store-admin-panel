import React from "react";
import Link from "next/link";
import styles from "./register.module.css";
import AuthPoster from "@/components/authPoster/authPoster";
import RegisterForm from "./components/registerForm";
import Image from "next/image";

export default function Register() {
  return (
    <div className={styles.register}>
      <AuthPoster />
      <div className={styles.registerRight}>
        <div className={styles.topLogo}>
          <Image src="/logo.svg" fill alt="logo" />
        </div>
        <div className={styles.registerForm}>
          <div className={styles.header}>
            <h1 className={styles.headerTitle}>Register</h1>
            <div className={styles.headerLink}>
              <Link href="/login">Already have an account ?</Link>
            </div>
          </div>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
