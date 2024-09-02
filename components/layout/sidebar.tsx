"use client";
import { DashboardNav } from "@/components/dashboard-nav";
import { navItems } from "@/constants/data";
import { cn } from "@/lib/utils";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";


export default function Sidebar() {
  return (
    <nav className={cn(`relative hidden h-screen border-r pt-16 lg:block w-72`)}>
      <div className="flex flex-col justify-between h-full">
        {/* Top section */}
        <div className="px-3 py-2">
          <div className="space-y-1">
            <ConnectButton accountStatus="address" chainStatus="icon" showBalance={false}/>
          </div>
        </div>

        {/* Center section */}
        <div className="flex-grow flex flex-col justify-center"> {/* Center the content vertically */}
          <div className="px-3 flex justify-center">
            <h2 className="text-xl font-semibold tracking-tight">
              Dex Dashboard
            </h2>            
          </div>
        </div>

        {/* Bottom section */}
        <div className="px-3 py-2">
          <div className="flex justify-center items-center mb-10">
            <Button onClick={() => signOut()}>LogOut</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
