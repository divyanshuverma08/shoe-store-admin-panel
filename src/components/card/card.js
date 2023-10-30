import React from "react";
import Image from "next/image";
import styles from "./card.module.css";

export default function Card({ title, amount, percentage }) {
  return (
    <div className={styles.card}>
      <p className={styles.title}>{title}</p>
      <div className={styles.box}>
        <div className={styles.main}>
          <div className={styles.leftContainer}>
            <div className={styles.iconConatiner}>
              <Image
                src="/dashboard/bag.svg"
                alt={title}
                width={20}
                height={20}
              />
            </div>
            <p className={styles.amount}>{`${amount}`}</p>
          </div>
          <div className={styles.rightContainer}>
            <Image
              src="/dashboard/arrow_up.svg"
              alt={title}
              width={20}
              height={20}
            />
            <p className={styles.percentage}>{`${percentage}%`}</p>
          </div>
        </div>
        <div className={styles.subText}>
          <p>Compared to last month</p>
        </div>
      </div>
    </div>
  );
}
