import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function PageShell({ children, title }) {
  return (
    <div className="min-h-screen bg-ink grid-bg">
      <Sidebar />
      <Topbar title={title} />
      <main className="lg:ml-56 px-4 py-5 sm:px-6 lg:px-8">{children}</main>
    </div>
  );
}
