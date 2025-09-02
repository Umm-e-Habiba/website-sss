import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis;

// Create a singleton Prisma client with better connection handling
const prisma = globalForPrisma.prisma || new PrismaClient({
  // Add connection pool settings to prevent prepared statement conflicts
  datasources: {
    db: {
      url: process.env.Superbase_POSTGRES_URL || "postgresql://user:password@localhost:5432/metroguards?schema=public&connection_limit=1&pool_timeout=0"
    }
  },
});

// Ensure the Prisma instance is cleaned up properly
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
} else {
  // In production, ensure we don't keep creating new instances
  process.on('beforeExit', async () => {
    await prisma.$disconnect();
  });
}

export default prisma;
