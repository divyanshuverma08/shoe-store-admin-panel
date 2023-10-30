"use client"

import React from "react";
import Image from "next/image";
import styles from "./bestSeller.module.css";
import { useRouter } from "next/navigation";

export default function BestSeller({ data }) {
  const router = useRouter();

  return (
    <div className={styles.bestSeller}>
      <div className={styles.header}>
        <p className={styles.title}>Best Sellers</p>
      </div>
      <div className={styles.container}>
        {data &&
          data.map((item) => (
            <div key={item._id} className={styles.box} onClick={()=>router.push(`/products/${item._id}`)}>
              <div className={styles.productDesc}>
                <Image
                  src={item.images[0].imageUrl}
                  width={64}
                  height={64}
                  alt="product"
                />
                <div className={styles.productInfo}>
                  <p className={styles.productTitle}>{item.model?.substring(0,20)}</p>
                  <p className={styles.productPrice}>₹{item.price}</p>
                </div>
              </div>
              <div className={styles.details}>
                <p className={styles.price}>₹{item.price}</p>
                <p className={styles.sales}>{item.totalSold} sales</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
