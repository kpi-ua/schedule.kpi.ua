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
}).use(async ({ next, metadata }) => {
  const start = Date.now();
  const result = await next();

  logger.info('action_call', {
    action: metadata?.actionName,
    success: result.success,
    durationMs: Date.now() - start,
  });

  return result;
});
