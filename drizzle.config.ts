import { defineConfig } from 'drizzle-kit';

// Drizzle Kit configuration for MySQL database
export default defineConfig({
  // Path to your database schema file
  schema: './src/db/schema.ts',

  // Output directory for generated migration files
  out: './drizzle',

  // Database dialect (mysql, postgresql, sqlite)
  dialect: 'mysql',

  // Database connection credentials from environment variables
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
