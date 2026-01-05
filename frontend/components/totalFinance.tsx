"use client";

import React from "react";
import StatCard from "./elements/StatCard";
import { ArrowDownLeft, TrendingUp } from "lucide-react";
import InvestmentCard from "./elements/InvestmentCard";

interface InvestmentItem {
  purpose: string;
  amount: number;
  icon: string;
  color: string;
}

interface TotalAmountItem {
  label: string;
  value: number;
}

interface TransformedDashboardData {
  totalAmountArray: TotalAmountItem[];
  withdrawnPurposeArray: InvestmentItem[];
}

interface TotalFinanceProps {
  transformedData: TransformedDashboardData;
}



const TotalFinance: React.FC<TotalFinanceProps> = ({
  transformedData,
}) => {
  return (
    <div className="mx-auto px-6 py-8 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {transformedData.totalAmountArray.map((item, index) => (
          <StatCard
            key={index}
            label={item.label}
            amount={`₹ ${item.value.toLocaleString()}`}
            change={item.label === "In Account" ? "+5.2%" : "0%"}
            trend={item.label === "In Account" ? "up" : "neutral"}
            icon={
              item.label === "Deposited" ? (
                <TrendingUp className="text-emerald-400" />
              ) : item.label === "Withdrawn" ? (
                <ArrowDownLeft className="text-slate-500" />
              ) : (
                <TrendingUp className="text-blue-400" />
              )
            }
          />
        ))}
      </div>
      {/* Investments */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Investments</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {transformedData?.withdrawnPurposeArray.map((item) => (
            <InvestmentCard
              key={item.purpose}
              icon={item.icon}
              label={item.purpose}
              amount={`₹ ${item.amount.toLocaleString()}`}
              color={item.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TotalFinance;
