# Amigos Club Website

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Database Setup

1. Install dependencies:
```bash
npm install
```

2. Set up your environment variables:
```bash
cp .env.example .env
```

3. Update the DATABASE_URL in .env with your PostgreSQL connection string.

4. Run database migrations:
```bash
npx prisma migrate dev
```

5. Seed the database:
```bash
npx prisma db seed
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

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

Project Link: [https://github.com/Gokkulamoorthy/amigos-website](https://github.com/Gokkulamoorthy/amigos-website)
