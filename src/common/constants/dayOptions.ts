import { ListOption } from '../../types/ListOption';
import { ScreenSize } from '../../types/ScreenSize';

export type DaysRange = `${number}-${number}`;

export const DAY_OPTIONS: Partial<Record<ScreenSize, ListOption<DaysRange>[]>> = {
  [ScreenSize.ExtraSmall]: [
    { label: 'ПН', value: '1-1' },
    { label: 'ВТ', value: '2-2' },
    { label: 'СР', value: '3-3' },
    { label: 'ЧТ', value: '4-4' },
    { label: 'ПТ', value: '5-5' },
    { label: 'СБ', value: '6-6' },
  ],
  [ScreenSize.Small]: [
    { label: 'ПН-ВТ', value: '1-2' },
    { label: 'СР-ЧТ', value: '3-4' },
    { label: 'ПТ-СБ', value: '5-6' },
  ],
  [ScreenSize.Medium]: [
    { label: 'ПН-СР', value: '1-3' },
    { label: 'ЧТ-СБ', value: '4-6' },
  ],
};
