# TODO: Implement AI-Powered News Summarization and Personalized Recommendations

## Phase 1: AI-Powered News Summarization
- [x] Create new Supabase function `summarize-news` in `supabase/functions/summarize-news/`
  - [x] Set up OpenAI API integration (use environment variables for API key)
  - [x] Implement summarization logic using GPT-3.5-turbo or similar
  - [x] Add caching to avoid repeated API calls
  - [x] Handle errors gracefully
- [x] Update NewsCard component to include summarize button
  - [x] Add state for summary display (show/hide)
  - [x] Add button with AI icon (e.g., Sparkles from lucide-react)
  - [x] Call summarize-news function on click
  - [x] Display summary in a collapsible section
- [x] Update Article interface if needed for summary field

## Phase 2: Personalized Recommendations
- [x] Create new Supabase function `get-recommendations` in `supabase/functions/get-recommendations/`
  - [x] Track user interactions (bookmarks, category preferences)
  - [x] Implement simple collaborative filtering or content-based recommendation
  - [x] Return recommended articles based on user history
- [ ] Update manage-bookmark function to track additional interactions (e.g., article views)
- [x] Add recommendations section to Index.tsx
  - [x] Add state for recommendations
  - [x] Fetch recommendations on page load
  - [x] Display "Recommended for You" section above news grid
  - [x] Use existing NewsCard component for recommendations

## Phase 3: Integration and Testing
- [ ] Update Navbar to include recommendations toggle if needed
- [ ] Ensure proper error handling and loading states
- [ ] Test summarization with sample articles
- [ ] Test recommendations with mock user data
- [ ] Optimize performance (caching, lazy loading)
- [ ] Update README with new features

## Phase 4: Polish and Deployment
- [ ] Add feature flags for easy toggling
- [ ] Implement rate limiting for AI API calls
- [ ] Add analytics tracking for feature usage
- [ ] Test on different devices and browsers
- [ ] Deploy and verify in production environment
