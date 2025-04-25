'use client'

import { useState } from 'react'

export default function ChatWindow() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage = { role: 'user', content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setLoading(true)

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: input }),
    })

    const data = await res.json()
    const aiMessage = { role: 'assistant', content: data.response }
    setMessages((prev) => [...prev, aiMessage])
    setLoading(false)
  }

  return (
    <div className="max-w-xl flex justify-center items-center min-h-screen bg-[#EAF3FF] px-4">
      <div className="bg-white rounded-2xl shadow-md p-6 w-[500px] flex flex-col space-y-4">
        <h1 className="text-2xl font-semibold text-[#1d6ae7] text-center">
          Frosty AI Chat Starter
        </h1>

        <div className="flex flex-col space-y-2 h-80 overflow-y-auto border rounded p-3 bg-[#f9f9f9]">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`p-2 rounded-md ${
                msg.role === 'user' ? 'bg-[#EAF3FF] self-end text-right' : 'bg-gray-100 self-start'
              }`}
            >
              <strong>{msg.role === 'user' ? 'You' : 'Frosty'}:</strong> {msg.content}
            </div>
          ))}
          {loading && <div className="text-gray-500 italic">Frosty is thinking...</div>}
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    e.preventDefault()
                    handleSend()
                }
            }}
            className="flex-1 border rounded px-3 py-2 text-sm"
            placeholder="Ask something..."
          />
          <button
            onClick={handleSend}
            className="bg-[#1d6ae7] text-white px-4 py-2 rounded text-sm hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  )
}
