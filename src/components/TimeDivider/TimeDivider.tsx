import { parseTime } from '../../common/utils/parseTime';

const TimeDivider = ({ value }: { value: string }) => {
  const parsedTime = parseTime(value);

  return (
    <div className="relative col-[1/-1] self-start">
      <div className="absolute -top-[13px] right-0 -left-[65px] flex items-center sm:-top-[17px] sm:-left-[90px]">
        <div className="flex items-center justify-center rounded-full bg-brand-600 px-[5px] py-[3px] font-semibold text-white sm:px-[11px] sm:py-2">
          {parsedTime?.format('HH:mm')}
        </div>
        <div className="w-full border-0 border-t border-dashed border-neutral-400" />
      </div>
    </div>
  );
};

export default TimeDivider;
