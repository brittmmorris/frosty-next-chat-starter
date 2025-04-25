import ChatWindow from '@/components/ChatWindow';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-[#EAF3FF]">
      <h1 className="text-3xl font-semibold mb-6 text-[#1d6ae7]">Frosty AI Chat Starter</h1>
      <ChatWindow />
    </main>
  );
}
