"use client";

import React from "react";
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
  Text
} from "recharts";

const data = [
  { name: "Jan", value: 20 },
  { name: "Feb", value: 35 },
  { name: "Mar", value: 45 },
  { name: "Apr", value: 30 },
  { name: "May", value: 55 },
  { name: "Jun", value: 70 },
];

const renderCustomAxisTick = (e) => {
    const { payload: { value } } = e;

    return <Text className={styles.label}  {...e}>{`₹${value}`}</Text>;
};

export default function Graph() {
  return (
    <div className={styles.graph}>
      <div className={styles.header}>
        <p className={styles.title}>Sale Graph</p>
        <div className={styles.tabs}>
          <div className={`${styles.tab} ${styles.selected}`}>
            <p>Weekly</p>
          </div>
          <div className={styles.tab}>
            <p>Monthly</p>
          </div>
          <div className={styles.tab}>
            <p>Yearly</p>
          </div>
        </div>
      </div>
      <div className={styles.chart}>
        <ResponsiveContainer width="100%" height={355}>
          <LineChart data={data}>
            <XAxis dataKey="name"  />
            <YAxis tick={renderCustomAxisTick} />
            <CartesianGrid stroke="#ccc" vertical={false} />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
