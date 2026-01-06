"use client"
import { Transaction, TransactionsTableProps } from "@/types/transaction";
import { ArrowDownLeft, ArrowUpRight, MoreHorizontal } from "lucide-react";
import PersonDetailsModal from "./PersonDetailsModal";
import { useState } from "react";
import { PersonModel } from "@/lib/models/PersonModel";

export default function TransactionsTable({ transactions }: TransactionsTableProps) {
  const [selectedPersonId, setSelectedPersonId] = useState(null);
  console.log('ABCD-transactions', transactions)
  return (
    <div className="mx-auto px-6 pb-8 space-y-8">
      <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm overflow-hidden">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Transactions</h2>
         
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
                  <td className="py-4 px-4 text-white font-semibold">₹ {tx.amount}</td>
                  <td
                    className="py-4 px-4 text-slate-300 cursor-pointer hover:underline hover:text-white transition-colors"
                    onClick={() => setSelectedPersonId(tx.personId)}
                  >
                    {tx.personName}
                  </td>    
                  <td className="py-4 px-4 text-slate-400 text-xs">{tx.notes}</td>
                  <td className="py-4 px-4 text-slate-400 text-xs">{new Date(tx?.createdAt).toLocaleString()}</td>
                  <td className="py-4 px-4 text-slate-400 text-xs">{new Date(tx?.updatedAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <PersonDetailsModal
        personId={selectedPersonId}
        onClose={() => setSelectedPersonId(null)}
      />
    </div>
  )
}