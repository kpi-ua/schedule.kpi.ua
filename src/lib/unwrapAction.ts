interface ActionResult<T> {
  data?: T;
  serverError?: string;
}

// Server Components call actions directly (no useAction hook), so unwrap the result here
// and rethrow to preserve the old throw-on-failure behavior of campusApi/endpoints.ts.
export const unwrapAction = async <T>(action: Promise<ActionResult<T>>): Promise<T> => {
  const result = await action;

  if (result.data !== undefined) {
    return result.data;
  }

  throw new Error(result.serverError ?? 'Server action failed');
};
