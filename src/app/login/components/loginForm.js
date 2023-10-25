import React from "react";
import Input from "@/components/input/input";
import Image from "next/image";
import styles from "../login.module.css"

export default function LoginForm() {
  return (
    <>
      <Input
        name="email"
        type={"email"}
        placeholder={"Email"}
      />
      <Input
        name="password"
        type={"password"}
        placeholder={"Password"}
      />
      <button className={styles.loginButton}>
        <p>Email Login</p>
        <Image src="/arrow_right.svg" width={16} height={16} alt="login" />
      </button>
    </>
  );
}
