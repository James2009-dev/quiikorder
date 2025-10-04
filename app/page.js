import Image from "next/image";

Image

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 flex flex-col items-center justify-center p-4">
      <section className="max-w-2xl w-full text-center py-12 px-6 bg-white/80 rounded-2xl shadow-lg">
        <h1 className="text-5xl font-extrabold text-blue-600 mb-4">QWIIKORDER</h1>
        <p className="text-lg text-gray-700 mb-8">Order anything, anywhere, instantly. Fast, reliable, and easy to use.</p>
        <a href="#" className="inline-block px-8 py-3 bg-blue-500 text-white font-semibold rounded-full shadow hover:bg-blue-600 transition">Get Started</a>
      </section>
      <Image
        src="/HelpCenter.7adf53ab.png"
        alt="Qwiikorder Hero"
        width={700}
        height={500}
  className="mt-8 rounded-b-3xl shadow-xl border-4 border-blue-200 transition-transform duration-300 hover:scale-110 hover:animate-pulse"
      />
    </main>
  );
}