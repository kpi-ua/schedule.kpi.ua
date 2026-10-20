import { createSafeActionClient } from 'next-safe-action';
import { z } from 'zod';
import { logger } from './logger';

// Replaces withApiLogging: logs every action call (name/status/duration) and
// turns unhandled errors into a generic message instead of leaking details to the client.
export const actionClient = createSafeActionClient({
  defineMetadataSchema: () => z.object({ actionName: z.string() }),
  handleServerError: (error, { metadata }) => {
    logger.error('action_failed', {
      action: metadata?.actionName,
      error: error instanceof Error ? error.message : String(error),
    });

    return 'Campus API is currently unavailable';
  },
}).use(async ({ next, clientInput, metadata }) => {
  const startTime = performance.now();

  const result = await next();

  const durationMs = Math.round(performance.now() - startTime);

  // Full payload dumps are dev-only: serializing them blocks the event loop
  // under load and leaks applicant PII into production logs.
  if (process.env.NODE_ENV === 'development') {
    console.log('Metadata:', metadata);
    console.log('Client input:', clientInput);
    console.log('Result:', result);
  }

  console.log(`Action ${metadata.actionName} took ${durationMs} ms`);

  return result;
});
