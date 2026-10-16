import dayjs from 'dayjs';
import 'dayjs/locale/uk';
import isBetween from 'dayjs/plugin/isBetween';
import duration from 'dayjs/plugin/duration';

dayjs.extend(isBetween);
dayjs.extend(duration);
