import { Menu } from "lucide-react";
import heroVideo from "../assets/hero-video.mp4";
import logo from "../assets/logo.png";

export default function Hero({ onOpenSidebar }) {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* ✅ Responsive Navbar */}
      <nav
        className="absolute top-0 left-0 w-full flex items-center justify-between 
        px-4 sm:px-6 md:px-10 py-4 md:py-6 z-30"
      >
        {/* Logo */}
        <div className="w-20 sm:w-24 h-12 sm:h-14">
          <img
            src={logo}
            alt="Vacation Logo"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Book Button */}
          <button
            className="bg-[#6f8f3e] hover:bg-[#5d7833] text-white 
            px-4 sm:px-5 py-2 rounded-full font-semibold text-sm sm:text-base"
          >
            Book Now
          </button>

          {/* Hamburger Menu */}
          <button
            onClick={onOpenSidebar}
            aria-label="Open menu"
            className="p-2 rounded hover:bg-white/10 transition cursor-pointer"
          >
            <Menu className="text-white w-7 h-7 sm:w-8 sm:h-8" />
          </button>
        </div>
      </nav>

      {/* ✅ Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Heading */}
        <h1
          className="text-white font-serif font-semibold leading-tight
          text-3xl sm:text-5xl md:text-7xl"
        >
          Find Your Perfect Vacation <br /> Below
        </h1>

        {/* Subtitle */}
        <p className="text-gray-200 mt-4 text-sm sm:text-lg max-w-xl">
          Luxury rentals in Gatlinburg, TN & Anna Maria Island, FL
        </p>

        {/* ✅ Responsive Search Bar */}
        <div
          className="mt-10 flex flex-col md:flex-row gap-4 
          bg-white/15 backdrop-blur-xl p-4 sm:p-5 rounded-2xl shadow-lg
          w-full max-w-4xl"
        >
          {/* Check-in */}
          <div className="flex flex-col text-left w-full">
            <label className="text-white text-sm mb-1">Check-in</label>
            <input
              type="date"
              className="px-4 py-2 rounded-lg outline-none w-full"
            />
          </div>

          {/* Check-out */}
          <div className="flex flex-col text-left w-full">
            <label className="text-white text-sm mb-1">Check-out</label>
            <input
              type="date"
              className="px-4 py-2 rounded-lg outline-none w-full"
            />
          </div>

          {/* Guests */}
          <div className="flex flex-col text-left w-full">
            <label className="text-white text-sm mb-1">Guests</label>
            <select className="px-4 py-2 rounded-lg outline-none w-full">
              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3 Guests</option>
              <option>4 Guests</option>
            </select>
          </div>

          {/* Search Button */}
          <button
            className="bg-[#6f8f3e] hover:bg-[#5d7833] text-white font-semibold
            px-6 sm:px-8 py-3 rounded-xl w-full md:w-auto"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
