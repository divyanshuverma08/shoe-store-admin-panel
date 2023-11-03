"use client";

import React, { useState, useEffect } from "react";
import styles from "./products.module.css";
import TopBar from "@/components/topBar/topBar";
import ProductCard from "./components/productCard";
import Pagination from "./components/pagination";
import { products } from "@/lib/services/products";
import Link from "next/link";
import Loader from "@/components/loader/loader";

export default function Products() {
  const [data, setData] = useState(null);
  const [metadata, setMetadata] = useState(null);

  const [page, setPage] = useState(1);

  useEffect(() => {
    getProducts({ page: page });
  }, [page]);

  async function getProducts(params) {
    const query = new URLSearchParams({ ...params });

    try {
      const response = await products.getProductsWithFiltersAndPagination({
        query,
        auth: true,
      });

      if (response) {
        setData(response.data);
        setMetadata(response.metadata);
      }
    } catch (error) {
      if (error.response?.data) {
        console.log(error.response.data);
      }
    }
  }

  const handleNext = () => {
    setPage(page + 1);
  };

  const handlePrev = () => {
    setPage(page - 1);
  };

  const handleToNumber = (pageNumber) => {
    setPage(pageNumber);
  };

  return (
    <div className={styles.products}>
      <TopBar
        page={"All Products"}
        pageList={["Home", "All Products"]}
        component={
          <Link href="/products/new" className={styles.addButton}>
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
          </Link>
        }
      />
      {data && metadata ? (
        <>
          <div className={styles.productList}>
            {data?.map((product, i) => (
              <ProductCard
                key={product._id}
                slug={product._id}
                model={product.model}
                category={product.category.name}
                price={product.price}
                stock={product.stock}
                totalSold={product.totalSold}
                image={product.images[0].imageUrl}
              />
            ))}
          </div>
          <Pagination
            url={"products"}
            currentPage={page}
            hasNext={metadata?.hasNextPage}
            hasPrev={metadata?.hasPreviousPage}
            totalPages={metadata?.totalPages}
            handleNext={handleNext}
            handlePrev={handlePrev}
            handleToNumber={handleToNumber}
          />
        </>
      ) : (
        <div style={{ width: "min-content", margin: "50px auto" }}>
          <Loader width="200" h color="#000" />
        </div>
      )}
    </div>
  );
}
