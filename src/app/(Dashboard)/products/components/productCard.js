"use client"

import React from "react";
import Image from "next/image";
import styles from "../products.module.css";
import { useRouter } from "next/navigation";

export default function ProductCard({model,category,price,stock,slug,totalSold,image}) {
  const router = useRouter();

  return (
    <div className={styles.productCardContainer} onClick={()=>router.push(`/products/${slug}`)}>
      <div className={styles.productCard}>
        <div className={styles.productDetails}>
          <Image src={image} alt="product" width={84} height={84} />
          <div className={styles.detailContainer}>
            <div className={styles.containerTop}>
              <p className={styles.title}>{model}</p>
              <p className={styles.category}>{category}</p>
            </div>
            <div className={styles.containerBottom}>₹{price}</div>
          </div>
        </div>
        <div className={styles.productSales}>
          <div className={styles.salesSection}>
            <p className={styles.sectionTitle}>Sales</p>
            <div className={styles.sectionStats}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
              >
                <path
                  d="M3.5 8.125L8 3.625L12.5 8.125M8 4.25V13.375"
                  stroke="#FFA52F"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>{totalSold}</p>
            </div>
          </div>
          <div className={styles.sectionSeparator}></div>
          <div className={styles.salesSection}>
            <p className={styles.sectionTitle}>Remaining Products</p>
            <div className={styles.sectionStats}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="5"
                viewBox="0 0 52 5"
                fill="none"
              >
                <rect y="0.5" width="52" height="4" rx="2" fill="#E7E7E3" />
                <rect y="0.5" width="30" height="4" rx="2" fill="#FFA52F" />
              </svg>
              <p>{stock}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
