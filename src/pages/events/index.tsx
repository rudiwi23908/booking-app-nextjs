import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
}

interface HomePageProps {
  events: Event[];
}

const HomePage: NextPage<HomePageProps> = ({ events }) => {
  const [clientEvents, setClientEvents] = useState<Event[]>([]);

  useEffect(() => {
    setClientEvents(
      events.map((event) => ({
        ...event,
      }))
    );
  }, [events]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Upcoming Events</h1>
      <ul>
        {clientEvents.map((event) => (
          <li key={event.id} className="mb-4">
            <Link href={`/events/${event.id}`}>
              <p className="text-xl font-semibold text-blue-600 hover:underline">
                {event.title}
              </p>
            </Link>
            <p>{event.date}</p>
            <p>{event.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Dummy data for UI development
export const getServerSideProps: GetServerSideProps = async () => {
  const events: Event[] = [
    {
      id: 1,
      title: "Music Concert",
      date: "2023-06-15",
      location: "New York, NY",
    },
    {
      id: 2,
      title: "Art Exhibition",
      date: "2023-07-20",
      location: "Los Angeles, CA",
    },
    {
      id: 3,
      title: "Tech Conference",
      date: "2023-08-25",
      location: "San Francisco, CA",
    },
  ];

  return {
    props: {
      events,
    },
  };
};

export default HomePage;
