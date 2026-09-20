import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, LineChart, Line } from "recharts";

export default function ChartCard({ title, data, keys = [], type = "area" }) {
  return (
    <div className="glass rounded-2xl p-4">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold">{title}</h3>
        <span className="text-[10px] text-slate-600">2013–2024</span>
      </div>
      <div className="h-56">
        <ResponsiveContainer width="100%" height="100%">
          {type === "line" ? (
            <LineChart data={data}>
              <XAxis dataKey="year" tick={{ fill: "#71808e", fontSize: 10 }} axisLine={false} tickLine={false}/>
              <YAxis hide />
              <Tooltip contentStyle={{background:"#0b1219",border:"1px solid #ffffff12",borderRadius:12,fontSize:11}} />
              {keys.map((key, i) => <Line key={key} type="monotone" dataKey={key} stroke={["#b7ff4a","#35e0b3","#9b8cff"][i]} strokeWidth={2} dot={false}/>)}
            </LineChart>
          ) : (
            <AreaChart data={data}>
              <defs><linearGradient id="lifeFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#b7ff4a" stopOpacity=".28"/><stop offset="100%" stopColor="#b7ff4a" stopOpacity="0"/></linearGradient></defs>
              <XAxis dataKey="year" tick={{ fill: "#71808e", fontSize: 10 }} axisLine={false} tickLine={false}/>
              <YAxis hide />
              <Tooltip contentStyle={{background:"#0b1219",border:"1px solid #ffffff12",borderRadius:12,fontSize:11}} />
              <Area type="monotone" dataKey={keys[0]} stroke="#b7ff4a" fill="url(#lifeFill)" strokeWidth={2}/>
            </AreaChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
}
