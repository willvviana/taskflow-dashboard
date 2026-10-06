import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx";
import Header from "../components/Header.jsx";

export default function AppLayout() {
  // On mobile, the sidebar is off-canvas. This state controls it.
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sidebar — fixed on desktop, off-canvas on mobile */}
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Content wrapper — pushed right of the sidebar on desktop */}
      <div className="lg:pl-64 flex flex-col min-h-screen">
        <Header onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {/* <Outlet /> is where each page mounts.
              Changing routes swaps this content — layout stays. */}
          <Outlet />
        </main>

        <footer className="px-6 py-4 text-sm text-slate-500 border-t border-slate-200">
          © 2025 Studio Rivera. All rights reserved.
        </footer>
      </div>

      {/* Mobile overlay when sidebar is open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}
    </div>
  );
}