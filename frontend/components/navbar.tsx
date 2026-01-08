"use client"
import { LogOut,User, Wallet } from "lucide-react";
import { useEffect, useState } from "react";
import Button from "./elements/Button";
import { logOut } from "@/lib/api/auth";
import * as Toast from "@radix-ui/react-toast";
import AddMember from "./AddMember";
import AddTransaction from "./AddTransaction";
import { createPerson, getAllPersons } from "@/lib/api/person";
import { PersonModel } from "@/lib/models/PersonModel";
import { createTransaction } from "@/lib/api/transactions";
import { useRouter } from "next/navigation";


export default function Navbar() {
  const [showAddMember, setShowAddMember] = useState(false)
  const [showAddTransaction, setShowAddTransaction] = useState(false)
  const [members, setMembers] = useState<Array<{ id: string; name: string; email: string }>>([])
  const [toastLoading, setToastLoading] = useState<string | undefined>(undefined)
  const [toastText, setToastText] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (email) {
      setUserName(email.split("@")[0]);
    }
  }, []);

 useEffect(() => {
  // define an async function inside useEffect
  const fetchMembers = async () => {
    try {
      const result = await getAllPersons(); // await the API call
      setMembers(PersonModel.fromApiArray(result)); // set state
    } catch (error) {
      console.error("Failed to fetch members:", error);
    }
  };

  fetchMembers();
}, []);

console.log('ABCD-members',members)



  const handleAddMember = async (formData: { name: string; email: string; description: string }) => {

    console.log('ABCD-formData', formData)
    setToastLoading("MEMBER")
    setOpen(true);
    setToastText("Member added successfully!");
    const addMemberStatus = await createPerson(formData)
    if (addMemberStatus?.success) {
      setToastLoading(undefined);
      setOpen(false);
      setTimeout(() => {
        setShowAddMember(false)
      }, 1000);
    }

  }

  const handleAddTransaction = async (formData: any) => {
    console.log('ABCD-formData',formData)
     console.log('ABCD-formData', formData)
    setToastLoading("TRANSACTION")
    setOpen(true);
    setToastText("Transaction added successfully!");
    const addTransactionStatus = await createTransaction(formData)
    if (addTransactionStatus?.success) {
      setToastLoading(undefined);
      setOpen(false);
      setTimeout(() => {
        router.refresh();
        setShowAddTransaction(false)
      }, 1000);
    }

  }


  const handleLogout = async () => {
    try {
      setLoading(true);

      const result = await logOut();

      if (result?.success) {
        setOpen(true);
        setToastText("Logged out successfully");

        setTimeout(() => {
          window.location.href = "/login";
        }, 800);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-700/50 backdrop-blur-md bg-slate-900/80">
        <div className="mx-auto px-6 sm:px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">Our Finance</h1>
              <p className="text-slate-400 text-sm mt-1">Welcome {userName}, manage your finances</p>
            </div>
            <div className="flex items-center gap-4 sm:gap-4">
              <Button
                text="Add Member"
                onClick={() => setShowAddMember(true)}
                color="emerald"
                prefixIcon={<User size={20} />}
                width="w-auto"
                height="h-10"
                disabled={false}
                textClassName="hidden sm:inline"
              />

              <Button
                text="Add Transaction"
                onClick={() => {setShowAddTransaction(true)}}
                color="blue"
                prefixIcon={<Wallet size={20} />}
                width="w-auto"
                height="h-10"
                disabled={false}
                textClassName="hidden sm:inline"
              />


              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-slate-800 cursor-pointer"
                title="Logout"
              >
                <LogOut size={20} />
                <span className="text-sm font-medium hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>



      <AddMember open={showAddMember} onClose={() => setShowAddMember(false)} onSubmit={handleAddMember} />

      <AddTransaction
        open={showAddTransaction}
        persons={members}
        onClose={() => setShowAddTransaction(false)}
        onSubmit={handleAddTransaction}
      />


      <Toast.Root
        open={open}
        onOpenChange={setOpen}
        className="bg-emerald-600 text-white px-4 py-3 rounded-lg shadow-lg"
      >
        <Toast.Title>{toastText}</Toast.Title>
      </Toast.Root>
    </>
  );
}