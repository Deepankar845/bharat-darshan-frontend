# Bharat Explorer

Build the frontend for Bharat Darshan, an AI-based tour guide app for exploring India with destination guides, an AI tour guide assistant, itinerary planning, and cultural heritage exploration.

**Live app**: https://bharat-darshan-frontend.lovable.app

## Project QR Code

Scan this QR code to open the project link:

![Bharat Darshan project QR code](qr/qrcode_404512939_d73fee5b3887525406b2fed259497f37.png)

## Run Locally

### Prerequisites

- Node.js 18 or newer
- npm

### Setup

```sh
git clone <this-repository-url>
cd bharat-darshan-frontend
npm install
```

### Start the development server

```sh
npm run dev
```

Open the local URL shown in the terminal. The project normally runs at:

```text
http://localhost:8080
```

### Windows PowerShell

If PowerShell blocks `npm.ps1`, run the npm commands through Command Prompt:

```powershell
cmd /c npm install
cmd /c npm run dev
```

### Production build

```sh
npm run build
```

To preview the production build locally:

```sh
npm run preview
```

## Supabase Backend

The Supabase client is configured in `src/lib/supabase.ts`. The initial database
schema, authentication profile trigger, indexes, and Row Level Security policies
are in:

```text
supabase/migrations/0001_initial_schema.sql
```

To apply the schema:

1. Open the Supabase project dashboard.
2. Open **SQL Editor** and create a new query.
3. Copy the contents of the migration file into the query.
4. Click **Run**.
5. Confirm the tables and policies under **Table Editor** and **Authentication**.

The publishable key can be used by the browser client. Never put a Supabase
`service_role` key in `.env.local` or frontend code.
