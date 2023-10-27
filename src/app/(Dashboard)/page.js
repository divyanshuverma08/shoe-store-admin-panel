import React from "react";
import styles from "./dashboard.module.css";
import TopBar from "@/components/topBar/topBar";
import Card from "@/components/card/card";
import Graph from "@/components/graph/graph";
import BestSeller from "@/components/bestSeller/bestSeller";
import OrdersTable from "@/components/datatables/ordersTable";

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <TopBar page={"Dashboard"} pageList={["Home", "Dashboard"]} />
      <section className={styles.section}>
        <Card title={"Total Orders"} amount={126.5} percentage={34.7} />
        <Card title={"Pending Orders"} amount={126.5} percentage={34.7} />
        <Card title={"Shipped Orders"} amount={126.5} percentage={34.7} />
      </section>
      <section className={styles.section}>
        <Graph />
        <BestSeller />
      </section>
      <section>
        <OrdersTable title={"Recent Orders"} />
      </section>
    </div>
  );
}
