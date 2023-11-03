"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./sidebarMobile.module.css";
import Sidebar from "../sidebar/sidebar";

export default function SidebarMobile() {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const disableBodyScroll = () => {
    if (typeof window != "undefined" && window.document) {
      // document.getElementById("wrapper").classList.add("stopScroll");
      document.body.style.overflow = "hidden";
    }
  };

  const enableBodyScroll = () => {
    // document.getElementById("wrapper").classList.remove("stopScroll");
    document.body.style.overflow = "unset";
  };

  const handleClick = (link) => {
    setOpen(false);
    enableBodyScroll();
    router.push(link, { scroll: false });
    const targetId = link.split("#")[link.split("#").length - 1];
    const elem = document.getElementById(targetId);
    const scrollPosition =
      elem.getBoundingClientRect().top + window.scrollY - 50;

    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        className={styles.burger}
        onClick={() => {
          setOpen(true);
          disableBodyScroll();
        }}
      >
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      <Sidebar mobile={true} onClose={()=>setOpen(false)} open={open} />
    </>
  );
}
