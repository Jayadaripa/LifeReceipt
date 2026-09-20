import { NavLink } from "react-router-dom";
import { Home, LayoutDashboard, Clock3, Sparkles, Database } from "lucide-react";
const links = [["/",Home],["/dashboard",LayoutDashboard],["/timeline",Clock3],["/insights",Sparkles],["/explorer",Database]];
export default function MobileNav(){return <nav className="fixed bottom-3 left-3 right-3 z-50 flex justify-around rounded-2xl border border-white/10 bg-[#0b1219]/95 p-2 backdrop-blur-xl lg:hidden">{links.map(([to,I])=><NavLink key={to} to={to} className={({isActive})=>`grid h-10 w-10 place-items-center rounded-xl ${isActive?"bg-lime text-ink":"text-slate-500"}`}><I size={17}/></NavLink>)}</nav>}
