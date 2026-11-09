// The id formats Campus API accepts: a group id binds to an int (a legacy UUID gets a 400),
// a lecturer id is the lowercase hex SHA-256 of the MyKPI teacher id.
export const entityIdPatterns = {
  groupId: /^[1-9]\d{0,8}$/,
  lecturerId: /^[0-9a-f]{64}$/,
};

export type EntityIdKey = keyof typeof entityIdPatterns;

export const parseEntityId = (key: EntityIdKey, value: string | null | undefined) =>
  value && entityIdPatterns[key].test(value) ? value : null;
