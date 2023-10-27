import React from "react";
import styles from "./order.module.css";
import Image from "next/image";
import TopBar from "@/components/topBar/topBar";
import OrderTable from "./components/orderTable";

export default function Order() {
  return (
    <div className={styles.order}>
      <TopBar
        page={"Order List"}
        pageList={["Home", "Order List", "Order Details"]}
      />
      <div className={styles.orderDetails}>
        <div className={styles.header}>
          <div className={styles.title}>
            <div className={styles.orderId}>Orders ID: #6743</div>
            <div className={styles.status}>Pending</div>
          </div>
          <div className={styles.bar}>
            <div className={styles.date}>
              <Image src="/calendar.svg" width={24} height={24} alt="date" />
              <p>Feb 16,2022</p>
            </div>
            <div className={styles.actions}>
              <select
                name={"status"}
                className={styles.inputSelect}
                id="status"
              >
                <option disabled value="default">
                  status
                </option>
                <option value="Complete">Complete</option>
                <option value="Delivery">Delivery</option>
              </select>
              <div className={styles.saveButton}>Save</div>
            </div>
          </div>
        </div>
        <div className={styles.information}>
          <div className={styles.infoCard}>
            <div className={styles.cardIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M16.1246 6.75C15.9408 9.22828 14.0621 11.25 11.9995 11.25C9.93705 11.25 8.05502 9.22875 7.87455 6.75C7.68705 4.17188 9.51517 2.25 11.9995 2.25C14.4839 2.25 16.3121 4.21875 16.1246 6.75Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.0001 14.25C7.92199 14.25 3.78293 16.5 3.01699 20.7469C2.92465 21.2588 3.21433 21.75 3.75011 21.75H20.2501C20.7864 21.75 21.0761 21.2588 20.9837 20.7469C20.2173 16.5 16.0782 14.25 12.0001 14.25Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                />
              </svg>
            </div>
            <div className={styles.cardDetails}>
              <p className={styles.cardTitle}>Customer</p>
              <p className={styles.cardCotent}>Full Name: Jane Cooper</p>
              <p className={styles.cardCotent}>Email: janecooper@gmail.com</p>
              <p className={styles.cardCotent}>Phone: +900 231 1212</p>
            </div>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.cardIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M7.5 8.25V6.75C7.5 5.55653 7.97411 4.41193 8.81802 3.56802C9.66193 2.72411 10.8065 2.25 12 2.25V2.25C13.1935 2.25 14.3381 2.72411 15.182 3.56802C16.0259 4.41193 16.5 5.55653 16.5 6.75V8.25M3.75 8.25C3.55109 8.25 3.36032 8.32902 3.21967 8.46967C3.07902 8.61032 3 8.80109 3 9V19.125C3 20.5425 4.2075 21.75 5.625 21.75H18.375C19.7925 21.75 21 20.6011 21 19.1836V9C21 8.80109 20.921 8.61032 20.7803 8.46967C20.6397 8.32902 20.4489 8.25 20.25 8.25H3.75Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.5 10.5V11.25C7.5 12.4435 7.97411 13.5881 8.81802 14.432C9.66193 15.2759 10.8065 15.75 12 15.75C13.1935 15.75 14.3381 15.2759 15.182 14.432C16.0259 13.5881 16.5 12.4435 16.5 11.25V10.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className={styles.cardDetails}>
              <p className={styles.cardTitle}>Order Info</p>
              <p className={styles.cardCotent}>Shipping: Next express</p>
              <p className={styles.cardCotent}>Payment Method: Paypal</p>
              <p className={styles.cardCotent}>Status: Pending</p>
            </div>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.cardIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M7.5 8.25V6.75C7.5 5.55653 7.97411 4.41193 8.81802 3.56802C9.66193 2.72411 10.8065 2.25 12 2.25V2.25C13.1935 2.25 14.3381 2.72411 15.182 3.56802C16.0259 4.41193 16.5 5.55653 16.5 6.75V8.25M3.75 8.25C3.55109 8.25 3.36032 8.32902 3.21967 8.46967C3.07902 8.61032 3 8.80109 3 9V19.125C3 20.5425 4.2075 21.75 5.625 21.75H18.375C19.7925 21.75 21 20.6011 21 19.1836V9C21 8.80109 20.921 8.61032 20.7803 8.46967C20.6397 8.32902 20.4489 8.25 20.25 8.25H3.75Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.5 10.5V11.25C7.5 12.4435 7.97411 13.5881 8.81802 14.432C9.66193 15.2759 10.8065 15.75 12 15.75C13.1935 15.75 14.3381 15.2759 15.182 14.432C16.0259 13.5881 16.5 12.4435 16.5 11.25V10.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className={styles.cardDetails}>
              <p className={styles.cardTitle}>Deliver to</p>
              <p className={styles.cardCotent}>
                Address: Santa Ana, illinois 85342 2345 Westheimer Rd. Block 9A
              </p>
            </div>
          </div>
        </div>
      </div>
      <OrderTable />
    </div>
  );
}
