import { Icons } from "@/components/icons";
import { NavItem, SidebarNavItem } from "@/types";

export type User = {
  id: number;
  name: string;
  company: string;
  role: string;
  verified: boolean;
  status: string;
};

export type Swap = {
  token0: any,
  token1: any,
  token0Price: number,
  token1Price: number,
  totalValueLockedUSD: number,
  txCount: number,
  liquidity: number,
  liquidityProviderCount: number
}

export const users: User[] = [
  {
    id: 1,
    name: "Candice Schiner",
    company: "Dell",
    role: "Frontend Developer",
    verified: false,
    status: "Active",
  },
  {
    id: 2,
    name: "John Doe",
    company: "TechCorp",
    role: "Backend Developer",
    verified: true,
    status: "Active",
  },
  {
    id: 3,
    name: "Alice Johnson",
    company: "WebTech",
    role: "UI Designer",
    verified: true,
    status: "Active",
  },
  {
    id: 4,
    name: "David Smith",
    company: "Innovate Inc.",
    role: "Fullstack Developer",
    verified: false,
    status: "Inactive",
  },
];


export const navItems: NavItem[] = [
  // {
  //   title: "All",
  //   href: "/dashboard",
  //   label: "Dashboard",
  // },
  {
    title: "Uniswap",
    href: "/dashboard/uniswap",
    label: "Uniswap",
  },
  {
    title: "PancakeSwap",
    href: "/dashboard/pancakeswap",
    label: "Pancakeswap",
  },
];
