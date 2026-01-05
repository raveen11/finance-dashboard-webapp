"use client";

import React, { useState } from "react";
import { IndianRupee } from "lucide-react";

interface Person {
    id: string;
    name: string;
}

interface AddTransactionModalProps {
    open: boolean;
    persons: Person[];
    onClose: () => void;
    onSubmit: (data: any) => void;
}

const PURPOSES = [
    "Personal Loan",
    "Trading",
    "Real State Investment",
    "Others",
];

const AddTransactionModal: React.FC<AddTransactionModalProps> = ({
    open,
    persons,
    onClose,
    onSubmit,
}) => {

    if(!open) return null;
    const [formValues, setFormValues] = useState({
        type: "",
        amount: "",
        personId: "",
        purpose: "",
        isMutual: "",
        description: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormValues((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { type, amount, personId, purpose, isMutual, description } = formValues;

        // Conditional validation for withdraw
        if (type === "withdrawal") {
            if (!purpose) {
                alert("Purpose is required for withdrawal");
                return;
            }
            if (!isMutual) {
                alert("Is Mutual is required for withdrawal");
                return;
            }
        }

        // Submit payload
        onSubmit({
            type,
            amount: Number(amount),
            personId,
            purpose: type === "withdrawal" ? purpose : "",
            isMutual: type === "withdrawal" ? isMutual === "yes" : false,
            description,
        });
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 max-w-lg w-full mx-4">
                {/* Header */}
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-white">Add New Transaction</h2>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="grid grid-cols-12 gap-4">
                    {/* Transaction Type */}
                    <div className="col-span-12 md:col-span-6">
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                            Transaction Type
                        </label>
                        <select
                            name="type"
                            value={formValues.type}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white"
                        >
                            <option value="">Select type</option>
                            <option value="deposit">Deposit</option>
                            <option value="withdrawal">Withdrawal</option>
                        </select>
                    </div>

                    {/* Amount */}
                    <div className="col-span-12 md:col-span-6">
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                            Amount
                        </label>
                        <div className="relative">
                            <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                            <input
                                type="number"
                                name="amount"
                                value={formValues.amount}
                                onChange={handleChange}
                                required
                                min={0}
                                placeholder="Enter amount"
                                className="w-full pl-9 pr-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white"
                            />
                        </div>
                    </div>

                    {/* Person */}
                    <div className="col-span-12">
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                            Person
                        </label>
                        <select
                            name="personId"
                            value={formValues.personId}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white"
                        >
                            <option value="">Select person</option>
                            {persons.map((p) => (
                                <option key={p.id} value={p.id}>
                                    {p.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Conditional Fields: Purpose & Is Mutual */}
                    {formValues.type === "withdraw" && (
                        <>
                            {/* Purpose */}
                            <div className="col-span-12 md:col-span-6">
                                <label className="block text-sm font-medium text-slate-300 mb-2">
                                    Purpose
                                </label>
                                <select
                                    name="purpose"
                                    value={formValues.purpose}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white"
                                >
                                    <option value="">Select purpose</option>
                                    {PURPOSES.map((p) => (
                                        <option key={p} value={p}>
                                            {p}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Is Mutual */}
                            <div className="col-span-12 md:col-span-6">
                                <label className="block text-sm font-medium text-slate-300 mb-2">
                                    Is Mutual
                                </label>
                                <select
                                    name="isMutual"
                                    value={formValues.isMutual}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white"
                                >
                                    <option value="">Select</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                        </>
                    )}

                    {/* Description (Full Width) */}
                    <div className="col-span-12">
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                            Description
                        </label>
                        <textarea
                            name="description"
                            value={formValues.description}
                            onChange={handleChange}
                            rows={3}
                            placeholder="Add transaction description"
                            className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white resize-none"
                        />
                    </div>

                    {/* Buttons */}
                    <div className="col-span-12 flex justify-end gap-3 pt-6">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-5 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg cursor-pointer"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg cursor-pointer"
                        >
                            Add Transaction
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTransactionModal;
