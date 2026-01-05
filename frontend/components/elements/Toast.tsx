"use client";

import * as Toast from "@radix-ui/react-toast";
import { ReactNode, useState } from "react";

export default function ToastProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <Toast.Provider swipeDirection="right">
      {children}

      <Toast.Root
        open={open}
        onOpenChange={setOpen}
        className="bg-slate-900 text-white px-4 py-3 rounded-lg shadow-lg"
      >
        <Toast.Title className="font-medium">
          {message}
        </Toast.Title>
      </Toast.Root>

      <Toast.Viewport className="fixed top-4 right-4 w-96 z-50" />
    </Toast.Provider>
  );
}
