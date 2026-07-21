import { ComponentPropsWithoutRef } from 'react';
import { cn } from '../common/utils/cn';

export const TwoColumnsLayout = ({ className, ...props }: ComponentPropsWithoutRef<'div'>) => (
  <div
    className={cn(
      'my-9 grid grid-cols-2 gap-32 text-base max-[988px]:gap-8 max-xs:my-4 max-xs:grid-cols-1 max-xs:gap-4',
      className,
    )}
    {...props}
  />
);
