# Backend Migration TODO: Replace Supabase with MongoDB Backend in "OneFolder"

## Step 1: Set Up Backend Project Structure

- [x] Create "OneFolder" directory in project root
- [x] Initialize Node.js project (npm init -y)
- [x] Install core dependencies: express, mongoose, dotenv, cors
- [x] Install additional dependencies: openai, axios (for news API), bcryptjs (for auth), jsonwebtoken (for JWT), express-rate-limit (for rate limiting)

## Step 2: Set Up MongoDB Atlas Connection

- [x] Create MongoDB Atlas cluster and database
- [x] Obtain connection string and add to .env file
- [x] Create database connection file (db.js) using Mongoose
- [x] Define MongoDB schemas/models:
  - User model (for authentication)
  - Article model (for news articles)
  - Bookmark model (for user bookmarks)
  - Interaction model (for tracking views/bookmarks for recommendations)

## Step 3: Implement Authentication (if needed)

- [x] Set up JWT authentication middleware
- [x] Create auth routes: POST /api/auth/register, POST /api/auth/login
- [x] Add user registration and login logic with password hashing

## Step 4: Create API Endpoints to Replace Supabase Functions

- [x] GET /api/news: Fetch news from external API (e.g., NewsAPI), store in DB if needed
- [x] GET /api/bookmarks: Retrieve user bookmarks (requires auth)
- [x] POST /api/bookmarks: Add/remove bookmarks (requires auth) - Fixed URL validation error
- [x] GET /api/recommendations: Generate personalized recommendations based on user interactions
- [x] POST /api/summarize: Summarize article using OpenAI API - Fixed Buffer error

## Step 5: Add Error Handling, Caching, and Rate Limiting

- [x] Implement global error handling middleware
- [x] Add caching for news fetching and summaries (e.g., using node-cache or Redis)
- [x] Set up rate limiting for API calls

## Step 6: Update Frontend Integration

- [x] Update src/integrations/supabase/client.ts to point to new backend URLs (e.g., http://localhost:5000/api)
- [x] Remove @supabase/supabase-js from package.json
- [x] Update any frontend code that calls Supabase functions to use new API endpoints
- [x] Add axios or fetch calls for new endpoints

## Step 7: Testing and Cleanup

- [x] Test all endpoints with Postman or similar tool
- [x] Update frontend components (e.g., NewsCard, Index.tsx) to work with new backend
- [x] Remove Supabase-related files and folders (supabase/, migrations, etc.)
- [x] Update README.md with new backend setup instructions
- [x] Ensure the app runs with new backend (test dev server)

## Step 8: Final Polish

- [ ] Add environment variables for production (MongoDB URI, OpenAI key, JWT secret)
- [ ] Implement logging (e.g., winston)
- [ ] Add API documentation (e.g., Swagger)
- [ ] Deploy backend if needed
