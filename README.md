# Amigos Game Development Club Website

A modern website for the Amigos Game Development Club, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎮 Project showcase
- 👥 Member management
- 📅 Event management
- 📚 Resource library
- 💬 Community features
- 🔐 Secure authentication
- 📱 Responsive design

## Tech Stack

- **Frontend**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL with Prisma
- **Authentication**: NextAuth.js
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18.x or later
- PostgreSQL database
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/amigos-website.git
   cd amigos-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your database and authentication credentials.

4. Set up the database:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js app router pages
├── components/            # React components
│   ├── common/           # Shared components
│   ├── layout/           # Layout components
│   └── sections/         # Page sections
├── lib/                   # Utility functions and configurations
└── types/                # TypeScript type definitions
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter) - email@example.com

Project Link: [https://github.com/Gokkulamoorthy/Amigos-club](https://github.com/Gokkulamoorthy/Amigos-club) 
