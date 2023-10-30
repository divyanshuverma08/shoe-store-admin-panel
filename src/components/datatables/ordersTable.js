"use client";

import React from "react";
import styles from "./table.module.css";
import { useRouter } from "next/navigation";

export default function OrdersTable({ title,data }) {
  const router = useRouter();

  return (
    <div className={styles.ordersTable}>
      <div className={styles.header}>
        <p className={styles.title}>{title}</p>
      </div>
      <div className={styles.separator}></div>
      <table className={styles.table}>
        <tbody>
          <tr>
            <th className={styles.tableHeader}>Order ID</th>
            <th className={styles.tableHeader}>Date</th>
            <th className={styles.tableHeader}>Customer Name</th>
            <th className={styles.tableHeader}>Status</th>
            <th className={styles.tableHeader}>Amount</th>
          </tr>
          {data.map((item) => (
            <tr key={item._id} onClick={()=>router.push(`orders/${item._id}`)}>
              <td className={styles.tableData}>{item._id}</td>
              <td className={styles.tableData}>{item?.createdAt &&
                  new Date(item?.createdAt).toLocaleDateString("en-GB", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}</td>
              <td className={styles.tableData}>{`${item.firstName} ${item.lastName}`}</td>
              <td className={styles.tableData}>{item.status}</td>
              <td className={styles.tableData}>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
