"use client"

import type React from "react"

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { TrendingUp, ArrowUpRight, ArrowDownLeft, MoreHorizontal } from "lucide-react"

const chartData = [
  { month: "Jan", value: 2400 },
  { month: "Feb", value: 3200 },
  { month: "Mar", value: 2800 },
  { month: "Apr", value: 3900 },
  { month: "May", value: 4200 },
  { month: "Jun", value: 5100 },
]

const investmentData = [
  { name: "Personal Loan", value: 1200, color: "#8B5CF6" },
  { name: "Trading", value: 800, color: "#06B6D4" },
  { name: "Real Estate", value: 5000, color: "#10B981" },
  { name: "Others", value: 300, color: "#F59E0B" },
]

const transactions = [
  {
    id: "1",
    type: "Deposit",
    amount: 10000,
    person: "Rabin Neupane",
    note: "this is the 4th transaction",
    date: "1/4/2026, 1:45:52 AM",
  },
  {
    id: "2",
    type: "Deposit",
    amount: 10000,
    person: "Rabin Neupane",
    note: "this is the 3rd transaction",
    date: "1/4/2026, 1:40:22 AM",
  },
  {
    id: "3",
    type: "Deposit",
    amount: 10000,
    person: "Rabin Neupane",
    note: "this is the 2nd transaction",
    date: "1/4/2026, 1:38:48 AM",
  },
  {
    id: "4",
    type: "Deposit",
    amount: 20000,
    person: "Rabin Neupane",
    note: "this is the 1st transaction",
    date: "1/4/2026, 1:32:50 AM",
  },
]

export default function FullDashboard() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">Finance Dashboard</h1>
              <p className="text-slate-400 text-sm mt-1">Welcome back, manage your finances</p>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6">+ Add Member</button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            label="Total Deposited"
            amount="₹ 50,000"
            change="+12.5%"
            trend="up"
            icon={<TrendingUp className="text-emerald-400" />}
          />
          <StatCard
            label="Total Withdrawn"
            amount="₹ 0"
            change="0%"
            trend="neutral"
            icon={<ArrowDownLeft className="text-slate-500" />}
          />
          <StatCard
            label="Total in Account"
            amount="₹ 50,000"
            change="+5.2%"
            trend="up"
            icon={<TrendingUp className="text-blue-400" />}
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Balance Chart */}
          <div className="lg:col-span-2 bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm hover:border-slate-600/50 transition-colors">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-white">Balance Over Time</h2>
              <button className="text-slate-400 hover:text-slate-300">
                <MoreHorizontal size={20} />
              </button>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1e293b",
                    border: "1px solid #475569",
                    borderRadius: "8px",
                  }}
                  labelStyle={{ color: "#e2e8f0" }}
                />
                <Area type="monotone" dataKey="value" stroke="#3B82F6" fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Investment Breakdown */}
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm hover:border-slate-600/50 transition-colors">
            <h2 className="text-lg font-semibold text-white mb-6">Investment Breakdown</h2>
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1e293b",
                    border: "1px solid #475569",
                    borderRadius: "8px",
                  }}
                  labelStyle={{ color: "#e2e8f0" }}
                />
                <Pie
                  data={investmentData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {investmentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-3 mt-6">
              {investmentData.map((item) => (
                <div key={item.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-slate-300">{item.name}</span>
                  </div>
                  <span className="text-white font-semibold">₹ {item.value.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Investments */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-white">Investments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <InvestmentCard icon="💼" label="Personal Loan" amount="₹ 1200" color="from-purple-600 to-purple-700" />
            <InvestmentCard icon="📈" label="Trading" amount="₹ 800" color="from-cyan-600 to-cyan-700" />
            <InvestmentCard
              icon="🏠"
              label="Real State Investment"
              amount="₹ 5000"
              color="from-emerald-600 to-emerald-700"
            />
            <InvestmentCard icon="⋯" label="Others" amount="₹ 300" color="from-amber-600 to-amber-700" />
          </div>
        </div>

        {/* Transactions Table */}
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm overflow-hidden">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-white">Transactions</h2>
            <button className="text-slate-400 hover:text-slate-300">
              <MoreHorizontal size={20} />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-3 px-4 text-slate-400 font-medium">ID</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-medium">Type</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-medium">Amount</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-medium">Person</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-medium">Notes</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-medium">Created At</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-medium">Updated At</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx, idx) => (
                  <tr key={tx.id} className="border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors">
                    <td className="py-4 px-4 text-slate-300 font-mono text-xs truncate max-w-[150px]">{tx.id}</td>
                    <td className="py-4 px-4">
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-medium">
                        <ArrowUpRight size={14} />
                        {tx.type}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-white font-semibold">₹ {tx.amount.toLocaleString()}</td>
                    <td className="py-4 px-4 text-slate-300">{tx.person}</td>
                    <td className="py-4 px-4 text-slate-400 text-xs">{tx.note}</td>
                    <td className="py-4 px-4 text-slate-400 text-xs">{tx.date}</td>
                    <td className="py-4 px-4 text-slate-400 text-xs">{tx.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  )
}

interface StatCardProps {
  label: string
  amount: string
  change: string
  trend: "up" | "down" | "neutral"
  icon: React.ReactNode
}

function StatCard({ label, amount, change, trend, icon }: StatCardProps) {
  const trendColor = trend === "up" ? "text-emerald-400" : trend === "down" ? "text-red-400" : "text-slate-400"

  return (
    <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm hover:border-slate-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
      <div className="flex items-start justify-between mb-4">
        <p className="text-slate-400 text-sm font-medium">{label}</p>
        <div className="text-slate-500">{icon}</div>
      </div>
      <h3 className="text-3xl font-bold text-white mb-2">{amount}</h3>
      <p className={`text-xs font-semibold ${trendColor}`}>{change} from last month</p>
    </div>
  )
}

interface InvestmentCardProps {
  icon: string
  label: string
  amount: string
  color: string
}

function InvestmentCard({ icon, label, amount, color }: InvestmentCardProps) {
  return (
    <div
      className={`bg-gradient-to-br ${color} rounded-xl p-5 text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer`}
    >
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="font-semibold text-sm">{label}</h3>
      <p className="text-lg font-bold mt-2">{amount}</p>
    </div>
  )
}
