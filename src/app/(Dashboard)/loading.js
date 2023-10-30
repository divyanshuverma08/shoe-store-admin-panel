import React from "react";
import Loader from "@/components/loader/loader";

export default function Loading() {
  return (
    <div style={{ width: "min-content", margin: "50px auto" }}>
      <Loader width="200" h color="#000" />
    </div>
  );
}
