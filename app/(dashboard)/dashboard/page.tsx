'use client'
import { columns } from "@/components/tables/uniswap-tables/columns";
import { UniswapTable } from "@/components/tables/uniswap-tables/uniswap-table";
import React, { useState, useEffect } from "react";

export default function Page() { // Corrected function name to start with uppercase letter

  const [tabledata, setTableData] = useState<any>([]);
  const [pageNo, setPageNo] = useState(1);
  const [count, setCount] = useState<any>();

  async function onPage() {
    try {
      const Response = await fetch("/api/table/uniswap", {
        method: "POST",
        body: JSON.stringify({ pageNo: pageNo }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!Response.ok) {
        return 0;
      }
      const { data, count } = await Response.json();
      let num = Math.ceil(count / 50);
      setCount(num);
      setTableData(data);
    } catch (e) {
      throw e;
    }
  }

  useEffect(() => {
    onPage();
  }, [pageNo]);

  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <UniswapTable
          columns={columns}
          data={tabledata}
          pageNo={setPageNo} // Pass pageNo directly
          totalUsers={0}
          pageCount={count} />
      </div>
    </>
  );
}
