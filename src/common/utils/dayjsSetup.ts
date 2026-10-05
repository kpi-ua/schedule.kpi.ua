import dayjs from 'dayjs';
import 'dayjs/locale/uk';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import isBetween from 'dayjs/plugin/isBetween';
import duration from 'dayjs/plugin/duration';

dayjs.extend(isBetween);
dayjs.extend(localizedFormat);
dayjs.extend(duration);
dayjs.locale('uk');
