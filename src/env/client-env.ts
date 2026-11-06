import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const clientEnv = createEnv({
  client: {
    NEXT_PUBLIC_KBIS_URL: z.string(),
    NEXT_PUBLIC_ECAMPUS_URL: z.string(),
    NEXT_PUBLIC_LOCATION_URL: z.string(),
    NEXT_PUBLIC_KBIS_EMAIL: z.string(),
    NEXT_PUBLIC_SCHEDULE_REPO_URL: z.string(),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_KBIS_URL: process.env.NEXT_PUBLIC_KBIS_URL,
    NEXT_PUBLIC_ECAMPUS_URL: process.env.NEXT_PUBLIC_ECAMPUS_URL,
    NEXT_PUBLIC_LOCATION_URL: process.env.NEXT_PUBLIC_LOCATION_URL,
    NEXT_PUBLIC_KBIS_EMAIL: process.env.NEXT_PUBLIC_KBIS_EMAIL,
    NEXT_PUBLIC_SCHEDULE_REPO_URL: process.env.NEXT_PUBLIC_SCHEDULE_REPO_URL,
  },
});
