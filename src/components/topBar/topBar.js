import React from "react";
import styles from "./topBar.module.css";

export default function TopBar({ page, pageList,component }) {
  return (
    <div className={styles.topBar}>
      <div className={styles.left}>
        <h1>{page}</h1>
        <div className={styles.pageList}>
          {pageList?.map((page, i) => (
            <div key={i}>
              <p>{page}</p>
              {pageList.length !== i+1 && <p>{`>`}</p>}
            </div>
          ))}
        </div>
      </div>
      <div>{component}</div>
    </div>
  );
}
