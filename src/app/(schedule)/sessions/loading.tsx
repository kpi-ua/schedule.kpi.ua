import { ScheduleGrid } from '../_components/schedule-grid';

const EXAM_CARD_COUNT = 3;

export default function ScheduleExamsLoading() {
  return (
    <ScheduleGrid>
      <div className="mx-4 my-8 flex justify-center sm:mx-8 sm:my-16">
        <div className="h-8 w-full max-w-125 animate-pulse rounded-full bg-neutral-100 sm:h-10" />
      </div>
      <div className="mx-4 mb-4 flex flex-col items-center gap-10 sm:mx-8 sm:mb-8">
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
