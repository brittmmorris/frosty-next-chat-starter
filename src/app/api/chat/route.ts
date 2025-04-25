import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { prompt } = await req.json()

  const routerId = process.env.ROUTER_ID
  const routerKey = process.env.ROUTER_KEY

  const res = await fetch(`https://api.gofrosty.ai/chat?router_id=${routerId}&router_key=${routerKey}&prompt=${encodeURIComponent(prompt)}&rule=cost`)

  const data = await res.json()
  console.log("API Response:", data) // <-- Add this

  return NextResponse.json({ response: data.response })
}
