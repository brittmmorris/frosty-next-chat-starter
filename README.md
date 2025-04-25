# ❄️ Frosty AI Chat Starter (Next.js + REST)

A minimal Next.js starter app that connects to the [Frosty AI](https://gofrosty.ai) REST API and routes prompts based on cost, performance, or fallback logic.

---

## 🔧 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/brittmmorris/frosty-next-chat-starter
cd frosty-next-chat-starter
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add your Frosty router credentials

Copy the example file and fill in your values from the Frosty Console:

```bash
cp .env.example .env.local
```

Then edit `.env.local`:

```env
ROUTER_ID=your-router-id
ROUTER_KEY=your-router-key
```

---

## 💬 Usage

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000), type a prompt, and click **Send**.

You'll see a streamed response from Frosty AI.

---

## 💡 Example API Response

```json
{
  "response": "Here's a silly joke for you: Why can't a bicycle stand up by itself? It's two-tired!",
  "model": "claude-3-sonnet",
  "provider": "Anthropic",
  "cost": "- -",
  "rule": "cost",
  "success": "True"
}
```

---

## 📎 Helpful Links

- 🧠 [Frosty Console](https://console.gofrosty.ai)
- 📚 [Frosty API Docs](https://docs.gofrosty.ai)

---

## 🚀 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
