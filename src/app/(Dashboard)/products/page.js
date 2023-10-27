import React from "react";
import styles from "./products.module.css";
import TopBar from "@/components/topBar/topBar";
import ProductCard from "./components/productCard";
import Pagination from "./components/pagination";

export default function Products({searchParams}) {

  return (
    <div className={styles.products}>
      <TopBar
        page={"All Products"}
        pageList={["Home", "All Products"]}
        component={
          <button className={styles.addButton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M14 8C14 4.6875 11.3125 2 8 2C4.6875 2 2 4.6875 2 8C2 11.3125 4.6875 14 8 14C11.3125 14 14 11.3125 14 8Z"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
              />
              <path d="M8 5.5V10.5ZM10.5 8H5.5Z" fill="white" />
              <path
                d="M8 5.5V10.5M10.5 8H5.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>ADD NEW PRODUCT</p>
          </button>
        }
      />
      <div className={styles.productList}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <Pagination params={searchParams} />
    </div>
  );
}
