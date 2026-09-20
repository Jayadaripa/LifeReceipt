import { Bell, Search } from "lucide-react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

export default function Topbar({ title = "" }) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-white/5 bg-[#060a0f]/85 px-4 backdrop-blur-xl lg:ml-56">
      <div className="lg:hidden"><Logo /></div>
      <div className="hidden text-sm font-medium text-slate-200 md:block">{title}</div>
      <div className="ml-auto flex items-center gap-2">
        <div className="hidden h-9 w-60 items-center gap-2 rounded-xl border border-white/10 bg-white/[.03] px-3 md:flex">
          <Search size={15} className="text-slate-500" />
          <input className="w-full bg-transparent text-xs outline-none placeholder:text-slate-600" placeholder="Search something..." />
        </div>
        <button className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 text-slate-400 hover:text-white"><Bell size={16}/></button>
        <div className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-lime to-emerald-400 text-xs font-bold text-ink">JD</div>
        <Link to="/dashboard" className="rounded-xl bg-lime px-3 py-2 text-xs font-bold text-ink hover:brightness-105">Get Started</Link>
      </div>
    </header>
  );
}
