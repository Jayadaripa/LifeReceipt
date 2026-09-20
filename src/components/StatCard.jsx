export default function StatCard({ icon: Icon, label, value, sub, accent = "lime" }) {
  return (
    <div className="glass rounded-2xl p-4 shadow-glow">
      <div className="flex items-start justify-between">
        <div className={`grid h-9 w-9 place-items-center rounded-xl ${accent === "lime" ? "bg-lime/10 text-lime" : accent === "mint" ? "bg-mint/10 text-mint" : "bg-violet-400/10 text-violet-300"}`}>
          <Icon size={17} />
        </div>
        <span className="text-[10px] uppercase tracking-[.18em] text-slate-600">From data</span>
      </div>
      <p className="mt-5 text-xs text-slate-400">{label}</p>
      <p className="mt-1 text-2xl font-semibold tracking-tight">{value}</p>
      <p className="mt-1 text-xs text-slate-500">{sub}</p>
    </div>
  );
}
