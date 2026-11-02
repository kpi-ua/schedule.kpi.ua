const DAY_COLUMNS = 6;
const SKELETON_ROWS = 4;

const ScheduleGridSkeleton = () => (
  <div className="m-3 grid grid-cols-1 gap-x-2.5 gap-y-2.5 pl-17 sm:grid-cols-2 sm:pl-25 lg:grid-cols-3 2xl:grid-cols-6">
    {Array.from({ length: DAY_COLUMNS }).map((_, i) => (
      <div key={`header-${i}`} className="z-2 hidden h-6 animate-pulse rounded-2xl bg-neutral-100 sm:block" />
    ))}
    {Array.from({ length: SKELETON_ROWS * DAY_COLUMNS }).map((_, i) => (
      <div key={`cell-${i}`} className="h-37.5 animate-pulse rounded-2xl bg-neutral-100" />
    ))}
  </div>
);

export default ScheduleGridSkeleton;
