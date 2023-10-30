import React from "react";
import styles from "../order.module.css";
import Image from "next/image";

export default function OrderTable({data}) {
  return (
    <div className={styles.orderTable}>
      <div className={styles.header}>
        <p className={styles.title}>Products</p>
      </div>
      <div className={styles.separator}></div>
      <table className={styles.table}>
        <tbody>
          <tr>
            <th className={styles.tableHeader}>Product Name</th>
            <th className={styles.tableHeader}>Product ID</th>
            <th className={styles.tableHeader}>Quantity</th>
            <th className={styles.tableHeader}>Total</th>
          </tr>
          {data?.items.map(item=><tr key={item._id}>
            <td className={styles.tableData}>
              <div className={styles.product}>
                <div className={styles.checkBox}>
                  <input type="checkbox" name="" id="" />
                </div>
                <Image
                  src="/product.png"
                  width={60}
                  height={60}
                  alt="product"
                />
                {item.model}
              </div>
            </td>
            <td className={styles.tableData}>{item.product._id}</td>
            <td className={styles.tableData}>{item.quantity}</td>
            <td className={styles.tableData}>{item.buyingPrice * item.quantity}</td>
          </tr>)}
        </tbody>
      </table>
      <div className={styles.bottomContainer}>
        <div className={styles.TotalAmountContainer}>
          <div className={styles.itemContainer}>
            <p className={styles.tag}>Subtotal</p>
            <p className={styles.tag}>₹{data.deliveryType === "Fast" ? data.amount - 100 : data.amount}</p>
          </div>
          <div className={styles.itemContainer}>
            <p className={styles.tag}>Tax (0%)</p>
            <p className={styles.tag}>₹0</p>
          </div>
          <div className={styles.itemContainer}>
            <p className={styles.tag}>Delivery</p>
            <p className={styles.tag}>₹{data.deliveryType === "Fast" ? 100 : 0}</p>
          </div>
          <div className={styles.itemContainer}>
            <p className={styles.tag}>Total</p>
            <p className={styles.tag}>₹{data.amount}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
