"use client";

import React, { useEffect, useState } from "react";
import { Mail, Percent, ArrowDownLeft, TrendingUp, X } from "lucide-react";
import { getPersonById } from "@/lib/api/person";
import { PersonModel } from "@/lib/models/PersonModel";

interface PersonDetails {
  id: string;
  name: string;
  email: string;
  details: string;
  interestRate: number;
  totalDeposited: number;
  totalWithdrawn: number;
  dueAmount: number;
  createdAt: string;
  updatedAt: string;
}

interface PersonDetailsModalProps {
  personId: string | null;
  onClose: () => void;
}

const PersonDetailsModal: React.FC<PersonDetailsModalProps> = ({
  personId,
  onClose,
}) => {
  const [person, setPerson] = useState<PersonDetails | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!personId) return; // ✅ safe inside effect

    const fetchById = async () => {
      try {
        setLoading(true);
        const result = await getPersonById(personId);
        setPerson(PersonModel.fromApi(result?.person));
      } catch (error) {
        console.error("Failed to fetch person:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchById();
  }, [personId]);

  // ✅ render condition AFTER hooks
  if (!personId) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 max-w-2xl w-full mx-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white">
              {loading ? "Loading..." : person?.name}
            </h2>
            <p className="text-sm text-slate-400">Member Details</p>
          </div>

          <button onClick={onClose} className="text-slate-400 hover:text-white cursor-pointer">
            <X />
          </button>
        </div>

        {loading || !person ? (
          <div className="text-center text-slate-400 py-12">
            Loading person details...
          </div>
        ) : (
          <div className="grid grid-cols-12 gap-4">
            {/* Email */}
            <div className="col-span-12 md:col-span-6 bg-slate-700/40 p-4 rounded-xl">
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Mail className="w-4 h-4" />
                Email
              </div>
              <p className="text-white mt-1">{person.email}</p>
            </div>

            {/* Interest Rate */}
            <div className="col-span-12 md:col-span-6 bg-slate-700/40 p-4 rounded-xl">
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Percent className="w-4 h-4" />
                Interest Rate
              </div>
              <p className="text-white mt-1">{person.interestRate}%</p>
            </div>

            {/* Deposited */}
            <div className="col-span-12 md:col-span-4 bg-emerald-500/10 p-4 rounded-xl">
              <div className="flex items-center gap-2 text-emerald-400 text-sm">
                <TrendingUp className="w-4 h-4" />
                Deposited
              </div>
              <p className="text-white mt-1">
                ₹ {person.totalDeposited}
              </p>
            </div>

            {/* Withdrawn */}
            <div className="col-span-12 md:col-span-4 bg-slate-500/10 p-4 rounded-xl">
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <ArrowDownLeft className="w-4 h-4" />
                Withdrawn
              </div>
              <p className="text-white mt-1">
                ₹ {person.totalWithdrawn}
              </p>
            </div>

            {/* Due */}
            <div className="col-span-12 md:col-span-4 bg-red-500/10 p-4 rounded-xl">
              <div className="text-red-400 text-sm">Due Amount</div>
              <p className="text-white mt-1">
                ₹ {person.dueAmount}
              </p>
            </div>

            {/* Details */}
            <div className="col-span-12 bg-slate-700/40 p-4 rounded-xl">
              <div className="text-slate-400 text-sm mb-1">Details</div>
              <p className="text-white">{person.details || "—"}</p>
            </div>

            <div className="col-span-12 text-right text-xs text-slate-400">
              Created on {new Date(person.createdAt).toLocaleDateString()}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="flex justify-end pt-6">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonDetailsModal;
