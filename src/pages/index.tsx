import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const HomePage = () => {
  const destinations = [
    {
      id: 1,
      name: "Bali",
      price: 1000,
      place: "Indonesia",
      rating: 4.5,
      totalReview: 100,
    },
    {
      id: 2,
      name: "Paris",
      price: 2000,
      place: "France",
      rating: 4.8,
      totalReview: 50,
    },
    {
      id: 3,
      name: "New York",
      price: 3000,
      place: "USA",
      rating: 4.2,
      totalReview: 80,
    },
    // Add more destinations as needed
  ];

  return (
    <div className="mx-auto max-w-xl bg-gradient-to-br from-blue-100 to-white min-h-screen p-4">
      {/* Search Section */}
      <div className="border border-white my-3 p-4 rounded-xl shadow-lg bg-white/80">
        <h1 className="text-2xl font-bold text-blue-700 mb-2">
          Kemana kita kali ini?
        </h1>
        <input
          type="text"
          className="w-full mt-2 p-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          placeholder="Cari destinasi..."
        />
        <div className="flex justify-between mt-4">
          {["Jakarta", "Semarang", "Surabaya"].map((city) => (
            <div
              key={city}
              className="p-3 flex flex-col items-center hover:bg-blue-50 rounded-lg transition"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 mb-2 flex items-center justify-center shadow">
                <span className="text-white font-bold text-lg">{city[0]}</span>
              </div>
              <p className="text-sm font-medium text-blue-700">{city}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Info Section */}
      <div className="h-fit w-full bg-white/90 text-slate-800 text-center py-3 rounded-lg shadow mb-3 font-semibold tracking-wide">
        Satu aplikasi siap memenuhi kebutuhan mu
      </div>

      {/* Destinations Section */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-400 py-5 px-3 rounded-2xl mt-3 shadow-lg">
        <h1 className="text-white font-bold text-xl mb-4">
          Destinasi Populer :
        </h1>
        <div className="flex gap-4">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="w-1/3 bg-white rounded-xl p-3 text-blue-800 flex flex-col items-center shadow hover:scale-105 hover:shadow-xl transition"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-full mb-2 flex items-center justify-center shadow">
                <span className="text-white text-2xl font-bold">
                  {destination.name[0]}
                </span>
              </div>
              <h2 className="font-bold text-lg mb-1">{destination.name}</h2>
              <p className="text-sm">
                💸{" "}
                <span className="font-semibold">
                  Rp{destination.price.toLocaleString()}
                </span>
              </p>
              <p className="text-sm">📍 {destination.place}</p>
              <p className="text-sm">
                ⭐ {destination.rating} ({destination.totalReview})
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Promo Section */}
      <div className="ring ring-white mt-5 p-4 rounded-xl bg-white/90 shadow-lg">
        <h1 className="text-lg font-bold text-blue-700 mb-2">
          Siap acara bareng yang tersayang!{" "}
          <span className="text-red-500">❤️</span>
        </h1>
        <div className="flex gap-4 mt-2">
          {["Promo 1", "Promo 2", "Promo 3"].map((promo, idx) => (
            <button
              key={promo}
              className={`w-1/3 h-12 rounded-lg font-semibold shadow transition hover:bg-blue-500 hover:text-white ${
                idx === 0
                  ? "bg-gradient-to-r from-yellow-300 to-yellow-400 text-yellow-900"
                  : idx === 1
                  ? "bg-gradient-to-r from-pink-300 to-pink-400 text-pink-900"
                  : "bg-gradient-to-r from-green-300 to-green-400 text-green-900"
              }`}
            >
              {promo}
            </button>
          ))}
        </div>
        <button className="bg-blue-600 text-white px-8 py-2 mt-4 rounded-lg font-semibold shadow hover:bg-blue-700 transition">
          Lihat semua
        </button>
      </div>
    </div>
  );
};

export default HomePage;
