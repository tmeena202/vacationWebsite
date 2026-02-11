import heroMountain from "../assets/hero-mountains.jpg";

export default function LuxuryBanner() {
  return (
    <section className="relative w-full h-[420px] overflow-hidden">
      {/* Background Image */}
      <img
        src={heroMountain}
        alt="Nature Luxury Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Subtitle */}
        <p className="text-white text-xs tracking-[0.35em] uppercase mb-3">
          Experience the Beauty
        </p>

        {/* Title */}
        <h1 className="text-white font-serif text-4xl md:text-6xl font-medium">
          Where Luxury Meets Nature
        </h1>
      </div>
    </section>
  );
}
