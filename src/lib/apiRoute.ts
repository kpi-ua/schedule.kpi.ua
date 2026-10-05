import { NextRequest, NextResponse } from 'next/server';
import { logger } from './logger';

type Handler = (request: NextRequest) => Promise<NextResponse>;

// Logs every /api/* request (method, status, duration) and turns unhandled failures
// (no stale cache available) into a 502 instead of a framework 500 page.
export const withApiLogging = (routeName: string, handler: Handler): Handler => {
  return async (request: NextRequest) => {
    const start = Date.now();

    try {
      const response = await handler(request);
      logger.info('api_request', {
        route: routeName,
        method: request.method,
        status: response.status,
        durationMs: Date.now() - start,
      });
      return response;
    } catch (error) {
      logger.error('api_request_failed', {
        route: routeName,
        method: request.method,
        durationMs: Date.now() - start,
        error: error instanceof Error ? error.message : String(error),
      });
      return NextResponse.json({ error: 'Campus API is currently unavailable' }, { status: 502 });
    }
  };
};
