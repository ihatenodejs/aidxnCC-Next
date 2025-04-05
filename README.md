# aidxnCC-Next

the latest generation of my personal homepage.

## Lineage

- **aidxnCC-Next** - Apr 2025
- [aidxnCC](https://github.com/ihatenodejs/aidxnFUN) - Jan 2025
- [aidxnFUN](https://github.com/ihatenodejs/aidxnFUN) - Late Oct 2024
- [aidxnFUNretro](https://github.com/ihatenodejs/aidxnFUNretro) - Early Oct 2024

## Develop or Run

### Requirements

- `bun` (Get it at [bun.sh](https://bun.sh))

### Instructions

1. **Clone my Repo**

   ```bash
   git clone https://github.com/ihatenodejs/aidxnCC-Next.git
   ```

2. **Install dependencies**

   ```bash
   bun install
   ```

3. **Build CSS**

   ```bash
   bun run build # Build once (use in production)
   bun run build:watch # Watch for changes in files (good for development)
   ```

4. **Serve!**

   ```bash
   bun dev
   ```

   You can now access the server at http://localhost:3000, or the port configured in your `.env` file.

## Environment Variables

`PORT` - The port which Express runs on (default: `3000`)