// /api/bookings/index.ts
import pool from "@/lib/db";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { event_id, name, email, quantity } = req.body;

  await pool.query(
    "INSERT INTO bookings (event_id, name, email, quantity) VALUES ($1, $2, $3, $4)",
    [event_id, name, email, quantity]
  );

  res.status(201).json({ message: "Booking successful" });
}
