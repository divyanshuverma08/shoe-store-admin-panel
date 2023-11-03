"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./sidebar.module.css";
import { useRouter } from "next/navigation";

export default function Sidebar({ mobile, onClose, open }) {
  const router = useRouter();

  const [route, setRoute] = useState("");

  useEffect(() => {
    const path = window.location.pathname;
    setRoute(path.split("/").at(-1));
  }, []);

  const handleNavigation = (path) => {
    router.push(path);
    setRoute(path.split("/").at(-1));
    if(mobile){
      onClose();
    }
  };

  return (
    <div className={`${styles.sidebar} ${mobile && styles.mobile} ${open && styles.active}`}>
      <div className={styles.logoContainer}>
        {mobile && <div className={styles.closeButton} onClick={()=>onClose()}>
          <Image src="/close.svg" alt="close" width={35} height={35} />
        </div>}
        <div className={styles.logo}>
          <Image src="/logo.svg" fill alt="logo" />
        </div>
      </div>
      <div className={styles.mainContainer}>
        <ul className={styles.tabs}>
          <li
            className={`${styles.tab} ${route === "" && styles.active}`}
            onClick={() => handleNavigation("/")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M13.4551 5.45383L13.4538 5.45506C13.4247 5.48427 13.396 5.5 13.3333 5.5H9.33333C9.27064 5.5 9.24194 5.48427 9.21284 5.45506L9.21161 5.45383C9.1824 5.42473 9.16667 5.39602 9.16667 5.33333V2.66667C9.16667 2.60396 9.18244 2.57467 9.21222 2.54489C9.2412 2.51591 9.2701 2.5 9.33333 2.5H13.3333C13.3966 2.5 13.4255 2.51591 13.4544 2.54489C13.4842 2.57467 13.5 2.60396 13.5 2.66667V5.33333C13.5 5.39602 13.4843 5.42473 13.4551 5.45383ZM2.54617 8.12173L2.54494 8.1205C2.51573 8.09139 2.5 8.06269 2.5 8V2.66667C2.5 2.60396 2.51577 2.57467 2.54555 2.54489C2.57453 2.51591 2.60343 2.5 2.66667 2.5H6.66667C6.72948 2.5 6.75899 2.51572 6.78845 2.54489C6.81761 2.57434 6.83333 2.60385 6.83333 2.66667V8C6.83333 8.06324 6.81743 8.09213 6.78845 8.12111C6.75866 8.1509 6.72937 8.16667 6.66667 8.16667H2.66667C2.60398 8.16667 2.57527 8.15094 2.54617 8.12173ZM9.21284 13.4551L9.21161 13.4538C9.1824 13.4247 9.16667 13.396 9.16667 13.3333V8C9.16667 7.93729 9.18244 7.908 9.21222 7.87822C9.2412 7.84924 9.2701 7.83333 9.33333 7.83333H13.3333C13.3966 7.83333 13.4255 7.84924 13.4544 7.87822C13.4842 7.908 13.5 7.93729 13.5 8V13.3333C13.5 13.396 13.4843 13.4247 13.4551 13.4538L13.4538 13.4551C13.4247 13.4843 13.396 13.5 13.3333 13.5H9.33333C9.27064 13.5 9.24194 13.4843 9.21284 13.4551ZM2.54617 13.4551L2.54494 13.4538C2.51573 13.4247 2.5 13.396 2.5 13.3333V10.6667C2.5 10.604 2.51577 10.5747 2.54555 10.5449C2.57453 10.5159 2.60343 10.5 2.66667 10.5H6.66667C6.72947 10.5 6.75898 10.5157 6.78842 10.5449C6.8176 10.5743 6.83333 10.6038 6.83333 10.6667V13.3333C6.83333 13.3966 6.81743 13.4255 6.78845 13.4544C6.75866 13.4842 6.72937 13.5 6.66667 13.5H2.66667C2.60398 13.5 2.57527 13.4843 2.54617 13.4551ZM2.83333 7.33333V7.83333H3.33333H6H6.5V7.33333V3.33333V2.83333H6H3.33333H2.83333V3.33333V7.33333ZM9.5 12.6667V13.1667H10H12.6667H13.1667V12.6667V8.66667V8.16667H12.6667H10H9.5V8.66667V12.6667ZM9.5 4.66667V5.16667H10H12.6667H13.1667V4.66667V3.33333V2.83333H12.6667H10H9.5V3.33333V4.66667ZM2.83333 12.6667V13.1667H3.33333H6H6.5V12.6667V11.3333V10.8333H6H3.33333H2.83333V11.3333V12.6667Z"
                fill="black"
                stroke="balck"
              />
            </svg>
            <p>Dashboard</p>
          </li>
          <li
            className={`${styles.tab} ${route === "products" && styles.active}`}
            onClick={() => handleNavigation("/products")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M13.0978 5.5H2.90219C2.40392 5.5 2 5.90392 2 6.40219V12.5978C2 13.0961 2.40392 13.5 2.90219 13.5H13.0978C13.5961 13.5 14 13.0961 14 12.5978V6.40219C14 5.90392 13.5961 5.5 13.0978 5.5Z"
                stroke="#232321"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path d="M4.5 2.5H11.5ZM3.5 4H12.5Z" fill="#232321" />
              <path
                d="M4.5 2.5H11.5M3.5 4H12.5"
                stroke="#232321"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
            </svg>
            <p>All Products</p>
          </li>
          <li
            className={`${styles.tab} ${route === "orders" && styles.active}`}
            onClick={() => handleNavigation("/orders")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M19.5 10.3711V19.5C19.5 20.0967 19.2629 20.669 18.841 21.091C18.419 21.5129 17.8467 21.75 17.25 21.75H6.75C6.15326 21.75 5.58097 21.5129 5.15901 21.091C4.73705 20.669 4.5 20.0967 4.5 19.5V4.5C4.5 3.90326 4.73705 3.33097 5.15901 2.90901C5.58097 2.48705 6.15326 2.25 6.75 2.25H11.3789C11.7766 2.25006 12.158 2.40804 12.4392 2.68922L19.0608 9.31078C19.342 9.59202 19.4999 9.97341 19.5 10.3711Z"
                stroke="#232321"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M12 2.625V8.25C12 8.64782 12.158 9.02936 12.4393 9.31066C12.7206 9.59196 13.1022 9.75 13.5 9.75H19.125M8.25 13.5H15.75M8.25 17.25H15.75"
                stroke="#232321"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>Order List</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
