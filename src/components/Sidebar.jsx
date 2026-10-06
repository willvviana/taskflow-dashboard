import { NavLink } from "react-router-dom";
import { currentUser } from "../data/mockData.js";

// Nav items as data. Adding a page = adding one row here.
const NAV_ITEMS = [
  {
    to: "/overview",
    label: "Overview",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M3 3h8v8H3zm10 0h8v5h-8zM3 13h8v8H3zm10 3h8v5h-8z"/>
      </svg>
    ),
  },
  {
    to: "/projects",
    label: "Projects",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M4 4h16v4H4zm0 6h16v10H4z"/>
      </svg>
    ),
  },
  {
    to: "/settings",
    label: "Settings",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm9 4-2-1 2-1-1-3-2 1-2-1V4h-3l-1 2-1-2H8v3L6 8 4 7 3 10l2 1-2 1 1 3 2-1 2 1v3h3l1-2 1 2h3v-3l2-1 2 1z"/>
      </svg>
    ),
  },
];

export default function Sidebar({ open, onClose }) {
  // Slide off-screen on mobile when closed. Always visible on desktop.
  const visibility = open ? "translate-x-0" : "-translate-x-full lg:translate-x-0";

  return (
    <aside
      className={`fixed inset-y-0 left-0 w-64 bg-slate-900 text-slate-300 z-40
                  transform transition-transform duration-200 ${visibility}`}
      aria-label="Primary navigation"
    >
      <div className="flex items-center gap-2 px-6 h-16 border-b border-slate-800">
        <span className="text-indigo-400 text-xl" aria-hidden="true">◐</span>
        <span className="font-bold text-white">TaskFlow</span>
      </div>

      <nav className="p-4 flex flex-col gap-1">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors
               ${isActive
                 ? "bg-indigo-600 text-white"
                 : "text-slate-400 hover:bg-slate-800 hover:text-white"}`
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-indigo-500 grid place-items-center text-white text-sm font-bold">
            {currentUser.initials}
          </div>
          <div className="min-w-0">
            <p className="text-sm font-medium text-white truncate">{currentUser.name}</p>
            <p className="text-xs text-slate-500 truncate">{currentUser.role}</p>
          </div>
        </div>
      </div>
    </aside>
  );
}