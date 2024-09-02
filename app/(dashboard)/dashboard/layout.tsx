import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <main className="w-full">
          <Header />
          {children}
        </main>
      </div>
    </>
  );
}
