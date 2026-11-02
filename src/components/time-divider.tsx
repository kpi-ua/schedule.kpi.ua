import { parseTime } from '@/lib/utils/date.utils';

export const TimeDivider = ({ value }: { value: string }) => {
  const parsedTime = parseTime(value);

  return (
    <div className="relative col-span-full self-start">
      <div className="absolute -top-3.25 right-0 -left-18 flex items-center sm:-top-4.25 sm:-left-24">
        <div className="flex items-center justify-center rounded-full bg-brand-600 px-[5px] py-[3px] font-semibold text-white sm:px-[11px] sm:py-2">
          {parsedTime?.format('HH:mm')}
        </div>
        <div className="w-full border-0 border-t border-dashed border-neutral-400" />
      </div>
    </div>
  );
};
