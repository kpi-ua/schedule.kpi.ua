import dayjs from 'dayjs';

export const parseTime = (timeString: string) => {
  const [hours, minutes] = timeString.split(':').map(Number);

  const today = dayjs().startOf('day');

  return today
    .hour(hours)
    .minute(minutes)
    .second(0);
};


