import { NavLink } from "react-router-dom";
import { Home, LayoutDashboard, Clock3, Sparkles, Database } from "lucide-react";
import Logo from "./Logo";

const links = [
  ["/", "Home", Home],
  ["/dashboard", "Dashboard", LayoutDashboard],
  ["/timeline", "Timeline", Clock3],
  ["/insights", "Insights", Sparkles],
  ["/explorer", "Data Explorer", Database],
];

export default function Sidebar() {
  return (
    <aside className="fixed left-3 top-3 z-40 hidden h-[calc(100vh-24px)] w-52 flex-col rounded-2xl border border-white/10 bg-[#081018]/90 p-4 backdrop-blur-xl lg:flex">
      <Logo />
      <nav className="mt-10 space-y-1">
        {links.map(([to, label, Icon]) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
                isActive ? "bg-lime/10 text-lime" : "text-slate-400 hover:bg-white/5 hover:text-white"
              }`
            }
          >
            <Icon size={16} />
            {label}
          </NavLink>
        ))}
      </nav>
      <div className="mt-auto rounded-xl border border-lime/10 bg-lime/5 p-3 text-xs text-slate-400">
        <p className="font-medium text-lime">Your data, your story.</p>
        <p className="mt-1">All insights are generated locally from the supplied datasets.</p>
      </div>
    </aside>
  );
}
