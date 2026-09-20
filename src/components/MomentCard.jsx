import { Music2, CreditCard, House } from "lucide-react";
import { money, shortDate } from "../utils/formatters";

const icons = { Music: Music2, Spending: CreditCard, "Daily Life": House };

export default function MomentCard({ event }) {
  const Icon = icons[event.type] || House;
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[.025] p-3">
      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/5 text-lime"><Icon size={15}/></div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-xs font-medium">{event.title}</p>
        <p className="truncate text-[11px] text-slate-500">{event.subtitle}</p>
      </div>
      <div className="text-right">
        <p className="text-[10px] text-slate-500">{shortDate(event.date)}</p>
        <p className="text-[10px] text-lime">{event.unit === "INR" ? money(event.value) : `${event.value} ${event.unit}`}</p>
      </div>
    </div>
  );
}
