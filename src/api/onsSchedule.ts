import { MYKPI_URL } from '../common/constants/config';
import { parseOnsOccurrences } from '../common/utils/onsSchedule';

export const getOnsOccurrences = async (groupId: string) => {
  const query = new URLSearchParams({ groupId });
  const response = await fetch(`${MYKPI_URL}/api/v1/schedule-occurrences?${query}`, {
    headers: { Accept: 'application/json' },
    credentials: 'omit',
  });
  if (!response.ok) throw new Error('ONS occurrence metadata unavailable');
  return parseOnsOccurrences(await response.json(), groupId);
};
