"use client";
import { Swap } from "@/constants/data";
import { ColumnDef, CellContext  } from "@tanstack/react-table";

const pairAccessor = (context: CellContext<Swap, unknown>) => {
  const rowData = context.row.original;
  // return `${rowData.baseTokenSymbol}/${rowData.quotoTokenSymbol} ${rowData.baseCurrencyName}`;
};

export const columns: ColumnDef<Swap>[] = [
  {
    accessorKey: "rank",
    header: "#",
  },
  // {
  //   cell: pairAccessor,
  //   header: "Pair",
  // },
  {
    accessorKey: "token0Price",
    header: "Price USD",
  },
  {
    accessorKey: "quotePrice1h",
    header: "1H",
  },
  {
    accessorKey: "quoteChange24h",
    header: "24H",
  },
  {
    accessorKey: "txCount",
    header: "TXNS",
  },
  {
    accessorKey: "totalValueLockedUSD",
    header: "Volume",
  },
  {
    accessorKey: "liquidity", 
    header: "Liquidity",
  },
  {
    accessorKey: "fdv",
    header: "FDV",
  },
];
