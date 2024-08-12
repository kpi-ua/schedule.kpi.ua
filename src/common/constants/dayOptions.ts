import { MODES } from './modes';

export const DAY_OPTIONS = {
  [MODES.EXTRA_SMALL]: [
    {label: 'ПН', value: '0-1'},
    {label: 'ВТ', value: '1-2'},
    {label: 'СР', value: '2-3'},
    {label: 'ЧТ', value: '3-4'},
    {label: 'ПТ', value: '4-5'},
    {label: 'СБ', value: '5-6'},
  ],
  [MODES.SMALL]: [
    {label: 'ПН-ВТ', value: '0-2'},
    {label: 'СР-ЧТ', value: '2-4'},
    {label: 'ПТ-СБ', value: '4-6'},
  ],
  [MODES.MEDIUM]: [
    {label: 'ПН-СР', value: '0-3'},
    {label: 'ЧТ-СБ', value: '3-6'},
  ]
};
