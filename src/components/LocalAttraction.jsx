import { MapPin } from "lucide-react";
import mountains from "../assets/mountains.jpg";
import dollywood from "../assets/dollywood.jpg";
import deerHouse from "../assets/deerHouse.jpg";
import decorativeHouse from "../assets/decorativeHouses.jpg";

export default function LocalAttractions() {
  const attractions = [
    {
      location: "Gatlinburg, TN",
      title: "Great Smoky Mountains",
      desc: "America’s most visited national park — hiking, wildlife, and stunning vistas.",
      image: mountains,
    },
    {
      location: "Gatlinburg, TN",
      title: "Downtown Gatlinburg",
      desc: "Charming mountain town with unique shops, restaurants, and nightlife.",
      image: decorativeHouse,
    },
    {
      location: "Pigeon Forge, TN",
      title: "Dollywood",
      desc: "Award-winning theme park with rides, shows, and mountain crafts.",
      image: dollywood,
    },
    {
      location: "Great Smoky Mountains",
      title: "Cades Cove",
      desc: "Historic valley with wildlife, old cabins, and a scenic loop drive.",
      image: deerHouse,
    },
  ];

  return (
    <section className="bg-[#fdfcf8] py-24 px-6">
      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-xs tracking-[0.35em] text-green-700 uppercase font-medium">
          Explore the Area
        </p>

        <h2 className="text-5xl font-serif text-gray-800 mt-3">
          Local Attractions
        </h2>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {attractions.map((item, index) => (
          <AttractionCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
}

/* Attraction Card */
function AttractionCard({ item }) {
  return (
    <div className="relative h-[320px] rounded-2xl overflow-hidden shadow-md group cursor-pointer">
      {/* Background Image */}
      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

      {/* Content */}
      <div className="absolute bottom-0 p-5 text-white">
        {/* Location */}
        <p className="flex items-center gap-1 text-xs opacity-80 mb-2">
          <MapPin className="w-3 h-3" />
          {item.location}
        </p>

        {/* Title */}
        <h3 className="font-serif text-lg font-medium mb-1">{item.title}</h3>

        {/* Description */}
        <p className="text-xs text-gray-200 leading-relaxed">{item.desc}</p>
      </div>
    </div>
  );
}
