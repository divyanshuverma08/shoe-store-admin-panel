"use client";

import React from "react";
import styles from "./table.module.css";

const data = [
  {
    productName: "Nike Air",
    orderId: "1",
    date: "123213",
    customerName: "fasdfasdf",
    status: "Completed",
    amount: 16000,
  },
  {
    productName: "Nike Air",
    orderId: "2",
    date: "12",
    customerName: "fasdfasdf",
    status: "Completed",
    amount: 16000,
  },
  {
    productName: "Nike Air",
    orderId: "3",
    date: "123",
    customerName: "fasdfasdf",
    status: "Completed",
    amount: 16000,
  },
  {
    productName: "Nike Air",
    orderId: "4",
    date: "1232",
    customerName: "fasdfasdf",
    status: "Completed",
    amount: 16000,
  },
  {
    productName: "Nike Air",
    orderId: "5",
    date: "12321",
    customerName: "fasdfasdf",
    status: "Completed",
    amount: 16000,
  },
  {
    productName: "Nike Air",
    orderId: "6",
    date: "1232136",
    customerName: "fasdfasdf",
    status: "Completed",
    amount: 16000,
  },
];

export default function OrdersTable({ title }) {
  return (
    <div className={styles.table}>
      <div className={styles.header}>
        <p className={styles.title}>{title}</p>
      </div>
      <div className={styles.separator}></div>
      <table className={styles.table}>
        <tr>
          <th className={styles.tableHeader}>Product</th>
          <th className={styles.tableHeader}>Order ID</th>
          <th className={styles.tableHeader}>Date</th>
          <th className={styles.tableHeader}>Customer Name</th>
          <th className={styles.tableHeader}>Status</th>
          <th className={styles.tableHeader}>Amount</th>
        </tr>
        {data.map((item) => (
          <tr key={item.orderId}>
            <td className={styles.tableData}>{item.productName}</td>
            <td className={styles.tableData}>{item.orderId}</td>
            <td className={styles.tableData}>{item.date}</td>
            <td className={styles.tableData}>{item.customerName}</td>
            <td className={styles.tableData}>{item.status}</td>
            <td className={styles.tableData}>{item.amount}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
