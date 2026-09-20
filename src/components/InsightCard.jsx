export default function InsightCard({ icon: Icon, label, title, value }) {
  return (
    <div className="glass rounded-2xl p-4">
      <div className="flex items-center gap-3">
        <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 text-lime"><Icon size={17}/></div>
        <span className="text-xs text-slate-500">{label}</span>
      </div>
      <p className="mt-4 text-sm font-medium">{title}</p>
      <p className="mt-1 text-xs text-slate-500">{value}</p>
    </div>
  );
}
