import { db } from '@/db';
import { resources } from '@/db/schema';

export const resolvers = {
  Query: {
    getResources: async () => {
      return await db.select().from(resources);
    },
  },
  Mutation: {
    addResource: async (_: any, { title, url, category, description }: any) => {
      try {
        const result = await db.insert(resources).values({
          title,
          url,
          category,
          description,
          authorId: null, // keep authorId null for now till Auth integration
          upvotes: 0,
        });
        
        return { 
          id: result[0].insertId, 
          title, 
          url, 
          category, 
          description, 
          upvotes: 0 
        };
      } catch (error) {
        console.error("Mutation Error:", error);
        throw new Error("Failed to add resource");
      }
    },
  },
};