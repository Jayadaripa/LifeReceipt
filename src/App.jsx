import { Routes, Route } from "react-router-dom";

import MobileNav from "./components/MobileNav";

import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import ReceiptPage from "./pages/ReceiptPage";
import Timeline from "./pages/Timeline";
import Insights from "./pages/Insights";
import DataExplorer from "./pages/DataExplorer";
import Connections from "./pages/Connections";

export default function App() {
  return (
    <>
      <Routes>
        {/* Landing */}
        <Route path="/" element={<Landing />} />

        {/* Main pages */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/connections" element={<Connections />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/explorer" element={<DataExplorer />} />
        <Route path="/receipt" element={<ReceiptPage />} />
      </Routes>

      <MobileNav />
    </>
  );
}