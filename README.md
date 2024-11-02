# Route

Route is a platform that allows users to easily share their favourite links, tech skills and GitHub stats in one centralized place.

![Route Logo](https://i.imgur.com/mSXJ4E3.png)

[![Chat](https://img.shields.io/discord/1003691521280856084?label=chat&logo=discord&color=7289da)](https://discord.gg/UJPrgQvrUv)

## 🎮 Features

- Showcase your favorite links like Linktree
- Showcase your Tech Stack with a cool design
- Automatically show your Github stats
- Shareable link at `https://route2.dev/yourusername`

## 🔮 Tech Stack

- **FullStack Framework**: SvelteKit
- **Styling**: Shadcn-Svelte && Tailwind
- **Database**: PostgresQL (Prisma as ORM)

## 🫂 How to Contribute

1. Clone the project

```bash
git clone https://github.com/s1lvax/route
```

2. Install dependencies

```bash
pnpm i
```

3. Run a Postgres instance (I recommend using Docker CLI on Linux/Mac or Docker Desktop on Windows)

```bash
docker run --name your_postgres_container -e POSTGRES_USER=your_username -e POSTGRES_PASSWORD=your_password -e POSTGRES_DB=your_database -p 5432:5432 -d postgres
```

4. Update the `example.env` to `.env` and fill in your data
5. Push the database schema using Prisma

```bash
npx prisma db push
```

6. Start the dev server

```bash
pnpm dev
```

7. Develop the change using a separate branch, either `bugfix/name` or `feature/name`
8. Push your changes and open a Pull Request with details about your changes. Pull requests must be made to the `dev` branch

A deployment of the `dev` branch exists at [https://testing.route2.dev/](https://testing.route2.dev/). The `dev` branch is merged into `main` for each new release, and the latest release is deployed at [https://route2.dev/](https://route2.dev/)

#### All Pull Requests are very appreciated :D
