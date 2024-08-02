export default function TempSection() {
  return (
    <section className="flex flex-col items-center">
      <div className="animate-glow animate-fade-left hidden h-px w-screen bg-gradient-to-r from-orange-300/0 via-orange-300/50 to-orange-300/0 md:block" />
      <div>
        <h1 className="font-display text-edge-outline animate-title z-10 whitespace-nowrap bg-orange-300 bg-clip-text py-2 text-6xl text-transparent duration-1000 sm:py-4 sm:text-8xl xl:text-9xl">
          SoleStyle
        </h1>
        <p className="font-display animate-fade-in text-edge-outline text-right text-base italic text-orange-200 sm:text-xl xl:text-2xl">
          Step into Style with SoleStyle
        </p>
      </div>
      <div className="animate-glow animate-fade-right hidden h-px w-screen bg-gradient-to-r from-orange-300/0 via-orange-300/50 to-orange-300/0 md:block" />
      <h2 className="font-display animate-fade-in-soon mt-16 text-2xl text-orange-100 sm:text-3xl xl:text-4xl">
        Coming soon.
      </h2>
    </section>
  );
}
