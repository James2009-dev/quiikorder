import Image from "next/image";

export default function Home() {
  return (
    <main className=" flex flex-col items-center justify-center p-4">
      <section className="max-w-2xl w-full text-center py-12 px-6 bg-white/80 rounded-2xl shadow-lg">
        <h1 className="text-5xl  mb-4">QWIIKORDER</h1>
        
          <button
            className="mt-6 px-8 py-3 bg-fuchsia-500 text-white border-2 border-white rounded-lg font-semibold shadow transition-all duration-300 transform hover:bg-white hover:text-fuchsia-500 hover:border-fuchsia-500 hover:scale-110"
          >
            Fuchsia Button
          </button>
      </section>
      <Image
        src="/HelpCenter.7adf53ab.png"
        alt="Qwiikorder Hero"
        width={700}
        height={500}
  className="mt-8 rounded-b-3xl shadow-xl border-4 border-blue-200 transition-transform duration-300 hover:skew-y-3"
      />

               
    </main>
  );
}