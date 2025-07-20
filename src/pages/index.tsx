import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const HomePage = () => {
  const eventList = [
    {
      name: "Konser Musik Jazz",
      date: "2024-07-15",
      location: "Jakarta Convention Center",
      price: 350000,
      description:
        "Nikmati malam penuh musik jazz bersama musisi ternama Indonesia.",
      organizer: "Jazzindo Event",
      ticketsLeft: 120,
    },
    {
      name: "Workshop UI/UX Design",
      date: "2024-08-05",
      location: "CoHive Space, Bandung",
      price: 250000,
      description: "Pelajari dasar-dasar UI/UX bersama praktisi berpengalaman.",
      organizer: "Designers Hub",
      ticketsLeft: 40,
    },
    {
      name: "Festival Kuliner Nusantara",
      date: "2024-09-10",
      location: "Lapangan Merdeka, Surabaya",
      price: 50000,
      description:
        "Jelajahi ragam kuliner khas Indonesia dari berbagai daerah.",
      organizer: "Kuliner Kita",
      ticketsLeft: 300,
    },
    {
      name: "Seminar Digital Marketing",
      date: "2024-07-25",
      location: "Hotel Santika, Yogyakarta",
      price: 150000,
      description:
        "Tingkatkan pengetahuan digital marketing bersama para ahli.",
      organizer: "Marketer Pro",
      ticketsLeft: 75,
    },
    {
      name: "Lomba Lari 10K",
      date: "2024-08-20",
      location: "Stadion Utama, Semarang",
      price: 100000,
      description: "Ayo ikuti lomba lari 10K dan raih medali eksklusif.",
      organizer: "Semarang Sport Club",
      ticketsLeft: 200,
    },
  ];

  return (
    <div>
      <h1 className="font-bold text-xl">Event List</h1>
      <ul>
        {eventList.map((event, idx) => (
          <li key={idx}>
            <strong>{event.name}</strong> - {event.date} - {event.location} - Rp
            {event.price.toLocaleString("id-ID")}
            <br />
            {event.description}
            <br />
            <em>Organizer: {event.organizer}</em>
            <br />
            Tickets Left: {event.ticketsLeft}
            <br />
            <Link href={`/book/${encodeURIComponent(event.name)}`}>
              <button className="mt-2 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
                Book Tiket
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
