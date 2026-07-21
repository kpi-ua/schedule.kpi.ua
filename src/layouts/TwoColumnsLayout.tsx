import { ComponentPropsWithoutRef } from 'react';
import { cn } from '../common/utils/cn';

export const TwoColumnsLayout = ({ className, ...props }: ComponentPropsWithoutRef<'div'>) => (
  <div
    className={cn(
      'my-9 grid grid-cols-2 gap-32 text-base max-lg:gap-8 max-sm:my-4 max-sm:grid-cols-1 max-sm:gap-4',
      className,
    )}
    {...props}
  />
);
