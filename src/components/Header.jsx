import { useLocation } from "react-router-dom";
import NotificationsDropdown from "./NotificationsDropdown.jsx";

const PAGE_TITLES = {
  "/overview": "Overview",
  "/projects": "Projects",
  "/settings": "Settings",
};

export default function Header({ onMenuClick }) {
  const { pathname } = useLocation();
  const title = PAGE_TITLES[pathname] ?? "Dashboard";

  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 min-w-0">
          <button
            type="button"
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100"
            aria-label="Open navigation"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"/>
            </svg>
          </button>

          <h1 className="text-lg font-semibold text-slate-900 truncate">{title}</h1>
        </div>

        <NotificationsDropdown />
      </div>
    </header>
  );
}