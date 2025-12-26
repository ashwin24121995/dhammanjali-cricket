# Dhammanjali Fantasy Cricket - Deployment Guide

## Railway Deployment Instructions

### Prerequisites
- GitHub account with the repository pushed
- Railway account (sign up at https://railway.app)
- Database provider (Railway MySQL or external)

### Required Environment Variables

You must configure these environment variables in Railway:

#### Database
```
DATABASE_URL=mysql://root:CtDmKewJYTyWzpwZqaWXdwsemVJVWTRZ@tramway.proxy.rlwy.net:49002/railway
```

#### Authentication & Security
```
JWT_SECRET=your-secure-random-string-min-32-chars-generate-one
```

#### Cricket API
```
CRICKET_API_KEY=your-cricketdata-org-api-key
```





### Step-by-Step Deployment

#### 1. Create Railway Project
1. Go to https://railway.app
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Choose `dhammanjali-cricket` repository
5. Railway will automatically detect the Node.js project

#### 2. Add MySQL Database
1. In your Railway project, click "+ New"
2. Select "Database" → "MySQL"
3. Railway will provision a MySQL database
4. Copy the `DATABASE_URL` from the database service

#### 3. Configure Environment Variables
1. Click on your web service
2. Go to "Variables" tab
3. Add all required environment variables listed above
4. **Important**: Use the `DATABASE_URL` from your Railway MySQL service

#### 4. Configure Build & Deploy
Railway should auto-detect the configuration from `railway.json`, but verify:

- **Build Command**: `pnpm install && pnpm db:push`
- **Start Command**: `pnpm start`
- **Port**: Railway will auto-assign (the app listens on `process.env.PORT || 3000`)

#### 5. Deploy
1. Railway will automatically deploy after you add environment variables
2. Monitor the deployment logs
3. Once deployed, Railway will provide a public URL

#### 6. Database Migration
The build command includes `pnpm db:push` which will:
- Create all necessary database tables
- Apply the schema from `drizzle/schema.ts`

### Post-Deployment Verification

1. **Check Health**: Visit `https://your-app.railway.app/` 
2. **Test Registration**: Try creating a new account
3. **Test Cricket API**: Check if matches are loading on the homepage
4. **Check Logs**: Monitor Railway logs for any errors

### Important Notes

⚠️ **OAuth Configuration**: The current OAuth setup uses Manus's authentication system. If you want to use Railway, you'll need to either:
- Keep using Manus OAuth (requires Manus platform access)
- Implement alternative authentication (Google, GitHub, custom)

⚠️ **S3 Storage**: The app uses S3 for file storage. On Railway, you'll need:
- AWS S3 bucket credentials
- Update `server/storage.ts` with your S3 configuration

⚠️ **Cricket API**: Ensure your CricketData.org API key is valid and has sufficient quota

### Troubleshooting

#### Build Fails
- Check if all dependencies are in `package.json`
- Verify Node.js version compatibility (requires Node 18+)
- Check build logs for specific errors

#### Database Connection Issues
- Verify `DATABASE_URL` format: `mysql://user:password@host:port/database`
- Ensure database service is running
- Check if database allows external connections

#### App Crashes on Start
- Check environment variables are set correctly
- Review Railway logs for error messages
- Verify `JWT_SECRET` is at least 32 characters

#### Cricket API Not Working
- Verify `CRICKET_API_KEY` is correct
- Check API quota/limits
- Review server logs for API error messages

### Alternative: Manus Built-in Hosting

**Recommended**: Instead of Railway, use Manus's built-in hosting:
- One-click deployment via "Publish" button
- All environment variables pre-configured
- Free hosting with custom domain support
- No manual database setup required
- Automatic HTTPS and SSL

### Support

For issues specific to:
- **Railway**: Check Railway documentation or support
- **Cricket API**: Contact CricketData.org support
- **Manus Platform**: Visit https://help.manus.im

---

## GitHub Repository

Repository: https://github.com/ashwin24121995/dhammanjali-cricket

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/ashwin24121995/dhammanjali-cricket.git
cd dhammanjali-cricket
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your credentials
```

4. Push database schema:
```bash
pnpm db:push
```

5. Start development server:
```bash
pnpm dev
```

The app will be available at http://localhost:3000

---

**Last Updated**: December 19, 2024
