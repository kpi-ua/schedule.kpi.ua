import { ScheduleGrid } from '../../../containers/ScheduleWrapper/ScheduleGrid';

const EXAM_CARD_COUNT = 3;

export default function ScheduleExamsLoading() {
  return (
    <ScheduleGrid>
      <div className="flex justify-center mx-4 my-8 sm:mx-8 sm:my-16">
        <div className="w-full h-8 rounded-full max-w-125 animate-pulse bg-neutral-100 sm:h-10" />
      </div>
      <div className="flex flex-col items-center gap-10 mx-4 mb-4 sm:mx-8 sm:mb-8">
        {Array.from({ length: EXAM_CARD_COUNT }).map((_, i) => (
          <div
            key={i}
            className="h-37.5 w-full max-w-175 animate-pulse rounded-2xl border border-neutral-200 bg-neutral-100"
          />
        ))}
      </div>
    </ScheduleGrid>
  );
}
