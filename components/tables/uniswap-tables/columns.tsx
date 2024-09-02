"use client";
import { Swap } from "@/constants/data";
import { ColumnDef, CellContext  } from "@tanstack/react-table";
import { Cell } from "recharts";

function formatNumber(number: number) {
  if (number >= 1e12) {
      return (number / 1e12).toFixed(2) + 'T';
  } else if (number >= 1e9) {
      return (number / 1e9).toFixed(2) + 'B';
  } else if (number >= 1e6) {
      return (number / 1e6).toFixed(2) + 'M';
  } else if (number >= 1e3) {
      return (number / 1e3).toFixed(2) + 'K';
  } else {
      return (number/1).toFixed(2);
  }
}

export const columns: ColumnDef<Swap>[] = [
  {
    accessorKey:'pair',
    header: "Pair",
    cell: (context: CellContext<Swap, unknown>) => {
      const rowData = context.row.original;
      return rowData.token0.symbol + "/" + rowData.token1.symbol;
    },
  },
  {
    header: "Price USD",
    cell: (context: CellContext<Swap, unknown>) => {
      const rowData = context.row.original;
      return formatNumber(rowData.token0Price);
    }
  },
  {
    accessorKey: "txCount",
    header: "TXNS",
  },
  {
    header: "Volume",
    cell: (context: CellContext<Swap, unknown>) => {
      const rowData = context.row.original;
      return formatNumber(rowData.totalValueLockedUSD);
    }
  },
  {
    accessorKey:"liquidityProviderCount",
    header: "Maker"
  },
  {
    header: "Liquidity",    
    cell: (context: CellContext<Swap, unknown>) => {
      const rowData = context.row.original;
      return formatNumber(rowData.liquidity);
    }
  },
  {
    header: "FDV",
    cell: (context: CellContext<Swap, unknown>) => {
      const rowData = context.row.original;
      const fdv = rowData.totalValueLockedUSD / rowData.txCount;
      return formatNumber(fdv);
    },
  },
];
