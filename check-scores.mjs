import { getDb } from './server/db.js';
import { matches } from './drizzle/schema.js';
import { eq } from 'drizzle-orm';

const db = await getDb();
const completed = await db.select().from(matches).where(eq(matches.status, 'completed')).limit(3);

console.log('Completed matches:');
completed.forEach(m => {
  console.log('---');
  console.log('ID:', m.id);
  console.log('Teams:', m.team1, 'vs', m.team2);
  console.log('Status:', m.status);
  console.log('Score:', m.score);
  console.log('Last Updated:', m.lastUpdated);
});

process.exit(0);
