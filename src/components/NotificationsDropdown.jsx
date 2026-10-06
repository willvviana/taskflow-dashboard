import { useState, useRef, useEffect } from "react";
import { notifications } from "../data/mockData.js";

export default function NotificationsDropdown() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  const unreadCount = notifications.filter((n) => n.unread).length;

  // Close when user clicks outside the dropdown
  useEffect(() => {
    if (!open) return;
    function handleClick(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    function handleKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  return (
    <div className="relative" ref={wrapRef}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="relative p-2 rounded-lg hover:bg-slate-100"
        aria-label={`Notifications${unreadCount ? `, ${unreadCount} unread` : ""}`}
        aria-expanded={open}
        aria-haspopup="true"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-slate-700">
          <path d="M12 2a6 6 0 0 0-6 6v4l-2 3v1h16v-1l-2-3V8a6 6 0 0 0-6-6zm0 20a3 3 0 0 0 3-3H9a3 3 0 0 0 3 3z"/>
        </svg>
        {unreadCount > 0 && (
          <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-rose-500 text-white text-[10px] grid place-items-center font-bold">
            {unreadCount}
          </span>
        )}
      </button>

      {open && (
        <div
          className="absolute right-0 mt-2 w-80 max-w-[calc(100vw-2rem)] bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden"
          role="menu"
        >
          <div className="px-4 py-3 border-b border-slate-100 font-semibold text-sm">
            Notifications
          </div>
          <ul className="max-h-80 overflow-y-auto">
            {notifications.map((n) => (
              <li key={n.id} className="border-b border-slate-100 last:border-b-0">
                <a href="#" className="block px-4 py-3 hover:bg-slate-50">
                  <div className="flex items-start gap-3">
                    {n.unread && (
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-indigo-500 shrink-0" aria-hidden="true" />
                    )}
                    <div className="min-w-0">
                      <p className="text-sm text-slate-800">{n.text}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{n.time}</p>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
          <div className="px-4 py-2 border-t border-slate-100 text-center">
            <a href="#" className="text-sm text-indigo-600 hover:underline">View all</a>
          </div>
        </div>
      )}
    </div>
  );
}