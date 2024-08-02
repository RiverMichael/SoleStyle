import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-center py-24">
      <section className="flex flex-col items-center">
        <div className="animate-glow animate-fade-left hidden h-px w-screen bg-gradient-to-r from-orange-300/0 via-orange-300/50 to-orange-300/0 md:block" />
        <h1 className="font-display text-edge-outline animate-title z-10 whitespace-nowrap bg-orange-300 bg-clip-text py-8 text-4xl text-transparent duration-1000 sm:text-8xl xl:text-9xl">
          SoleStyle
        </h1>
        <div className="animate-glow animate-fade-right hidden h-px w-screen bg-gradient-to-r from-orange-300/0 via-orange-300/50 to-orange-300/0 md:block" />
        <p className="font-display animate-fade-in text-2xl italic text-orange-200">
          Step into Style with SoleStyle
        </p>
        <h2 className="font-display animate-fade-in-soon mt-24 text-4xl text-orange-100">
          Coming soon
        </h2>
      </section>
    </main>
  );
}
