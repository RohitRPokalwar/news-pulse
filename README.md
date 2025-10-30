# NewsPulse - Trending Headlines Analyzer

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.19-yellow.svg)](https://vitejs.dev/)
[![Supabase](https://img.shields.io/badge/Supabase-2.76.1-green.svg)](https://supabase.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-blue.svg)](https://tailwindcss.com/)

A modern, responsive news aggregator that delivers trending headlines with visual analytics, bookmarking, and real-time updates. Built with React, TypeScript, and Supabase for a seamless user experience.

## 🌟 Features

- **Real-Time News Updates**: Stay informed with the latest news from trusted sources across multiple categories
- **Visual Analytics**: Explore news trends with interactive charts and keyword analysis
- **Bookmark Management**: Save and organize your favorite articles with cloud sync
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Mode**: Toggle between themes for comfortable reading
- **Secure Authentication**: User accounts with Supabase for personalized experience
- **Category Filtering**: Browse news by categories like General, Technology, Sports, Business, and Health
- **Source Tracking**: View news distribution by publication source

## 🚀 Tech Stack

### Frontend

- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **React Router** - Client-side routing
- **React Query** - Data fetching and caching
- **Recharts** - Data visualization components

### UI Components

- **Radix UI** - Accessible, unstyled UI primitives
- **shadcn/ui** - Beautiful, customizable components
- **Lucide React** - Modern icon library

### Backend & Database

- **Supabase** - Backend-as-a-Service with PostgreSQL database
- **Supabase Edge Functions** - Serverless functions for API calls
- **NewsAPI** - External news data provider

### Development Tools

- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **TypeScript** - Type checking
- **Vite Plugin React SWC** - Fast React compilation

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** or **yarn** or **bun**
- **Git**

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/newspulse.git
   cd newspulse
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory and add your Supabase credentials:

   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
   ```

   You'll also need to set up the `NEWSAPI_KEY` in your Supabase Edge Functions environment.

4. **Set up Supabase**

   - Create a new project on [Supabase](https://supabase.com)
   - Run the migration file to set up the database schema:
     ```bash
     supabase db push
     ```
   - Deploy the Edge Functions:
     ```bash
     supabase functions deploy fetch-news
     supabase functions deploy get-bookmarks
     supabase functions deploy manage-bookmark
     ```

5. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

   The app will be available at `http://localhost:8080`

## 📖 Usage

### For Users

1. **Sign Up/Login**: Create an account or log in to access personalized features
2. **Browse News**: View trending headlines in your selected category
3. **Bookmark Articles**: Click the bookmark icon on any article to save it
4. **View Analytics**: Access the analytics panel to see news trends and source distribution
5. **Manage Bookmarks**: View and remove saved articles from the bookmarks panel
6. **Theme Toggle**: Switch between light and dark modes in settings

### For Developers

- **Development**: `npm run dev` - Start development server
- **Build**: `npm run build` - Build for production
- **Preview**: `npm run preview` - Preview production build
- **Lint**: `npm run lint` - Run ESLint

## 🔧 Configuration

### Environment Variables

| Variable                        | Description                                  | Required |
| ------------------------------- | -------------------------------------------- | -------- |
| `VITE_SUPABASE_URL`             | Your Supabase project URL                    | Yes      |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Your Supabase publishable key                | Yes      |
| `NEWSAPI_KEY`                   | NewsAPI key (set in Supabase Edge Functions) | Yes      |

### Supabase Setup

The project uses Supabase for authentication and data storage. The database schema includes:

- `profiles` table: User profile information
- `bookmarks` table: User-saved articles

Edge Functions handle:

- `fetch-news`: Retrieves news from NewsAPI
- `get-bookmarks`: Fetches user bookmarks
- `manage-bookmark`: Adds/removes bookmarks

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push

### Other Platforms

The app can be deployed to any static hosting service like Netlify, GitHub Pages, or AWS S3.

For production builds:

```bash
npm run build
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure TypeScript types are properly defined

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **NewsAPI** for providing news data
- **Supabase** for backend services
- **shadcn/ui** for beautiful UI components
- **Tailwind CSS** for styling utilities
- **Framer Motion** for animations

---

**Built with ❤️ for news enthusiasts**
