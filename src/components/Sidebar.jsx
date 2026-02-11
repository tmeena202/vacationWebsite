import { X } from "lucide-react";

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Overlay Background */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      ></div>

      {/* Sidebar Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[320px] bg-white z-50 shadow-xl transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-600 hover:text-black"
        >
          <X size={28} />
        </button>

        {/* Menu Links */}
        <div className="mt-20 px-10 space-y-6 text-gray-800 text-lg font-medium">
          {[
            "Home",
            "Properties",
            "About Us",
            "Attractions",
            "Testimonials",
            "Contact",
          ].map((item, index) => (
            <div key={index}>
              <p className="cursor-pointer hover:text-black">{item}</p>
              <hr className="mt-4 border-gray-200" />
            </div>
          ))}
        </div>

        {/* Footer */}
        <p className="absolute bottom-6 left-10 text-sm text-gray-500">
          © 2026 Pace Vacation Rentals
        </p>
      </div>
    </>
  );
}
