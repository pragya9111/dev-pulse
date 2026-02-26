# 🚀 Dev-Pulse | Developer Resource Curator

**Dev-Pulse** ek modern, playful aur functional full-stack web application hai jo developers ko internet ke best resources (blogs, tools, tutorials) khojne aur organize karne mein madad karta hai.

---

## ✨ Project Personality
- **Vibe:** Playful, Funky, and Welcoming.
- **Design:** Rounded corners (12px), Soft shadows, Vibrant accents.
- **Typography:** `Space Grotesk` (Headings) & `Fredoka` (Body).

## 🛠 Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** SCSS + Ant Design (Customized)
- **State Management:** Redux Toolkit
- **API:** GraphQL (Apollo)
- **Database:** MySQL with Drizzle ORM
- **Authentication:** NextAuth.js (Auth.js)

## 📁 Project Structure (Current State)
- `src/app`: Routing and UI Pages.
- `src/styles`: Global SCSS and Theme variables.
- `src/components`: Reusable UI elements.
- `src/db`: Database schema and Drizzle config.

---

## 🏗 Setup & Installation

1. **Clone the repo:**
   ```bash
   git clone [https://github.com/your-username/dev-pulse.git](https://github.com/your-username/dev-pulse.git)
   ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Run development server:**
    ```bash
    npm run dev
    ```

## 📝 Recent Implementation: Phase 1 (Project Setup)
- Next.js 15 Initialization with TypeScript.
- SCSS Variables and Global Theme setup (Coral, Teal, Indigo palette).
- Ant Design Integration with custom ConfigProvider.
- Professional Folder Structure.

### 📝 Recent Implementation: Phase 2 (Hero Section)
- Implemented Playful Hero Section with Gradient Typography.
- Customized Ant Design Primary Button with hover scale effects.
- Added Responsive SCSS module for Landing Page.
- Rename variable.scss file to variables.scss

### 📝 Recent Implementation: Phase 3 (GraphQL API & Database)
- **GraphQL API Setup**: Apollo Server with Next.js integration
- **Database Schema**: MySQL with Drizzle ORM (users, resources tables)
- **Apollo Client**: Configured with provider wrapper for client-side queries
- **Type-safe Resolvers**: Implemented for getResources and addResource mutations
- **Database Connection**: Drizzle with MySQL2 driver

## 🔧 GraphQL Setup

### API Endpoint
- **GraphQL Endpoint**: `/api/graphql`
- **Schema Location**: [src/graphql/schema.ts](./src/graphql/schema.ts)
- **Resolvers Location**: [src/graphql/resolvers.ts](./src/graphql/resolvers.ts)

### Available Queries
```graphql
query {
  getResources {
    id
    title
    description
    url
    thumbnail
    category
    upvotes
  }
  
  getResourceById(id: "1") {
    id
    title
    # ... other fields
  }
}
```

### Available Mutations

```graphql
mutation {
  addResource(
    title: "Amazing Resource"
    url: "https://example.com"
    category: "tools"
    description: "A useful developer tool"
  ) {
    id
    title
    url
    category
  }
}
```

### Database Setup
#### Environment Variables
Create `.env.local` file:
```bash
DATABASE_URL="mysql://username:password@localhost:3306/dev_pulse"
```

#### Drizzle Commands
```bash
# Generate migrations
npx drizzle-kit generate

# Run migrations
npx drizzle-kit migrate

# Push to database (development)
npm run db:push
```

#### Database Schema
- **Users Table**: id, name, email, image, createdAt
- **Resources Table**: id, title, description, url, thumbnail, category, authorId, upvotes, createdAt
