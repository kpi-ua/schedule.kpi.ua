type LogLevel = 'info' | 'warn' | 'error';

const write = (level: LogLevel, message: string, meta?: Record<string, unknown>) => {
  const line = JSON.stringify({ timestamp: new Date().toISOString(), level, message, ...meta });

  if (level === 'error') {
    console.error(line);
  } else if (level === 'warn') {
    console.warn(line);
  } else {
    console.log(line);
  }
};

export const logger = {
  info: (message: string, meta?: Record<string, unknown>) => write('info', message, meta),
  warn: (message: string, meta?: Record<string, unknown>) => write('warn', message, meta),
  error: (message: string, meta?: Record<string, unknown>) => write('error', message, meta),
};
