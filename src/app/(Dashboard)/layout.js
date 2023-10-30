"use client"

import React,{ useEffect } from "react";
import styles from "./layout.module.css";
import Sidebar from "@/components/sidebar/sidebar";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export default function DashboardLaylout({ children }) {
  const router = useRouter();

  const user = useSelector((state) => state.auth.currentUser);

  useEffect(()=>{
    if (!user) {
      router.push("/login");
    }
  },[]);

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
