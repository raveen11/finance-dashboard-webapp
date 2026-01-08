import { NextResponse } from "next/server"

export async function POST() {
  // Clear the cookie
  const res = NextResponse.json({ success: true })
  res.cookies.set({
    name: "authToken",
    value: "",
    httpOnly: true,
    secure: true,      // must match how it was set
    sameSite: "none",
    maxAge: 0,         // expire immediately
    path: "/",         // important!
  })

  return res
}
