import dayjs from 'dayjs';
import 'dayjs/locale/uk';
import duration from 'dayjs/plugin/duration';
import isBetween from 'dayjs/plugin/isBetween';

dayjs.extend(isBetween);
dayjs.extend(duration);
