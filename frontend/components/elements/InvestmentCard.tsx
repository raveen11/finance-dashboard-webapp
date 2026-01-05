
interface InvestmentCardProps {
  icon: string
  label: string
  amount: string
  color: string
}

export default function InvestmentCard({ icon, label, amount, color }: InvestmentCardProps) {
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
