import ThemeToggle from "@/components/layout/ThemeToggle/theme-toggle";
import { cn } from "@/lib/utils";
import { MobileSidebar } from "./mobile-sidebar";
import { UserNav } from "./user-nav";
import Link from "next/link";
import { DashboardNav } from "../dashboard-nav";
import { navItems } from "@/constants/data";

export default function Header() {
  return (
    <div className="top-0 left-0 right-0 supports-backdrop-blur:bg-background/60 border-b bg-background/95 backdrop-blur z-20">
      <nav className="h-14 flex items-center justify-between px-4">
        <div className="flex items-center gap-2 justify-between">
          <DashboardNav items={navItems}/>
        </div>
        <ThemeToggle />
      </nav>
    </div>
  );
}
