"use client";

import React, { useState, useEffect } from "react";
import styles from "./graph.module.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
  Text,
} from "recharts";
import { dashboard } from "@/lib/services/dashboard";

const renderCustomAxisTick = (e) => {
  const {
    payload: { value },
  } = e;

  return <Text className={styles.label} {...e}>{`${value}`}</Text>;
};

export default function Graph() {
  const [sort, setSort] = useState("Year");
  const [data, setData] = useState(null);

  useEffect(() => {
    if (sort === "Year") {
      getDataYear();
    } else {
      getDataMonth();
    }
  }, [sort]);

  const getDataYear = async () => {
    try {
      const response = await dashboard.getOrdersByYear({ auth: true });

      setData([
        { name: "Jan", value: response.data[0].totalOrders },
        { name: "Feb", value: response.data[1].totalOrders },
        { name: "Mar", value: response.data[2].totalOrders },
        { name: "Apr", value: response.data[3].totalOrders },
        { name: "May", value: response.data[4].totalOrders },
        { name: "Jun", value: response.data[5].totalOrders },
        { name: "Jul", value: response.data[6].totalOrders },
        { name: "Aug", value: response.data[7].totalOrders },
        { name: "Sept", value: response.data[8].totalOrders },
        { name: "Oct", value: response.data[9].totalOrders },
        { name: "Nov", value: response.data[10].totalOrders },
        { name: "Dec", value: response.data[11].totalOrders },
      ]);
    } catch (error) {
      if (error.response?.data) {
        console.log(error.response.data);
      }
    }
  };

  const getDataMonth = async () => {
    try {
      const response = await dashboard.getOrdersByMonth({ auth: true });

      const result = [];

      for (var i = 0; i < response.data.length; i++) {
        result.push({
          name: response.data[i].day,
          value: response.data[i].totalOrders,
        });
      }

      setData(result);

    } catch (error) {
      if (error.response?.data) {
        console.log(error.response.data);
      }
    }
  };

  return (
    <div className={styles.graph}>
      <div className={styles.header}>
        <p className={styles.title}>Sale Graph</p>
        <div className={styles.tabs}>
          {/* <div className={`${styles.tab} ${styles.selected}`}>
            <p>Weekly</p>
          </div> */}
          <div className={`${styles.tab} ${sort ==="Month" && styles.selected}`} onClick={()=>setSort("Month")}>
            <p>Monthly</p>
          </div>
          <div className={`${styles.tab} ${sort ==="Year" && styles.selected}`} onClick={()=>setSort("Year")}>
            <p>Yearly</p>
          </div>
        </div>
      </div>
      <div className={styles.chart}>
        {data && (
          <ResponsiveContainer width="100%" height={355}>
            <LineChart data={data}>
              <XAxis dataKey="name" />
              <YAxis tick={renderCustomAxisTick} />
              <CartesianGrid stroke="#ccc" vertical={false} />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}
