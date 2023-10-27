import React from "react";
import styles from "../order.module.css";
import Image from "next/image";

export default function OrderTable() {
  return (
    <div className={styles.orderTable}>
      <div className={styles.header}>
        <p className={styles.title}>Products</p>
      </div>
      <div className={styles.separator}></div>
      <table className={styles.table}>
        <tr>
          <th className={styles.tableHeader}>Product Name</th>
          <th className={styles.tableHeader}>Order ID</th>
          <th className={styles.tableHeader}>Quantity</th>
          <th className={styles.tableHeader}>Total</th>
        </tr>
        <tr>
          <td className={styles.tableData}>
            <div className={styles.product}>
              <div className={styles.checkBox}>
                <input type="checkbox" name="" id="" />
              </div>
              <Image src="/product.png" width={60} height={60} alt="product" />
              Adidas ultra boost
            </div>
          </td>
          <td className={styles.tableData}>#25421</td>
          <td className={styles.tableData}>2</td>
          <td className={styles.tableData}>$800.40</td>
        </tr>
      </table>
      <div className={styles.bottomContainer}>
        <div className={styles.TotalAmountContainer}>
            <div className={styles.itemContainer}>
                <p className={styles.tag}>Subtotal</p>
                <p className={styles.tag}>$3,201.6</p>
            </div>
            <div className={styles.itemContainer}>
                <p className={styles.tag}>Tax (0%)</p>
                <p className={styles.tag}>$0</p>
            </div>
            <div className={styles.itemContainer}>
                <p className={styles.tag}>Discount</p>
                <p className={styles.tag}>$0</p>
            </div>
            <div className={styles.itemContainer}>
                <p className={styles.tag}>Total</p>
                <p className={styles.tag}>$3841.92</p>
            </div>
        </div>
      </div>
    </div>
  );
}
