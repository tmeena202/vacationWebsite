import { Menu, Heart, ShieldCheck, Star } from "lucide-react";

export default function WelcomeSection() {
  return (
    <div className="w-full min-h-screen bg-[#fdfcfb] px-10 py-8">
      {/* Navbar */}
      <nav className="flex items-center justify-between">
        {/* Title */}
        <h1 className="text-5xl font-serif font-medium text-gray-800">
          Welcome to Pace Vacation Rentals
        </h1>
      </nav>

      {/* Main Content */}
      <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Left Text Section */}
        <div className="space-y-10 text-gray-600 text-lg leading-relaxed max-w-xl">
          <p>
            Discover the perfect blend of rustic charm and coastal bliss with
            our premier vacation rentals in Gatlinburg, TN, and Anna Maria
            Island, FL.
          </p>

          <p>
            Indulge in the serene beauty of the Great Smoky Mountains with our
            cozy log cabin retreats nestled amidst nature's embrace in
            Gatlinburg. Whether you're seeking a romantic escape or a family
            adventure, our cabins offer the ideal setting for relaxation and
            rejuvenation.
          </p>

          <p>
            If sandy shores and ocean breezes beckon you, our beach condo rental
            in Bradenton, Anna Maria Island, FL, is your ticket to paradise.
            Experience the laid-back island lifestyle as you unwind in luxurious
            accommodations just steps away from pristine beaches and vibrant
            coastal culture.
          </p>
        </div>

        {/* Right Feature Cards */}
        <div className="space-y-8">
          {/* Card 1 */}
          <FeatureCard
            icon={<Heart className="w-7 h-7 text-[#6f8f3e]" />}
            title="Personal Touch"
            desc="Every property is hand-selected and personally managed to ensure your comfort."
          />

          {/* Card 2 */}
          <FeatureCard
            icon={<ShieldCheck className="w-7 h-7 text-[#6f8f3e]" />}
            title="Trusted & Reliable"
            desc="Superhost status with consistently high guest ratings and reviews."
          />

          {/* Card 3 */}
          <FeatureCard
            icon={<Star className="w-7 h-7 text-[#6f8f3e]" />}
            title="Premium Experience"
            desc="Luxury amenities and thoughtful details that make every stay unforgettable."
          />
        </div>
      </div>
    </div>
  );
}

/* Feature Card Component */
function FeatureCard({ icon, title, desc }) {
  return (
    <div className="flex items-start gap-6 border border-gray-200 bg-white rounded-xl p-6 shadow-sm">
      {/* Icon Circle */}
      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#dce7c9]">
        {icon}
      </div>

      {/* Text */}
      <div>
        <h3 className="text-xl font-serif font-medium text-gray-800">
          {title}
        </h3>
        <p className="text-gray-600 mt-2 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
