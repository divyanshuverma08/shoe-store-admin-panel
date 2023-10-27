import React from "react";
import Image from "next/image";
import styles from "./bestSeller.module.css";

export default function BestSeller() {
  return (
    <div className={styles.bestSeller}>
      <div className={styles.header}>
        <p className={styles.title}>Best Sellers</p>
      </div>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.productDesc}>
            <Image src="/product.png" width={64} height={64} alt="product" />
            <div className={styles.productInfo}>
              <p className={styles.productTitle}>Adidas Ultra boost</p>
              <p className={styles.productPrice}>₹126.500</p>
            </div>
          </div>
          <div className={styles.details}>
            <p className={styles.price}>₹126.500</p>
            <p className={styles.sales}>999 sales</p>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.productDesc}>
            <Image src="/product.png" width={64} height={64} alt="product" />
            <div className={styles.productInfo}>
              <p className={styles.productTitle}>Adidas Ultra boost</p>
              <p className={styles.productPrice}>₹126.500</p>
            </div>
          </div>
          <div className={styles.details}>
            <p className={styles.price}>₹126.500</p>
            <p className={styles.sales}>999 sales</p>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.productDesc}>
            <Image src="/product.png" width={64} height={64} alt="product" />
            <div className={styles.productInfo}>
              <p className={styles.productTitle}>Adidas Ultra boost</p>
              <p className={styles.productPrice}>₹126.500</p>
            </div>
          </div>
          <div className={styles.details}>
            <p className={styles.price}>₹126.500</p>
            <p className={styles.sales}>999 sales</p>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.productDesc}>
            <Image src="/product.png" width={64} height={64} alt="product" />
            <div className={styles.productInfo}>
              <p className={styles.productTitle}>Adidas Ultra boost</p>
              <p className={styles.productPrice}>₹126.500</p>
            </div>
          </div>
          <div className={styles.details}>
            <p className={styles.price}>₹126.500</p>
            <p className={styles.sales}>999 sales</p>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.productDesc}>
            <Image src="/product.png" width={64} height={64} alt="product" />
            <div className={styles.productInfo}>
              <p className={styles.productTitle}>Adidas Ultra boost</p>
              <p className={styles.productPrice}>₹126.500</p>
            </div>
          </div>
          <div className={styles.details}>
            <p className={styles.price}>₹126.500</p>
            <p className={styles.sales}>999 sales</p>
          </div>
        </div>
      </div>
    </div>
  );
}
