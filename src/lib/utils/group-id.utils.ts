// Campus API takes the group id as an int. Links and localStorage of the previous schedule app still carry UUIDs,
// which it answers with 400; such an id counts as no group selected.
export const isGroupId = (value?: string): value is string => !!value && /^[1-9]\d{0,8}$/.test(value);
