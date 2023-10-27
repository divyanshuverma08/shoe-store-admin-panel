import React from "react";
import styles from "./orders.module.css";
import TopBar from "@/components/topBar/topBar";
import OrdersTable from "@/components/datatables/ordersTable";
import Pagination from "../products/components/pagination";

export default function Orders({ searchParams }) {
  return (
    <div className={styles.orders}>
      <TopBar page={"Order List"} pageList={["Home", "Order List"]} />
      <OrdersTable title={"Orders"} />
      <div className={styles.bottom}>
        <Pagination params={searchParams} />
      </div>
    </div>
  );
}
