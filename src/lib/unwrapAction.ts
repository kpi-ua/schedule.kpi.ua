interface ActionResult<T> {
  data?: T;
  serverError?: string;
}

// Server Components call actions directly (no useAction hook), so unwrap the result here
// and rethrow so a failed Campus call fails the Server Component render.
export const unwrapAction = async <T>(action: Promise<ActionResult<T>>): Promise<T> => {
  const result = await action;

  if (result.data !== undefined) {
    return result.data;
  }

  throw new Error(result.serverError ?? 'Server action failed');
};
