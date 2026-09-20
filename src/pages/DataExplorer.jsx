import { useMemo, useState } from "react";
import { Search, Music2, CreditCard, House } from "lucide-react";
import PageShell from "../components/PageShell";
import data from "../data/lifeData.json";
import { number, money } from "../utils/formatters";

export default function DataExplorer(){
 const [tab,setTab]=useState("Music"); const [query,setQuery]=useState("");
 const configs={Music:{items:data.music.topArtists, icon:Music2, title:"Top Artists", second:data.music.topTracks, secondTitle:"Top Tracks"},Spending:{items:data.spending.categories,icon:CreditCard,title:"Categories",second:[],secondTitle:""}, "Daily Life":{items:data.daily.categories,icon:House,title:"Categories",second:[],secondTitle:""}};
 const c=configs[tab]; const filtered=useMemo(()=>c.items.filter(x=>x.name.toLowerCase().includes(query.toLowerCase())),[c.items,query]);
 return <PageShell title="Data Explorer"><div className="mx-auto max-w-7xl">
  <div className="mb-7 flex flex-wrap items-end justify-between gap-4"><div><p className="text-xs text-slate-500">Explore your data in detail.</p><h1 className="mt-1 text-2xl font-semibold">Data Explorer</h1></div><span className="rounded-xl border border-white/10 px-3 py-2 text-xs text-slate-500">2013 – 2024</span></div>
  <div className="flex gap-2">{Object.keys(configs).map(t=><button key={t} onClick={()=>{setTab(t);setQuery("")}} className={`rounded-xl px-4 py-2 text-xs ${tab===t?"bg-lime text-ink font-bold":"border border-white/10 text-slate-400"}`}>{t}</button>)}</div>
  <div className="mt-4 flex h-10 max-w-xl items-center gap-2 rounded-xl border border-white/10 bg-white/[.02] px-3"><Search size={15} className="text-slate-600"/><input value={query} onChange={e=>setQuery(e.target.value)} className="w-full bg-transparent text-xs outline-none placeholder:text-slate-600" placeholder="Search artist, category..."/></div>
  <div className="mt-5 grid gap-4 lg:grid-cols-2">
   <ListCard title={c.title} items={filtered} icon={c.icon}/>
   {tab==="Music" ? <ListCard title={c.secondTitle} items={c.second} icon={Music2}/> : <CategorySummary title="Dataset summary" tab={tab}/>}
  </div>
 </div></PageShell>
}
function ListCard({title,items,icon:Icon}){return <div className="glass rounded-2xl p-5"><h2 className="text-sm font-semibold">{title}</h2><div className="mt-5 space-y-4">{items.map((x,i)=><div key={x.name} className="flex items-center gap-3"><div className="grid h-8 w-8 place-items-center rounded-lg bg-white/5 text-lime"><Icon size={14}/></div><span className="w-32 truncate text-xs">{x.name}</span><div className="h-2 flex-1 overflow-hidden rounded-full bg-white/5"><div className="h-full rounded-full bg-lime" style={{width:`${Math.max(6,Math.round((x.count/items[0].count)*100))}%`}}/></div><span className="text-[10px] text-slate-500">{number(x.count)}</span></div>)}</div></div>}
function CategorySummary({title,tab}){const d=tab==="Spending"?data.spending:data.daily;return <div className="glass rounded-2xl p-5"><h2 className="text-sm font-semibold">{title}</h2><div className="mt-5 grid grid-cols-2 gap-3"><div className="rounded-xl bg-white/[.03] p-4"><p className="text-[10px] text-slate-500">Transactions</p><p className="mt-1 text-xl font-semibold">{number(d.transactions)}</p></div><div className="rounded-xl bg-white/[.03] p-4"><p className="text-[10px] text-slate-500">Amount</p><p className="mt-1 text-xl font-semibold">{money(tab==="Spending"?d.total:d.expenseTotal)}</p></div></div><p className="mt-5 text-xs leading-6 text-slate-500">This view uses sanitized aggregates from the supplied dataset. Sensitive fields such as card numbers, names and addresses are intentionally excluded.</p></div>}
