# 🏏 Dhammanjali Fantasy Cricket

> India's first completely free fantasy cricket platform dedicated to education, entertainment, and responsible gaming.

![Dhammanjali Fantasy Cricket](https://img.shields.io/badge/Fantasy-Cricket-orange)
![License](https://img.shields.io/badge/license-MIT-blue)
![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)

## 🌟 Features

- **100% Free to Play** - No entry fees, no premium memberships, no in-app purchases
- **Live Cricket Matches** - Real-time scores and updates from IPL, T20, ODI, and Test matches
- **Team Builder** - Create your dream team with 11 players within 100-credit budget
- **Captain & Vice-Captain** - Choose your captain (2x points) and vice-captain (1.5x points)
- **Role-Based Selection** - Filter players by batsman, bowler, all-rounder, or wicket-keeper
- **Live Commentary** - Ball-by-ball updates during ongoing matches
- **Skill-Based Competition** - Win through cricket knowledge, not luck
- **Responsible Gaming** - 18+ only, no real money involved

## 🚀 Tech Stack

- **Frontend**: React 19, Tailwind CSS 4, Wouter (routing)
- **Backend**: Express 4, tRPC 11, Node.js 18+
- **Database**: MySQL (Drizzle ORM)
- **Authentication**: Manus OAuth
- **APIs**: CricketData.org for live match data
- **Deployment**: Railway / Manus Platform

## 📋 Prerequisites

- Node.js 18+ and pnpm
- MySQL database
- CricketData.org API key
- Manus OAuth credentials (optional)

## 🛠️ Installation

1. **Clone the repository**
```bash
git clone https://github.com/ashwin24121995/dhammanjali-cricket.git
cd dhammanjali-cricket
```

2. **Install dependencies**
```bash
pnpm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory with the following variables:

```env
# Database
DATABASE_URL=mysql://user:password@localhost:3306/dhammanjali_cricket

# Authentication
JWT_SECRET=your-secure-random-string-min-32-chars
OAUTH_SERVER_URL=https://api.manus.im
VITE_OAUTH_PORTAL_URL=https://portal.manus.im
VITE_APP_ID=your-manus-app-id
OWNER_OPEN_ID=your-owner-id
OWNER_NAME=Your Name

# Cricket API
CRICKET_API_KEY=your-cricketdata-org-api-key

# App Config
VITE_APP_TITLE=Dhammanjali Fantasy Cricket
VITE_APP_LOGO=https://your-logo-url.com/logo.png
```

4. **Push database schema**
```bash
pnpm db:push
```

5. **Start development server**
```bash
pnpm dev
```

The app will be available at http://localhost:3000

## 📦 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm db:push` - Push database schema changes
- `pnpm test` - Run tests

## 🚢 Deployment

### Option 1: Railway (Recommended for External Hosting)

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed Railway deployment instructions.

Quick steps:
1. Push code to GitHub
2. Create new Railway project from GitHub repo
3. Add MySQL database service
4. Configure environment variables
5. Deploy automatically

### Option 2: Manus Platform (Easiest)

1. Use the built-in "Publish" button in Manus UI
2. All environment variables are pre-configured
3. Free hosting with custom domain support
4. One-click deployment

## 📁 Project Structure

```
dhammanjali-cricket/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── pages/         # Page components
│   │   ├── components/    # Reusable UI components
│   │   ├── lib/           # tRPC client setup
│   │   └── App.tsx        # Main app component
│   └── public/            # Static assets
├── server/                # Backend Express + tRPC
│   ├── _core/            # Core server configuration
│   ├── routers.ts        # tRPC routers
│   ├── db.ts             # Database helpers
│   ├── cricketApi.ts     # Cricket API integration
│   └── cricketRouter.ts  # Cricket data endpoints
├── drizzle/              # Database schema and migrations
│   └── schema.ts         # Database tables definition
├── shared/               # Shared types and constants
└── storage/              # S3 file storage helpers
```

## 🔑 Key Features Explained

### Team Creation
- Select 11 players from both teams
- Stay within 100-credit budget
- Each player has a credit value (7-12 credits)
- Choose 1 captain (2x points) and 1 vice-captain (1.5x points)
- Balance your team across roles

### Scoring System
- Runs: 1 point per run
- Wickets: 25 points per wicket
- Catches: 8 points per catch
- Run-outs: 6 points
- Captain multiplier: 2x
- Vice-captain multiplier: 1.5x

### Match Updates
- Automatic refresh every 30 seconds
- Real-time score updates
- Live commentary during matches
- Match status tracking (upcoming/live/completed)

## 🔒 Legal & Compliance

- **Age Restriction**: 18+ only
- **No Real Money**: 100% free, skill-based platform
- **State Restrictions**: Not available in Andhra Pradesh, Assam, Odisha, Telangana, Nagaland, and Sikkim
- **Responsible Gaming**: Educational and entertainment purposes only

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

**Dhammanjali India Private Limited**

- **Registered Office**: 1ST FLOOR, 154 KATKA JHUNSI, THANA- JHUNSI DISTRICT PRAYAGRAJ, Allahabad- 211019, Uttar Pradesh, India
- **Regional Office**: 18th Cross Rd, 5 Block, Vidyaranyapura, Bengaluru, Karnataka 560097, India
- **Email**: support@dhamman.com, info@dhamman.com
- **Website**: [https://dhammanjali.com](https://dhammanjali.com)

## 🙏 Acknowledgments

- CricketData.org for providing cricket match data API
- Manus Platform for hosting and infrastructure
- React and Tailwind CSS communities
- All contributors and cricket enthusiasts

---

**Made with ❤️ for cricket fans across India**

⚠️ **Disclaimer**: This is a skill-based, free-to-play platform for entertainment and educational purposes only. No real money is involved. Users must be 18+ years old.
