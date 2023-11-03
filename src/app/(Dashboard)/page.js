"use client";

import React, { useEffect, useState } from "react";
import styles from "./dashboard.module.css";
import TopBar from "@/components/topBar/topBar";
import Card from "@/components/card/card";
import Graph from "@/components/graph/graph";
import BestSeller from "@/components/bestSeller/bestSeller";
import OrdersTable from "@/components/datatables/ordersTable";
import { order } from "@/lib/services/order";
import { dashboard } from "@/lib/services/dashboard";
import Loader from "@/components/loader/loader";
import Image from "next/image";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [dashboardData, setDashboardData] = useState(null);
  const [bestSllersData, setBestSellersData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const query = new URLSearchParams({ page: 1 });

    const tableRequest = order.getOrders({
      query,
      auth: true,
    });

    const dashboardRequest = dashboard.getDashboardDetails({ auth: true });

    const bestSellersRequest = dashboard.getBestSellers({ auth: true });

    try {
      const [table, dashboard, bestSellers] = await Promise.all([
        tableRequest,
        dashboardRequest,
        bestSellersRequest,
      ]);

      setData(table.data?.data);
      setDashboardData(dashboard.data);
      setBestSellersData(bestSellers.data);
    } catch (error) {
      if (error.response?.data) {
        console.log(error.response.data);
      }
    }
  }

  const year = new Date().getFullYear();
  const month = new Date().getMonth();

  return (
    <div className={styles.dashboard}>
      <TopBar
        page={"Dashboard"}
        pageList={["Home", "Dashboard"]}
        component={
          <div className={styles.date}>
            <Image src="/calendar.svg" width={24} height={24} alt="date" />
            <p>
              {new Date(year, month, 1).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>{" "}
            -{" "}
            <p>
              {new Date().toLocaleDateString("en-GB", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        }
      />
      {data && dashboardData && bestSllersData ? (
        <>
          <section className={styles.section}>
            <Card
              title={"Total Orders"}
              amount={dashboardData?.totalOrders.amount}
              percentage={dashboardData?.totalOrders.percentage}
            />
            <Card
              title={"Pending Orders"}
              amount={dashboardData?.pendingOrders.amount}
              percentage={dashboardData?.pendingOrders.percentage}
            />
            <Card
              title={"Shipped Orders"}
              amount={dashboardData?.shippedOrders.amount}
              percentage={dashboardData?.shippedOrders.percentage}
            />
          </section>
          <section className={styles.section}>
            <Graph />
            <BestSeller data={bestSllersData} />
          </section>
          <section>
            {data && <OrdersTable title={"Recent Orders"} data={data} />}
          </section>
        </>
      ) : (
        <div style={{ width: "min-content", margin: "50px auto" }}>
          <Loader width="200" h color="#000" />
        </div>
      )}
    </div>
  );
}
