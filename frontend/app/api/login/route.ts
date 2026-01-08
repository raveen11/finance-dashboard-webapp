import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    // 1️⃣ Parse the incoming request body from frontend
    const body = await req.json()

    // 2️⃣ Call backend Render API
    const backendResponse = await fetch(`https://finance-dashboard-webapp.onrender.com/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      credentials: "include", // required for cookies
    })

    // 3️⃣ Read backend response body
    const data = await backendResponse.json()

    // 4️⃣ Forward Set-Cookie header from backend to frontend
    const setCookie = backendResponse.headers.get("set-cookie")
    const res = NextResponse.json(data, { status: backendResponse.status })
    if (setCookie) {
      res.headers.set("Set-Cookie", setCookie)
    }

    // 5️⃣ Return response to frontend
    return res
  } catch (err: any) {
    return NextResponse.json(
      { message: err.message || "Internal Server Error" },
      { status: 500 }
    )
  }
}
