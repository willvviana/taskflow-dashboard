import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./layouts/AppLayout.jsx";
import Overview from "./pages/Overview.jsx";
import Projects from "./pages/Projects.jsx";
import Settings from "./pages/Settings.jsx";

export default function App() {
  return (
    <Routes>
      {/* AppLayout renders sidebar + header. The <Outlet /> inside it
          swaps to whichever child route matches. */}
      <Route element={<AppLayout />}>
        <Route index element={<Navigate to="/overview" replace />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Navigate to="/overview" replace />} />
      </Route>
    </Routes>
  );
}