import { env } from "@/config/env";

export const appConfig = {
  domain: env.DOMAIN,
  name: "Next Credentials Auth",
  description:
    "Next Auth is a Next.js starter template with credentials authentication built using NextAuth v5, Drizzle ORM, PostgreSQL, TypeScript, Zod and Resend.",
} as const;
