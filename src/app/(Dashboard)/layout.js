import React from "react";
import styles from "./layout.module.css";
import Sidebar from "@/components/sidebar/sidebar";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

export default function DashboardLaylout({ children }) {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.main}>
        <Navbar />
        <div className={styles.container}>{children}</div>
        <Footer />
      </div>
    </div>
  );
}
