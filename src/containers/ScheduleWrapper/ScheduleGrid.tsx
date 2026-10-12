'use client';

import { cn } from '../../common/utils/cn';
import { useNavigationPendingContext } from '../../common/context/NavigationPendingContext';

export const ScheduleGrid = ({ className, children, ...props }: React.ComponentPropsWithoutRef<'div'>) => {
  const { isPending } = useNavigationPendingContext();

  return (
    <div
      className={cn(
        'relative flex grow flex-col gap-4 overflow-hidden rounded-[20px] border-2 border-neutral-100 bg-bg-table',
        className,
      )}
      {...props}
    >
      {children}
      {isPending && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-white/70">
          <span className="w-10 h-10 border-4 rounded-full animate-spin border-neutral-200 border-t-brand-600" />
        </div>
      )}
    </div>
  );
};
