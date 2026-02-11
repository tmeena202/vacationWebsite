import { Star, MapPin, Users, BedDouble, Bath } from "lucide-react";
import property2 from "../assets/property-2.webp";
import property3 from "../assets/property-3.webp";

export default function TopProperties() {
  const properties = [
    {
      name: "Bear Necessities",
      location: "Gatlinburg, TN · Cozy 2BR Cabin",
      guests: "6 guests",
      beds: "2 bed",
      baths: "2 bath",
      price: "$159/night",
      rating: "4.9",
      image: property2,
      tags: ["Swimming Pool", "Free WiFi", "Kitchen"],
    },
    {
      name: "The Fox's Den",
      location: "Gatlinburg, TN · Log Cabin",
      guests: "8 guests",
      beds: "3 bed",
      baths: "4 bath",
      price: "$219/night",
      rating: "4.5",
      image: property3,
      tags: ["Air Conditioning", "Washing Machine", "Street Parking"],
    },
  ];

  return (
    <section className="bg-[#fdfcf8] py-20 px-6">
      {/* Heading */}
      <div className="text-center mb-14">
        <p className="text-xs tracking-[0.3em] text-green-700 font-medium uppercase">
          Our Collection
        </p>

        <h2 className="text-5xl font-serif text-gray-800 mt-3">
          Our Top Properties
        </h2>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {properties.map((item, index) => (
          <PropertyCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
}

/* Property Card */
function PropertyCard({ item }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200">
      {/* Image */}
      <div className="relative">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-60 object-cover"
        />

        {/* Rating Badge */}
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-1 shadow text-sm font-medium">
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          {item.rating}
        </div>

        {/* Price Pill */}
        <div className="absolute bottom-4 left-4 bg-[#6f8f3e] text-white text-xs px-4 py-2 rounded-full font-semibold">
          From {item.price}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-serif text-gray-800">{item.name}</h3>

        {/* Location */}
        <p className="flex items-center gap-2 text-gray-500 text-sm mt-2">
          <MapPin className="w-4 h-4" />
          {item.location}
        </p>

        {/* Info Row */}
        <div className="flex gap-6 mt-4 text-gray-600 text-sm">
          <span className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            {item.guests}
          </span>

          <span className="flex items-center gap-2">
            <BedDouble className="w-4 h-4" />
            {item.beds}
          </span>

          <span className="flex items-center gap-2">
            <Bath className="w-4 h-4" />
            {item.baths}
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-5">
          {item.tags.map((tag, i) => (
            <span
              key={i}
              className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Divider */}
        <hr className="my-6" />

        {/* Link */}
        <a
          href="#"
          className="text-sm font-medium text-green-700 hover:underline"
        >
          View Property →
        </a>
      </div>
    </div>
  );
}
