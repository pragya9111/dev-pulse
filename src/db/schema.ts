// Isse top par import karein
import { mysqlTable, serial, varchar, text, timestamp, bigint } from 'drizzle-orm/mysql-core';

// Users Table (Same rahega)
export const users = mysqlTable('users', {
  id: serial('id').primaryKey(), // Yeh bigint unsigned auto_increment hota hai
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  image: varchar('image', { length: 255 }),
  createdAt: timestamp('created_at').defaultNow(),
});

// Resources Table (Fix here)
export const resources = mysqlTable('resources', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  description: text('description'),
  url: varchar('url', { length: 500 }).notNull(),
  thumbnail: varchar('thumbnail', { length: 500 }),
  category: varchar('category', { length: 100 }).notNull(),
  // FIX: int ki jagah bigint aur mode 'number' + unsigned logic
  authorId: bigint('author_id', { mode: 'number', unsigned: true }).references(() => users.id),
  upvotes: bigint('upvotes', { mode: 'number', unsigned: true }).default(0),
  createdAt: timestamp('created_at').defaultNow(),
});