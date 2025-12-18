import { drizzle } from "drizzle-orm/mysql2";
import { matches, players } from "./drizzle/schema.js";

const db = drizzle(process.env.DATABASE_URL);

async function seed() {
  console.log("🌱 Seeding database...");

  // Seed matches
  const matchesData = [
    {
      team1: "Mumbai Indians",
      team2: "Chennai Super Kings",
      venue: "Wankhede Stadium, Mumbai",
      matchDate: new Date("2024-03-25T19:30:00"),
      matchTime: "7:30 PM IST",
      matchType: "IPL 2024",
      status: "upcoming",
    },
    {
      team1: "Royal Challengers Bangalore",
      team2: "Kolkata Knight Riders",
      venue: "M. Chinnaswamy Stadium, Bengaluru",
      matchDate: new Date("2024-03-26T15:30:00"),
      matchTime: "3:30 PM IST",
      matchType: "IPL 2024",
      status: "upcoming",
    },
    {
      team1: "Delhi Capitals",
      team2: "Punjab Kings",
      venue: "Arun Jaitley Stadium, Delhi",
      matchDate: new Date("2024-03-27T19:30:00"),
      matchTime: "7:30 PM IST",
      matchType: "IPL 2024",
      status: "upcoming",
    },
    {
      team1: "Sunrisers Hyderabad",
      team2: "Rajasthan Royals",
      venue: "Rajiv Gandhi International Stadium, Hyderabad",
      matchDate: new Date("2024-03-28T15:30:00"),
      matchTime: "3:30 PM IST",
      matchType: "IPL 2024",
      status: "upcoming",
    },
    {
      team1: "Gujarat Titans",
      team2: "Lucknow Super Giants",
      venue: "Narendra Modi Stadium, Ahmedabad",
      matchDate: new Date("2024-03-29T19:30:00"),
      matchTime: "7:30 PM IST",
      matchType: "IPL 2024",
      status: "upcoming",
    },
  ];

  console.log("📅 Inserting matches...");
  await db.insert(matches).values(matchesData);

  // Seed players
  const playersData = [
    // Mumbai Indians
    { name: "Rohit Sharma", team: "Mumbai Indians", role: "batsman", credits: 11 },
    { name: "Ishan Kishan", team: "Mumbai Indians", role: "wicket-keeper", credits: 10 },
    { name: "Suryakumar Yadav", team: "Mumbai Indians", role: "batsman", credits: 10 },
    { name: "Jasprit Bumrah", team: "Mumbai Indians", role: "bowler", credits: 12 },
    { name: "Hardik Pandya", team: "Mumbai Indians", role: "all-rounder", credits: 11 },
    
    // Chennai Super Kings
    { name: "MS Dhoni", team: "Chennai Super Kings", role: "wicket-keeper", credits: 12 },
    { name: "Ravindra Jadeja", team: "Chennai Super Kings", role: "all-rounder", credits: 11 },
    { name: "Ruturaj Gaikwad", team: "Chennai Super Kings", role: "batsman", credits: 9 },
    { name: "Deepak Chahar", team: "Chennai Super Kings", role: "bowler", credits: 9 },
    { name: "Moeen Ali", team: "Chennai Super Kings", role: "all-rounder", credits: 10 },
    
    // Royal Challengers Bangalore
    { name: "Virat Kohli", team: "Royal Challengers Bangalore", role: "batsman", credits: 12 },
    { name: "Glenn Maxwell", team: "Royal Challengers Bangalore", role: "all-rounder", credits: 11 },
    { name: "Faf du Plessis", team: "Royal Challengers Bangalore", role: "batsman", credits: 10 },
    { name: "Mohammed Siraj", team: "Royal Challengers Bangalore", role: "bowler", credits: 9 },
    { name: "Dinesh Karthik", team: "Royal Challengers Bangalore", role: "wicket-keeper", credits: 9 },
    
    // Kolkata Knight Riders
    { name: "Andre Russell", team: "Kolkata Knight Riders", role: "all-rounder", credits: 11 },
    { name: "Sunil Narine", team: "Kolkata Knight Riders", role: "all-rounder", credits: 10 },
    { name: "Shreyas Iyer", team: "Kolkata Knight Riders", role: "batsman", credits: 10 },
    { name: "Varun Chakravarthy", team: "Kolkata Knight Riders", role: "bowler", credits: 9 },
    { name: "Rahmanullah Gurbaz", team: "Kolkata Knight Riders", role: "wicket-keeper", credits: 9 },
    
    // Delhi Capitals
    { name: "Rishabh Pant", team: "Delhi Capitals", role: "wicket-keeper", credits: 11 },
    { name: "David Warner", team: "Delhi Capitals", role: "batsman", credits: 10 },
    { name: "Axar Patel", team: "Delhi Capitals", role: "all-rounder", credits: 9 },
    { name: "Kuldeep Yadav", team: "Delhi Capitals", role: "bowler", credits: 9 },
    { name: "Prithvi Shaw", team: "Delhi Capitals", role: "batsman", credits: 8 },
    
    // Punjab Kings
    { name: "Shikhar Dhawan", team: "Punjab Kings", role: "batsman", credits: 10 },
    { name: "Liam Livingstone", team: "Punjab Kings", role: "all-rounder", credits: 10 },
    { name: "Jitesh Sharma", team: "Punjab Kings", role: "wicket-keeper", credits: 8 },
    { name: "Arshdeep Singh", team: "Punjab Kings", role: "bowler", credits: 9 },
    { name: "Sam Curran", team: "Punjab Kings", role: "all-rounder", credits: 10 },
    
    // Sunrisers Hyderabad
    { name: "Kane Williamson", team: "Sunrisers Hyderabad", role: "batsman", credits: 10 },
    { name: "Heinrich Klaasen", team: "Sunrisers Hyderabad", role: "wicket-keeper", credits: 9 },
    { name: "Washington Sundar", team: "Sunrisers Hyderabad", role: "all-rounder", credits: 9 },
    { name: "Bhuvneshwar Kumar", team: "Sunrisers Hyderabad", role: "bowler", credits: 9 },
    { name: "Abhishek Sharma", team: "Sunrisers Hyderabad", role: "batsman", credits: 8 },
    
    // Rajasthan Royals
    { name: "Jos Buttler", team: "Rajasthan Royals", role: "wicket-keeper", credits: 11 },
    { name: "Sanju Samson", team: "Rajasthan Royals", role: "wicket-keeper", credits: 10 },
    { name: "Yashasvi Jaiswal", team: "Rajasthan Royals", role: "batsman", credits: 9 },
    { name: "Yuzvendra Chahal", team: "Rajasthan Royals", role: "bowler", credits: 10 },
    { name: "Ravichandran Ashwin", team: "Rajasthan Royals", role: "all-rounder", credits: 9 },
    
    // Gujarat Titans
    { name: "Hardik Pandya", team: "Gujarat Titans", role: "all-rounder", credits: 11 },
    { name: "Shubman Gill", team: "Gujarat Titans", role: "batsman", credits: 10 },
    { name: "Rashid Khan", team: "Gujarat Titans", role: "bowler", credits: 11 },
    { name: "Mohammed Shami", team: "Gujarat Titans", role: "bowler", credits: 10 },
    { name: "Wriddhiman Saha", team: "Gujarat Titans", role: "wicket-keeper", credits: 8 },
    
    // Lucknow Super Giants
    { name: "KL Rahul", team: "Lucknow Super Giants", role: "wicket-keeper", credits: 11 },
    { name: "Marcus Stoinis", team: "Lucknow Super Giants", role: "all-rounder", credits: 10 },
    { name: "Quinton de Kock", team: "Lucknow Super Giants", role: "wicket-keeper", credits: 10 },
    { name: "Ravi Bishnoi", team: "Lucknow Super Giants", role: "bowler", credits: 9 },
    { name: "Krunal Pandya", team: "Lucknow Super Giants", role: "all-rounder", credits: 9 },
  ];

  console.log("👥 Inserting players...");
  await db.insert(players).values(playersData);

  console.log("✅ Seeding complete!");
  process.exit(0);
}

seed().catch((error) => {
  console.error("❌ Seeding failed:", error);
  process.exit(1);
});
