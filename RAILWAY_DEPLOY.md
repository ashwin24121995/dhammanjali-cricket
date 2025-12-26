# 🚀 Quick Railway Deployment Guide

## Your Project is Ready!

✅ Code pushed to GitHub: https://github.com/ashwin24121995/dhammanjali-cricket  
✅ Build tested and working  
✅ Manus dependencies removed  
✅ Railway MySQL already configured

---

## Deploy to Railway (5 Minutes)

### Step 1: Create Railway Project
1. Go to https://railway.app
2. Click **"New Project"**
3. Select **"Deploy from GitHub repo"**
4. Choose **`ashwin24121995/dhammanjali-cricket`**
5. Railway will automatically detect Node.js and start building

### Step 2: Configure Environment Variables
Click on your web service → **Variables** tab → Add these 3 variables:

```env
DATABASE_URL=mysql://root:CtDmKewJYTyWzpwZqaWXdwsemVJVWTRZ@tramway.proxy.rlwy.net:49002/railway

JWT_SECRET=dhammanjali-super-secret-key-2024-fantasy-cricket-platform

CRICKET_API_KEY=4d0e8b9e-1c2a-4f3b-9d6e-7a8c5b4e3f2a
```

### Step 3: Deploy!
Railway will automatically:
- Install dependencies (`pnpm install`)
- Push database schema (`pnpm db:push`)
- Build the app (`pnpm build`)
- Start the server (`pnpm start`)

**That's it!** Your app will be live at `https://your-app.railway.app`

---

## ✅ What's Included

- **Full authentication system** (email/password, JWT tokens)
- **Cricket API integration** (CricketData.org)
- **Live match updates** (auto-refresh every 30 seconds)
- **Team creation interface** (11 players, 100 credits, captain/vice-captain)
- **Match detail pages** with live scores
- **User profiles and dashboards**
- **Responsive design** (mobile-friendly)

---

## 🔧 Troubleshooting

### Build Fails
- Check Railway logs for specific errors
- Verify Node.js version (requires 18+)
- Ensure all 3 environment variables are set

### Database Connection Error
- Verify `DATABASE_URL` is exactly as shown above
- Check if Railway MySQL service is running
- Try restarting the web service

### Cricket API Not Working
- Verify `CRICKET_API_KEY` is correct
- Check CricketData.org API quota/limits
- Review server logs for API error messages

---

## 📝 Post-Deployment

### Custom Domain (Optional)
1. Go to Railway project settings
2. Click **"Domains"**
3. Add your custom domain
4. Update DNS records as instructed

### Database Management
- Railway provides a built-in database UI
- Access via Railway dashboard → MySQL service
- Connection details available in service settings

### Monitoring
- View logs in Railway dashboard
- Monitor resource usage
- Set up alerts for errors

---

## 🎯 Next Steps

1. **Test the deployment**: Visit your Railway URL
2. **Register an account**: Test the registration flow
3. **Check match data**: Verify cricket API is working
4. **Create a team**: Test the team builder interface
5. **Monitor logs**: Watch for any errors

---

## 📚 Additional Resources

- Full documentation: See `DEPLOYMENT.md`
- GitHub repository: https://github.com/ashwin24121995/dhammanjali-cricket
- Railway docs: https://docs.railway.app
- CricketData.org: https://cricketdata.org

---

**Need help?** Check the detailed `DEPLOYMENT.md` file for comprehensive instructions and troubleshooting.

**Good luck with your deployment! 🏏**
