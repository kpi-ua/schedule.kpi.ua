import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const serverEnv = createEnv({
  server: {
    APP_ENV: z.enum(['development', 'production']),
    CAMPUS_API_URL: z.string().nonempty(),
    CAMPUS_API_KEY: z.string().nonempty(),
    NODE_ENV: z.enum(['development', 'production']),
    GA_MEASUREMENT_ID: z.string().nonempty(),
    MAIN_COOKIE_DOMAIN: z.string().nonempty(),

    // Reserved for future KPI ID (SSO) integration — not used yet.
    KPI_ID_CLIENT_ID: z.string().optional(),
    KPI_ID_CLIENT_SECRET: z.string().optional(),
  },
  experimental__runtimeEnv: process.env,
});
