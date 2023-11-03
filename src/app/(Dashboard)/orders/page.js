"use client";

import React, { useEffect, useState } from "react";
import styles from "./orders.module.css";
import TopBar from "@/components/topBar/topBar";
import OrdersTable from "@/components/datatables/ordersTable";
import Pagination from "../products/components/pagination";
import { order } from "@/lib/services/order";
import Loader from "@/components/loader/loader";

export default function Orders() {
  const [data, setData] = useState(null);
  const [metadata, setMetadata] = useState(null);

  const [page, setPage] = useState(1);

  useEffect(() => {
    getOrders({ page: page });
  }, [page]);

  async function getOrders(params) {
    const query = new URLSearchParams({ ...params });

    try {
      const response = await order.getOrders({
        query,
        auth: true,
      });

      if (response) {
        setData(response.data?.data);
        setMetadata(response.data.metadata);
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
    <div className={styles.orders}>
      <TopBar page={"Order List"} pageList={["Home", "Order List"]} />
      {data && metadata ? (
        <>
          <OrdersTable data={data} title={"Orders"} />
          <div className={styles.bottom}>
            <Pagination
              url={"orders"}
              currentPage={page}
              hasNext={metadata?.hasNextPage}
              hasPrev={metadata?.hasPreviousPage}
              totalPages={metadata?.totalPages}
              handleNext={handleNext}
              handlePrev={handlePrev}
              handleToNumber={handleToNumber}
            />
          </div>
        </>
      ) : (
        <div style={{ width: "min-content", margin: "50px auto" }}>
          <Loader width="200" h color="#000" />
        </div>
      )}
    </div>
  );
}
