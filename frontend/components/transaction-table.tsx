import { Transaction, TransactionsTableProps } from "@/types/transaction";
import { ArrowDownLeft, ArrowUpRight, MoreHorizontal } from "lucide-react";

export default function TransactionsTable({ transactions }: TransactionsTableProps) {
  return (
    //    <div className="overflow-x-auto">
    //   <table className="min-w-full divide-y divide-gray-200 border">
    //     <thead className="bg-gray-50">
    //       <tr>
    //         <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">ID</th>
    //         <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Type</th>
    //         <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Amount</th>
    //         <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Person</th>
    //         <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Notes</th>
    //         <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Created At</th>
    //         <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Updated At</th>
    //       </tr>
    //     </thead>

    //     <tbody className="bg-white divide-y divide-gray-200">
    //       {transactions.map((trans: Transaction) => (
    //         <tr key={trans.id} className="hover:bg-gray-50">
    //           <td className="px-4 py-2 text-sm text-gray-700">{trans.id}</td>
    //           <td className="px-4 py-2 text-sm text-gray-700 capitalize">{trans?.type}</td>
    //           <td className="px-4 py-2 text-sm text-gray-700">{trans?.amount || '0'}</td>
    //           <td className="px-4 py-2 text-sm text-gray-700">{trans?.personName}</td>
    //           <td className="px-4 py-2 text-sm text-gray-700">{trans?.notes || '-'}</td>
    //           <td className="px-4 py-2 text-sm text-gray-500">
    //             {new Date(trans?.createdAt).toLocaleString()}
    //           </td>
    //           <td className="px-4 py-2 text-sm text-gray-500">
    //             {new Date(trans?.updatedAt).toLocaleString()}
    //           </td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
    <div className="mx-auto px-6 pb-8 space-y-8">
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
                    <span
                      className={`
                        inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium
                        ${tx?.type === 'withdrawal'
                          ? 'bg-gray-200/20 text-gray-500'  // withdraw colors
                          : 'bg-emerald-500/20 text-emerald-500'}  // deposit colors
                      `}
                    >
                      {tx?.type === 'withdrawal'
                        ? <ArrowDownLeft size={14} color="grey" />
                        : <ArrowUpRight size={14} color="green" />}
                      {tx?.type}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-white font-semibold">₹ {tx.amount.toLocaleString()}</td>
                  <td className="py-4 px-4 text-slate-300">{tx.personName}</td>
                  <td className="py-4 px-4 text-slate-400 text-xs">{tx.notes}</td>
                  <td className="py-4 px-4 text-slate-400 text-xs">{new Date(tx?.createdAt).toLocaleString()}</td>
                  <td className="py-4 px-4 text-slate-400 text-xs">{new Date(tx?.updatedAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}