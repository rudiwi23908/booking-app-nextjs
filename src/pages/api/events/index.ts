// /api/events/index.ts
import pool from "@/lib/db";

export default async function handler(req, res) {
  const result = await pool.query("SELECT * FROM events ORDER BY date ASC");
  res.status(200).json(result.rows);
}
