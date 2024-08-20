import { ListOption } from '../../types/ListOption';
import { ScreenSize } from '../../types/ScreenSize';

export const DAY_OPTIONS: Partial<Record<ScreenSize, ListOption<string>[]>> = {
  [ScreenSize.ExtraSmall]: [
    {label: 'ПН', value: '0-1'},
    {label: 'ВТ', value: '1-2'},
    {label: 'СР', value: '2-3'},
    {label: 'ЧТ', value: '3-4'},
    {label: 'ПТ', value: '4-5'},
    {label: 'СБ', value: '5-6'},
  ],
  [ScreenSize.Small]: [
    {label: 'ПН-ВТ', value: '0-2'},
    {label: 'СР-ЧТ', value: '2-4'},
    {label: 'ПТ-СБ', value: '4-6'},
  ],
  [ScreenSize.Medium]: [
    {label: 'ПН-СР', value: '0-3'},
    {label: 'ЧТ-СБ', value: '3-6'},
  ],
};
