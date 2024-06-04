import Link from "next/link";
import { useRouter } from "next/router";
import image from "next/image";
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
    <div className="mx-auto max-w-xl ">
      <div className="border border-white my-3 p-2 rounded-md">
        <h1>Kemana kita kali ini?</h1>
        <input type="text" />
        <div className="flex ">
          <div className="p-3">
            <div className="w-7 h-7 rounded-full bg-white"></div>
            <p>Jakarta</p>
          </div>
          <div className="p-3">
            <div className="w-7 h-7 rounded-full bg-white"></div>
            <p>Semarang</p>
          </div>
          <div className="p-3">
            <div className="w-7 h-7 rounded-full bg-white"></div>
            <p>Surabaya</p>
          </div>
        </div>
      </div>
      <div className="h-fit w-full bg-white text-slate-800 text-center">
        Satu aplikasi siap memenuhi kebutuhan mu
      </div>
      <div className="bg-blue-500">
        <h1>Destinasi Populer : </h1>
        <div className="flex gap-3">
          {destinations.map((destination) => (
            <div key={destination.id} className="w-1/3 h-1/3 bg-red-500">
              <h1>{destination.name}</h1>
              <p>Price: {destination.price}</p>
              <p>Place: {destination.place}</p>
              <p>Rating: {destination.rating}</p>
              <p>Total Review: {destination.totalReview}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="ring ring-white mt-3 p-2">
        <h1>
          Siap acara bareng yang tersayang!{" "}
          <span className="text-red-500">❤️</span>
        </h1>
        <div className="flex  gap-4 ">
          <button className="w-1/3 h-12 rounded-md bg-white text-black font-semibold">
            Promo 1
          </button>
          <button className="w-1/3 h-12 rounded-md bg-white text-black font-semibold">
            Promo 2
          </button>
          <button className="w-1/3 h-12 rounded-md bg-white text-black font-semibold">
            Promo 3
          </button>
        </div>
        <button className="bg-white text-slate-900 px-8 py-2 mt-2 w-fit">
          Lihat semua
        </button>
      </div>
    </div>
  );
};

// Dummy data for UI development

export default HomePage;
