import { getDb } from "./server/db.ts";
import { matches } from "./drizzle/schema.ts";
import { eq } from "drizzle-orm";

const db = await getDb();
const liveMatches = await db.select().from(matches).where(eq(matches.status, "live")).limit(3);

console.log("=== LIVE MATCHES ===");
liveMatches.forEach(m => {
  console.log(`\nMatch: ${m.team1} vs ${m.team2}`);
  console.log(`Status: ${m.status}`);
  console.log(`Score: ${m.score}`);
  console.log(`Last Updated: ${m.lastUpdated}`);
});

process.exit(0);
