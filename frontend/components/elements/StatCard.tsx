
interface StatCardProps {
  label: string
  amount: string
  change: string
  trend: "up" | "down" | "neutral"
  icon: React.ReactNode
}
export default function StatCard({ label, amount, change, trend, icon }: StatCardProps) {
  const trendColor = trend === "up" ? "text-emerald-400" : trend === "down" ? "text-red-400" : "text-slate-400"

  return (
    <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm hover:border-slate-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
      <div className="flex items-start justify-between mb-4">
        <p className="text-slate-400 text-sm font-medium">{label}</p>
        <div className="text-slate-500">{icon}</div>
      </div>
      <h3 className="text-3xl font-bold text-white mb-2">{amount}</h3>
      {/* <p className={`text-xs font-semibold ${trendColor}`}>{change} from last month</p> */}
    </div>
  )
}