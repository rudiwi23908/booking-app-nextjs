// pages/events/[id].tsx

import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  ticketsAvailable: number;
}

interface EventDetailPageProps {
  event: Event;
}

const EventDetailPage: NextPage<EventDetailPageProps> = ({ event }) => {
  return (
    <div className="container mx-auto p-4">
      <Link href="/events">
        <p className="text-blue-600 hover:underline">← Back to Events</p>
      </Link>
      <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
      <p>{new Date(event.date).toLocaleDateString()}</p>
      <p>{event.time}</p>
      <p>{event.location}</p>
      <p className="mt-4">{event.description}</p>
      <p className="mt-4">Tickets Available: {event.ticketsAvailable}</p>
    </div>
  );
};

// Dummy data for UI development
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;

  const events: Event[] = [
    {
      id: 1,
      title: "Music Concert",
      description: "Enjoy an evening of live music.",
      date: "2023-06-15",
      time: "18:00",
      location: "New York, NY",
      ticketsAvailable: 50,
    },
    {
      id: 2,
      title: "Art Exhibition",
      description: "Explore contemporary art pieces.",
      date: "2023-07-20",
      time: "10:00",
      location: "Los Angeles, CA",
      ticketsAvailable: 30,
    },
    {
      id: 3,
      title: "Tech Conference",
      description: "Join industry leaders to discuss the future of technology.",
      date: "2023-08-25",
      time: "09:00",
      location: "San Francisco, CA",
      ticketsAvailable: 100,
    },
  ];

  const event = events.find((event) => event.id === parseInt(id as string));

  return {
    props: {
      event: event || null,
    },
  };
};

export default EventDetailPage;
