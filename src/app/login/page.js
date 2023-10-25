import React from "react";
import styles from "./login.module.css";
import Link from "next/link";
import LoginForm from "./components/loginForm";
import AuthPoster from "@/components/authPoster/authPoster";
import Image from "next/image";

export default function Login() {
  return (
    <div className={styles.login}>
      <AuthPoster />
      <div className={styles.loginRight}>
      <div className={styles.topLogo}>
          <Image src="/logo.svg" fill alt="logo" />
        </div>
        <div className={styles.loginForm}>
          <div className={styles.header}>
            <h1 className={styles.headerTitle}>Login</h1>
            <div className={styles.headerLink}>
              <Link href="/forgot-password">Forgot your password?</Link>
              <span> Or </span>
              <Link href="/register">{`Don't have a account ?`}</Link>
            </div>
          </div>
          <LoginForm />
          <p className={styles.terms}>
            By clicking {`'Log In'`} you agree to our website KicksClub{" "}
            <span>Terms & Conditions</span>, <span>Kicks Privacy Notice</span>{" "}
            and <span>Terms & Conditions</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
