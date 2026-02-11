import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1f2629] text-gray-300 py-20 px-10">
      {/* Top Footer Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        {/* Left: Logo + Text */}
        <div>
          {/* Logo Placeholder */}
          <div className="w-16 h-10 bg-white rounded mb-6"></div>

          <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
            Your ultimate getaway awaits with premier vacation rentals in
            Gatlinburg, TN.
          </p>
        </div>

        {/* Middle: Quick Links */}
        <div>
          <h3 className="text-white font-serif text-lg mb-5">Quick Links</h3>

          <ul className="space-y-2 text-sm text-gray-400">
            {["Home", "Properties", "About", "Attractions", "Testimonials"].map(
              (link, index) => (
                <li
                  key={index}
                  className="hover:text-white cursor-pointer transition"
                >
                  {link}
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Right: Contact */}
        <div>
          <h3 className="text-white font-serif text-lg mb-5">Contact</h3>

          <div className="space-y-4 text-sm text-gray-400">
            {/* Email */}
            <p className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-green-500" />
              info@pacevacationrentals.com
            </p>

            {/* Location */}
            <p className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-green-500" />
              Gatlinburg, TN
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto mt-16 border-t border-white/10"></div>

      {/* Bottom Copyright */}
      <p className="text-center text-xs text-gray-500 mt-8">
        © 2026 Pace Vacation Rentals. All rights reserved.
      </p>
    </footer>
  );
}
