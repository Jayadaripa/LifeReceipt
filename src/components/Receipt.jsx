import { Music2, CreditCard, House } from "lucide-react";
import { money, number, hours } from "../utils/formatters";

export default function Receipt({ data }) {
  return (
    <div id="print-receipt" className="receipt-paper mx-auto w-full max-w-md px-7 py-8 shadow-2xl">
      <div className="text-center">
        <p className="text-2xl font-black tracking-tight">LIFE RECEIPT</p>
        <p className="mt-1 text-xs">Your life, in numbers.</p>
        <div className="mx-auto mt-4 w-24 border-y border-black/20 py-1 text-xs">2013 → 2024</div>
      </div>
      <ReceiptSection icon={Music2} title="MUSIC">
        <Row label="Listening moments" value={number(data.music.events)} />
        <Row label="Listening time" value={hours(data.music.hours)} />
        <Row label="Top artist" value={data.music.topArtists[0]?.name} />
        <Row label="Top track" value={data.music.topTracks[0]?.name} />
      </ReceiptSection>
      <ReceiptSection icon={CreditCard} title="SPENDING">
        <Row label="Transactions" value={number(data.spending.transactions)} />
        <Row label="Total amount" value={money(data.spending.total)} />
        <Row label="Top category" value={data.spending.categories[0]?.name} />
      </ReceiptSection>
      <ReceiptSection icon={House} title="DAILY LIFE">
        <Row label="Daily transactions" value={number(data.daily.transactions)} />
        <Row label="Expense amount" value={money(data.daily.expenseTotal)} />
        <Row label="Most common category" value={data.daily.categories[0]?.name} />
      </ReceiptSection>
      <div className="mt-8 border-t-2 border-dashed border-black/25 pt-5 text-center">
        <p className="text-[10px] uppercase tracking-[.2em]">Total moments</p>
        <p className="mt-1 text-3xl font-black">{number(data.music.events + data.spending.transactions + data.daily.transactions)}</p>
        <p className="mt-2 text-xs">That's your life in data.</p>
      </div>
    </div>
  );
}
function ReceiptSection({ icon: Icon, title, children }) {
  return <section className="mt-7"><h3 className="flex items-center gap-2 text-xs font-black tracking-wider"><Icon size={14}/>{title}</h3><div className="mt-3 space-y-2">{children}</div></section>;
}
function Row({ label, value }) {
  return <div className="flex justify-between gap-4 text-[11px]"><span className="max-w-[58%] text-black/60">{label}</span><span className="max-w-[42%] text-right font-semibold">{value}</span></div>;
}
