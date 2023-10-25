"use client"

import React from 'react';
import Input from '@/components/input/input';
import styles from "../register.module.css"
import Image from 'next/image';

export default function RegisterForm() {
  return (
    <>
    <div className={styles.section}>
      <p className={styles.sectionTitle}>Your Name</p>
      <Input
        name="firstName"
        type={"text"}
        placeholder={"First Name"}
      />
      <Input
        name="lastName"
        type={"text"}
        placeholder={"Last Name"}
      />
    </div>
    <div className={styles.section}>
      <p className={styles.sectionTitle}>Login Details</p>
      <Input
        name="email"
        type={"email"}
        placeholder={"Email"}
      />
      <div className={styles.inputContainer}>
        <Input
          name="password"
          type={"password"}
          placeholder={"Password"}
        />
        <p>
          Minimum 8 characters with at least one uppercase, one lowercase, one
          special character and a number
        </p>
      </div>
      <Input
        name="passwordReEnter"
        type={"password"}
        placeholder={"Re Enter Password"}
      />
    </div>
    <div className={styles.checkBox}>
      <input
        id="termsandconditions"
        type="checkbox"
      />
      <label htmlFor="termsandconditions">
        Agree to our website KicksClub <span>Terms & Conditions</span>,
        <span>Kicks Privacy Notice</span> and
        <span>Terms & Conditions</span>.
      </label>
    </div>
    <button className={styles.loginButton}>
      <p>Register</p>
      <Image src="/arrow_right.svg" width={16} height={16} alt="login" />
    </button>
  </>
  )
}
